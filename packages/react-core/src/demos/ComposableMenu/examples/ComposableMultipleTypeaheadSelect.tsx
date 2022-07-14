import React from 'react';
import {
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  Popper,
  TextInputGroup,
  TextInputGroupMain,
  TextInputGroupUtilities,
  ChipGroup,
  Chip,
  Button
} from '@patternfly/react-core';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';

export const ComposableMultipleTypeaheadSelect: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState<string>('');
  const toggleRef = React.useRef<HTMLDivElement>();
  const inputRef = React.useRef<HTMLInputElement>();
  const menuRef = React.useRef<HTMLDivElement>();
  const containerRef = React.useRef<HTMLDivElement>();

  const options = [
    <MenuItem key={0} itemId="Option 1">
      Option 1
    </MenuItem>,
    <MenuItem key={1} itemId="Option 2">
      Option 2
    </MenuItem>,
    <MenuItem key={2} itemId="Option 3">
      Option 3
    </MenuItem>,
    <MenuItem key={3} itemId="Option 4">
      Option 4
    </MenuItem>,
    <MenuItem key={4} itemId="Option 5">
      Option 5
    </MenuItem>
  ];
  const visibleOptions = options.filter(opt => opt.props.itemId.toLowerCase().includes(inputValue.toLowerCase()));

  const handleMenuKeys = (event: KeyboardEvent) => {
    // If the menu is open and Escape or Tab is pressed from within the menu or toggle input
    if (
      isOpen &&
      (menuRef?.current?.contains(event.target as Node) || toggleRef?.current?.contains(event.target as Node))
    ) {
      if (event.key === 'Tab') {
        setIsOpen(false);
        inputRef?.current?.focus();
      }
      if (event.key === 'Escape') {
        inputRef?.current?.focus();
      }
    }

    // If the menu is closed and Enter or Space is pressed from within the toggle input
    if (!isOpen && toggleRef?.current?.contains(event.target as Node)) {
      if (event.key === 'Enter') {
        setIsOpen(true);
      }
    }

    // If the menu is open and ArrowDown is pressed from within the toggle input
    if (isOpen && toggleRef?.current?.contains(event.target as Node)) {
      if (event.key === 'ArrowDown') {
        const firstElement = menuRef?.current?.querySelector('li > button:not(:disabled)') as HTMLElement;
        firstElement && (firstElement as HTMLElement).focus();
      }
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (isOpen && !menuRef?.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, menuRef]);

  const onToggleClick = (ev: React.MouseEvent) => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setIsOpen(!isOpen);
  };

  const onChange = (nextValue: string, ev: React.FormEvent) => {
    ev.stopPropagation();
    if (!isOpen) {
      setIsOpen(!isOpen);
    }
    setInputValue(nextValue);
  };

  const onSelect = (itemId: string) => {
    setSelected(selected.includes(itemId) ? selected.filter(selection => selection !== itemId) : [...selected, itemId]);
  };

  const textInputToggle = (
    <div
      ref={toggleRef as React.Ref<HTMLDivElement>}
      style={
        {
          width: '500px'
        } as React.CSSProperties
      }
    >
      <TextInputGroup>
        <TextInputGroupMain value={inputValue} onChange={onChange} onClick={onToggleClick} innerRef={inputRef}>
          <ChipGroup>
            {selected.map((selection, index) => (
              <Chip
                key={index}
                onClick={ev => {
                  ev.stopPropagation();
                  onSelect(selection);
                }}
              >
                {selection}
              </Chip>
            ))}
          </ChipGroup>
        </TextInputGroupMain>
        <TextInputGroupUtilities>
          {inputValue !== '' && (
            <Button variant="plain" onClick={() => setInputValue('')} aria-label="Clear button and input">
              <TimesIcon />
            </Button>
          )}
          <Button variant="plain" onClick={onToggleClick} aria-label="Clear button and input">
            <CaretDownIcon />
          </Button>
        </TextInputGroupUtilities>
      </TextInputGroup>
    </div>
  );

  const menu = (
    <Menu
      ref={menuRef as React.Ref<HTMLDivElement>}
      id="select-menu"
      onSelect={(_ev, itemId) => onSelect(itemId?.toString() as string)}
      selected={selected}
    >
      <MenuContent>
        <MenuList>{visibleOptions}</MenuList>
      </MenuContent>
    </Menu>
  );
  return (
    <div ref={containerRef as React.Ref<HTMLDivElement>}>
      <Popper trigger={textInputToggle} popper={menu} appendTo={containerRef.current} isVisible={isOpen} />
    </div>
  );
};

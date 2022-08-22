import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuList, MenuItem, Popper } from '@patternfly/react-core';

export const ComposableStrictDropdown: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleRef = React.useRef<HTMLButtonElement | undefined>();
  const menuRef = React.useRef<HTMLDivElement | undefined>();
  const containerRef = React.useRef<HTMLDivElement | undefined>();

  const handleMenuKeys = (event: KeyboardEvent) => {
    if (!isOpen) {
      return;
    }
    if (menuRef?.current?.contains(event.target as Node) || toggleRef?.current?.contains(event.target as Node)) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsOpen(!isOpen);
        toggleRef?.current?.focus();
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
    setTimeout(() => {
      if (menuRef.current) {
        const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
        firstElement && (firstElement as HTMLElement).focus();
      }
    }, 0);
    setIsOpen(!isOpen);
  };

  const toggle = (triggerElement, setTriggerElement) => {
    if (toggleRef.current && !triggerElement) {
      setTriggerElement(toggleRef.current);
    }
    return (
      <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
        {isOpen ? 'Expanded' : 'Collapsed'}
      </MenuToggle>
    );
  };
  const menu = (popperElement: React.ReactElement, setPopperElement: React.Dispatch<any>, popperOptions: any) => {
    if (menuRef.current && !popperElement) {
      setPopperElement(menuRef.current);
    }
    return (
      // eslint-disable-next-line no-console
      <Menu ref={menuRef} onSelect={(_ev, itemId) => console.log('selected', itemId)} {...popperOptions}>
        <MenuContent>
          <MenuList>
            <MenuItem itemId={0}>Action</MenuItem>
            <MenuItem itemId={1} to="#default-link2" onClick={ev => ev.preventDefault()}>
              Link
            </MenuItem>
            <MenuItem isDisabled>Disabled Action</MenuItem>
            <MenuItem isDisabled to="#default-link4">
              Disabled Link
            </MenuItem>
          </MenuList>
        </MenuContent>
      </Menu>
    );
  };
  return (
    <React.StrictMode>
      <div ref={containerRef as React.LegacyRef<HTMLDivElement>}>
        <Popper trigger={toggle} popper={menu} appendTo={containerRef.current} isVisible={isOpen} />
      </div>
    </React.StrictMode>
  );
};

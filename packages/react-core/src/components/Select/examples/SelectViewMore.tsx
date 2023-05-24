import React from 'react';
import { Select, SelectOption, SelectList, MenuToggle, Spinner } from '@patternfly/react-core';

export const SelectViewMore: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>('Select a value');
  const [activeItem, setActiveItem] = React.useState<number | string>(0);
  const [isLoading, setIsLoading] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectOptions, setSelectOptions] = React.useState([
    <SelectOption key={0} value="Option 1">
      Option 1
    </SelectOption>,
    <SelectOption key={1} value="Option 2">
      Option 2
    </SelectOption>,
    <SelectOption key={2} value="Option 3">
      Option 3
    </SelectOption>,
    <SelectOption key={3} value="Option 4">
      Option 4
    </SelectOption>,
    <SelectOption key={4} value="Option 5">
      Option 5
    </SelectOption>,
    <SelectOption key={5} value="Option 6">
      Option 6
    </SelectOption>,
    <SelectOption key={6} value="Option 7">
      Option 7
    </SelectOption>,
    <SelectOption key={7} value="Option 8">
      Option 8
    </SelectOption>,
    <SelectOption key={8} value="Option 9">
      Option 9
    </SelectOption>,
    <SelectOption key={9} value="Final Option 10">
      Final Option 10
    </SelectOption>
  ]);
  const [numOptions, setNumOptions] = React.useState(3);
  const [visibleOptions, setVisibleOptions] = React.useState(selectOptions.slice(0, numOptions));
  const activeItemRef = React.useRef<HTMLElement>(null);
  const viewMoreRef = React.useRef<HTMLLIElement>(null);
  const toggleRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    activeItemRef.current?.focus();
  }, [visibleOptions]);

  const simulateNetworkCall = (networkCallback: () => void) => {
    setTimeout(networkCallback, 2000);
  };

  const getNextValidItem = (startingIndex: number, maxLength: number) => {
    let validItem;
    for (let i = startingIndex; i < maxLength; i++) {
      if (selectOptions[i].props.isDisabled) {
        continue;
      } else {
        validItem = selectOptions[i];
        break;
      }
    }
    return validItem;
  };

  const loadMoreOptions = () => {
    const newLength = numOptions + 3 <= selectOptions.length ? numOptions + 3 : selectOptions.length;
    const prevPosition = numOptions;
    const nextValidItem = getNextValidItem(prevPosition, newLength);

    setNumOptions(newLength);
    setIsLoading(false);
    setActiveItem(nextValidItem.props.value);
    setVisibleOptions(selectOptions.slice(0, newLength));
  };

  const onViewMoreClick = () => {
    setIsLoading(true);
    simulateNetworkCall(() => {
      loadMoreOptions();
    });
  };

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    // eslint-disable-next-line no-console
    console.log('selected', value);

    if (value !== 'loader') {
      setSelected(value as string);
      setIsOpen(false);
      toggleRef?.current?.focus(); // Only focus the toggle when a non-loader option is selected
    }
  };

  const toggle = (
    <MenuToggle
      ref={toggleRef}
      onClick={onToggleClick}
      isExpanded={isOpen}
      style={
        {
          width: '200px'
        } as React.CSSProperties
      }
    >
      {selected}
    </MenuToggle>
  );

  return (
    <Select
      id="single-view-more-select"
      isOpen={isOpen}
      selected={selected}
      onSelect={onSelect}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      toggle={{ toggleNode: toggle, toggleRef }}
    >
      <SelectList>
        {visibleOptions.map((option) => {
          const props = option.props;

          return <SelectOption key={option.key} ref={props.value === activeItem ? activeItemRef : null} {...props} />;
        })}
        {numOptions !== selectOptions.length && (
          <SelectOption
            {...(!isLoading && { isLoadButton: true })}
            {...(isLoading && { isLoading: true })}
            onClick={onViewMoreClick}
            value="loader"
            ref={viewMoreRef}
          >
            {isLoading ? <Spinner size="lg" /> : 'View more'}
          </SelectOption>
        )}
      </SelectList>
    </Select>
  );
};

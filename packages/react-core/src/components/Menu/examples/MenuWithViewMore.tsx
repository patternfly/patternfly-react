import React from 'react';
import { Menu, MenuList, MenuItem, MenuContent, Spinner } from '@patternfly/react-core';

export const MenuWithViewMore: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState<number | string>(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [numOptions, setNumOptions] = React.useState(3);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menuOptions, setMenuOptions] = React.useState([
    <MenuItem key={0} itemId={'view-more-0'}>
      Action
    </MenuItem>,
    <MenuItem
      key={1}
      itemId={'view-more-1'}
      to="#default-link2"
      // just for demo so that navigation is not triggered
      onClick={event => event.preventDefault()}
    >
      Link
    </MenuItem>,
    <MenuItem key={2} itemId="view-more-2" isDisabled>
      Disabled action
    </MenuItem>,
    <MenuItem key={3} itemId="view-more-3" isDisabled to="#default-link4">
      Disabled link
    </MenuItem>,
    <MenuItem key={4} itemId="view-more-4">
      Action 2
    </MenuItem>,
    <MenuItem key={5} itemId="view-more-5">
      Action 3
    </MenuItem>,
    <MenuItem key={6} itemId="view-more-6">
      Action 4
    </MenuItem>,
    <MenuItem key={7} itemId="view-more-7">
      Action 5
    </MenuItem>,
    <MenuItem key={8} itemId="view-more-8">
      Final option
    </MenuItem>
  ]);
  const [visibleOptions, setVisibleOptions] = React.useState(menuOptions.slice(0, numOptions));

  const activeItemRef = React.useRef<HTMLElement>(null);
  const viewMoreRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    activeItemRef.current?.focus();
  }, [visibleOptions]);

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: number | string | undefined) => {
    // eslint-disable-next-line no-console
    console.log(`clicked ${itemId}`);
    setActiveItem(itemId as string);
  };

  const simulateNetworkCall = (networkCallback: () => void) => {
    setTimeout(networkCallback, 2000);
  };

  const getNextValidItem = (startingIndex: number, maxLength: number) => {
    let validItem;
    for (let i = startingIndex; i < maxLength; i++) {
      if (menuOptions[i].props.isDisabled) {
        continue;
      } else {
        validItem = menuOptions[i];
        break;
      }
    }
    return validItem;
  };

  const loadMoreOptions = () => {
    const newLength = numOptions + 3 <= menuOptions.length ? numOptions + 3 : menuOptions.length;
    const prevPosition = numOptions;
    const nextValidItem = getNextValidItem(prevPosition, newLength);

    setNumOptions(newLength);
    setIsLoading(false);
    setActiveItem(nextValidItem.props.itemId);
    setVisibleOptions(menuOptions.slice(0, newLength));
  };

  const onViewMoreClick = () => {
    setIsLoading(true);
    simulateNetworkCall(() => {
      loadMoreOptions();
    });
  };

  return (
    <Menu activeItemId={activeItem} onSelect={onSelect}>
      <MenuContent>
        <MenuList>
          {visibleOptions.map(option => {
            const props = option.props;

            return <MenuItem key={option.key} ref={props.itemId === activeItem ? activeItemRef : null} {...props} />;
          })}
          {numOptions !== menuOptions.length && (
            <MenuItem
              {...(!isLoading && { isLoadButton: true })}
              {...(isLoading && { isLoading: true })}
              onClick={onViewMoreClick}
              itemId="loader"
              ref={viewMoreRef}
            >
              {isLoading ? <Spinner size="lg" /> : 'View more'}
            </MenuItem>
          )}
        </MenuList>
      </MenuContent>
    </Menu>
  );
};

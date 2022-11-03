import React from 'react';
import { SimpleList, SimpleListItem, SimpleListItemProps } from '@patternfly/react-core';

export const SimpleListUncontrolled: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (
    selectedItem: React.RefObject<HTMLButtonElement> | React.RefObject<HTMLAnchorElement>,
    selectedItemProps: SimpleListItemProps
  ) => {
    setActiveItem(selectedItemProps.itemId as number);
  };

  const items = [
    <SimpleListItem key="item1" itemId={0} isActive={activeItem === 0}>
      List item 1
    </SimpleListItem>,
    <SimpleListItem key="item2" itemId={1} isActive={activeItem === 1}>
      List item 2
    </SimpleListItem>,
    <SimpleListItem key="item3" itemId={2} isActive={activeItem === 2}>
      List item 3
    </SimpleListItem>
  ];

  return (
    <SimpleList onSelect={onSelect} isControlled={false} aria-label="Uncontrolled Simple List Example">
      {items}
    </SimpleList>
  );
};

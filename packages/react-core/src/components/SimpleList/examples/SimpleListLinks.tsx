import React from 'react';
import { SimpleList, SimpleListItem } from '@patternfly/react-core';

export const SimpleListLinks: React.FunctionComponent = () => {
  const items = [
    <SimpleListItem key="item1" component="a" href="#" isActive>
      List item 1
    </SimpleListItem>,
    <SimpleListItem key="item2" component="a" href="#">
      List item 2
    </SimpleListItem>,
    <SimpleListItem key="item3" component="a" href="#">
      List item 3
    </SimpleListItem>
  ];

  return <SimpleList aria-label="Simple List Links Example">{items}</SimpleList>;
};

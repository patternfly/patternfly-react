import React from 'react';
import { SimpleList, SimpleListItem } from '@patternfly/react-core';

export const SimpleListBasic: React.FunctionComponent = () => {
  const items = [
    <SimpleListItem key="item1" isActive>
      List item 1
    </SimpleListItem>,
    <SimpleListItem key="item2" component="a" href="#">
      List item 2
    </SimpleListItem>,
    <SimpleListItem key="item3">List item 3</SimpleListItem>
  ];

  return <SimpleList aria-label="Simple List Example">{items}</SimpleList>;
};

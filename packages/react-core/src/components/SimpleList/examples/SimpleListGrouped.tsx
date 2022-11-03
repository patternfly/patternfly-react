import React from 'react';
import { SimpleList, SimpleListItem, SimpleListGroup } from '@patternfly/react-core';

export const SimpleListGrouped: React.FunctionComponent = () => {
  const group1Items = [
    <SimpleListItem key="item1" isActive>
      List item 1
    </SimpleListItem>,
    <SimpleListItem key="item2">List item 2</SimpleListItem>,
    <SimpleListItem key="item3">List item 3</SimpleListItem>,
    <SimpleListItem key="item4">List item 4</SimpleListItem>
  ];

  const group2Items = [
    <SimpleListItem key="item5">List item 1</SimpleListItem>,
    <SimpleListItem key="item6" component="a" href="#">
      List item 2
    </SimpleListItem>,
    <SimpleListItem key="item7" component="a" href="#">
      List item 3
    </SimpleListItem>,
    <SimpleListItem key="item8">List item 4</SimpleListItem>
  ];

  return (
    <SimpleList aria-label="Grouped simple list example">
      <SimpleListGroup title="Group 1" id="group-1">
        {group1Items}
      </SimpleListGroup>
      <SimpleListGroup title="Group 2" id="group-2">
        {group2Items}
      </SimpleListGroup>
    </SimpleList>
  );
};

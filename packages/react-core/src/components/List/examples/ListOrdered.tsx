import { FunctionComponent } from 'react';
import { List, ListItem, ListComponent, OrderType } from '@patternfly/react-core';

export const ListOrdered: FunctionComponent = () => (
  <List component={ListComponent.ol} type={OrderType.number}>
    <ListItem>First</ListItem>
    <ListItem>Second</ListItem>
    <ListItem>Third</ListItem>
  </List>
);

import { FunctionComponent } from 'react';
import { List, ListItem, ListVariant } from '@patternfly/react-core';

export const ListInline: FunctionComponent = () => (
  <List variant={ListVariant.inline}>
    <ListItem>First</ListItem>
    <ListItem>Second</ListItem>
    <ListItem>Third</ListItem>
  </List>
);

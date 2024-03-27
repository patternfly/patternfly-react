import { FunctionComponent } from 'react';
import { List, ListItem } from '@patternfly/react-core';

export const ListBasic: FunctionComponent = () => (
  <List>
    <ListItem>First</ListItem>
    <ListItem>Second</ListItem>
    <ListItem>Third</ListItem>
  </List>
);

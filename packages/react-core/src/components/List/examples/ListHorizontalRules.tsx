import { FunctionComponent } from 'react';
import { List, ListItem } from '@patternfly/react-core';

export const ListHorizontalRules: FunctionComponent = () => (
  <List isPlain isBordered>
    <ListItem>First</ListItem>
    <ListItem>Second</ListItem>
    <ListItem>Third</ListItem>
  </List>
);

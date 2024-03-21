import { FunctionComponent } from 'react';
import { List, ListItem } from '@patternfly/react-core';

export const ListPlain: FunctionComponent = () => (
  <List isPlain>
    <ListItem>First</ListItem>
    <ListItem>Second</ListItem>
    <ListItem>Third</ListItem>
  </List>
);

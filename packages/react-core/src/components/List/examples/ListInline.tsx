import { List, ListItem, ListVariant } from '@rh-felt/react-core';

export const ListInline: React.FunctionComponent = () => (
  <List variant={ListVariant.inline}>
    <ListItem>First</ListItem>
    <ListItem>Second</ListItem>
    <ListItem>Third</ListItem>
  </List>
);

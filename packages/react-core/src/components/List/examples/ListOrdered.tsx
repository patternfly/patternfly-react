import { List, ListItem, ListComponent, OrderType } from '@rh-felt/react-core';

export const ListOrdered: React.FunctionComponent = () => (
  <List component={ListComponent.ol} type={OrderType.number}>
    <ListItem>First</ListItem>
    <ListItem>Second</ListItem>
    <ListItem>Third</ListItem>
  </List>
);

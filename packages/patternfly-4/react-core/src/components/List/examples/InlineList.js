import React from 'react';
import { List, ListItem } from '../index';

class InlineList extends React.Component {
  render() {
    return (
      <List variant="inline">
        <ListItem>First</ListItem>
        <ListItem>Second</ListItem>
        <ListItem>Third</ListItem>
      </List>
    );
  }
}

export default InlineList;

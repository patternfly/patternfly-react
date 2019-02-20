import React from 'react';
import { List, ListItem } from '../index';

class SimpleList extends React.Component {
  render() {
    return (
      <List>
        <ListItem>First</ListItem>
        <ListItem>Second</ListItem>
        <ListItem>Third</ListItem>
      </List>
    );
  }
}

export default SimpleList;

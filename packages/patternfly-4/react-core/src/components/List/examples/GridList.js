import React from 'react';
import { List, ListItem } from '@patternfly/react-core';

class GridList extends React.Component {
  static title = 'Grid List';

  render() {
    return (
      <List variant="grid">
        <ListItem>First</ListItem>
        <ListItem>Second</ListItem>
        <ListItem>Third</ListItem>
        <ListItem>Fourth</ListItem>
        <ListItem>Fifth</ListItem>
        <ListItem>Sixth</ListItem>
      </List>
    );
  }
}

export default GridList;

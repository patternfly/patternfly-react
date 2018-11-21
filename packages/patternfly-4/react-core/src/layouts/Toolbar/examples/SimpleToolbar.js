import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';

class SimpleToolbar extends React.Component {
  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarItem>Item 1</ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem>Item 2</ToolbarItem>
          <ToolbarItem>Item 3</ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem>Item 4</ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default SimpleToolbar;

import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class SimpleSplit extends React.Component {
  static title = 'Simple Toolbar Layout';
  static getContainerProps = getContainerProps;

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

export default SimpleSplit;

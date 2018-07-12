import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarSection, ToolbarItem } from '@patternfly/react-core';
import getContainerProps from './common/getContainerProps';

class SimpleToolbarSection extends React.Component {
  static title = 'Simple Toolbar Layout';
  static getContainerProps = getContainerProps;

  render() {
    return (
      <Toolbar>
        <ToolbarSection>
          <ToolbarGroup>
            <ToolbarItem>Item 1</ToolbarItem>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarItem>Item 2</ToolbarItem>
            <ToolbarItem>Item 3</ToolbarItem>
          </ToolbarGroup>
        </ToolbarSection>
        <ToolbarSection>
          <ToolbarGroup>
            <ToolbarItem>Item 4</ToolbarItem>
            <ToolbarItem>Item 5</ToolbarItem>
            <ToolbarItem>Item 6</ToolbarItem>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarItem>Item 7</ToolbarItem>
          </ToolbarGroup>
        </ToolbarSection>
      </Toolbar>
    );
  }
}

export default SimpleToolbarSection;

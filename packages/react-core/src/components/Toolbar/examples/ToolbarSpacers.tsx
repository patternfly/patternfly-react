import React from 'react';
import { Toolbar, ToolbarItem, ToolbarGroup, ToolbarContent } from '@patternfly/react-core';
import { Button } from '@patternfly/react-core';

export const ToolbarSpacers: React.FunctionComponent = () => {
  const items = (
    <React.Fragment>
      <ToolbarGroup variant="action-group">
        <ToolbarItem>
          <Button variant="secondary">Action</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Action</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Action</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Action</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup variant="action-group" gap={{ lg: 'gapSm' }}>
        <ToolbarItem>
          <Button variant="secondary">Action</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="primary">Action</Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup variant="action-group" gap={{ lg: 'gapLg' }}>
        <ToolbarItem>
          <Button variant="secondary">Action</Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Action</Button>
        </ToolbarItem>
      </ToolbarGroup>
    </React.Fragment>
  );

  return (
    <Toolbar id="toolbar-spacers">
      <ToolbarContent>{items}</ToolbarContent>
    </Toolbar>
  );
};

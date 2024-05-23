import React from 'react';
import { Toolbar, ToolbarItem, ToolbarGroup, ToolbarContent } from '@patternfly/react-core';
import { Button } from '@patternfly/react-core';

export const ToolbarSpacers: React.FunctionComponent = () => {
  const items = (
    <React.Fragment>
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
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary">Action</Button>
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="primary">Action</Button>
      </ToolbarItem>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup gap={{ lg: 'gapLg' }}>
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

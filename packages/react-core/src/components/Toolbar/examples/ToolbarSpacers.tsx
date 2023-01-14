import React from 'react';
import { Toolbar, ToolbarItem, ToolbarGroup, ToolbarContent } from '@patternfly/react-core';
import { Button } from '@patternfly/react-core';

export const ToolbarSpacers: React.FunctionComponent = () => {
  const items = (
    <React.Fragment>
      <ToolbarItem spacer={{ default: 'spacerNone' }}>
        <Button variant="secondary">Action</Button>
      </ToolbarItem>
      <ToolbarItem spacer={{ default: 'spacerSm' }}>
        <Button variant="secondary">Action</Button>
      </ToolbarItem>
      <ToolbarItem spacer={{ default: 'spacerMd' }}>
        <Button variant="secondary">Action</Button>
      </ToolbarItem>
      <ToolbarItem spacer={{ default: 'spacerLg' }}>
        <Button variant="secondary">Action</Button>
      </ToolbarItem>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarItem
        spacer={{
          default: 'spacerNone',
          md: 'spacerSm',
          lg: 'spacerMd',
          xl: 'spacerLg'
        }}
      >
        <Button variant="secondary">Action</Button>
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="primary">Action</Button>
      </ToolbarItem>
      <ToolbarItem variant="separator"></ToolbarItem>
      <ToolbarGroup spaceItems={{ lg: 'spaceItemsLg' }}>
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

import React from 'react';
import { Toolbar, ToolbarItem, ToolbarGroup, ToolbarContent } from '@patternfly/react-core';
import { Button } from '@patternfly/react-core';

export const ToolbarInsets: React.FunctionComponent = () => {
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
      <ToolbarGroup>
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
    <Toolbar
      id="toolbar-insets"
      inset={{
        default: 'insetNone',
        md: 'insetSm',
        xl: 'inset2xl',
        '2xl': 'insetLg'
      }}
    >
      <ToolbarContent>{items}</ToolbarContent>
    </Toolbar>
  );
};

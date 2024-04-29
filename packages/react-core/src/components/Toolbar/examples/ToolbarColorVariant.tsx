import React from 'react';
import { Toolbar, ToolbarItem, ToolbarContent, Button, SearchInput } from '@patternfly/react-core';

export const ToolbarColorVariant: React.FunctionComponent = () => (
  <React.Fragment>
    No background
    <Toolbar id="toolbar-color-variant-no-background" colorVariant={'no-background'}>
      <ToolbarContent>
        <ToolbarItem>
          <SearchInput aria-label="No backtround variant example search input" />
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Action</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator" />
        <ToolbarItem>
          <Button variant="primary">Action</Button>
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
    Primary background
    <Toolbar id="toolbar-color-variant-primary" colorVariant={'primary'}>
      <ToolbarContent>
        <ToolbarItem>
          <SearchInput aria-label="Primary background variant example search input" />
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Action</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator" />
        <ToolbarItem>
          <Button variant="primary">Action</Button>
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
    Secondary background
    <Toolbar id="toolbar-color-variant-secondary" colorVariant={'secondary'}>
      <ToolbarContent>
        <ToolbarItem>
          <SearchInput aria-label="Secondary background variant example search input" />
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="secondary">Action</Button>
        </ToolbarItem>
        <ToolbarItem variant="separator" />
        <ToolbarItem>
          <Button variant="primary">Action</Button>
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  </React.Fragment>
);

import React, { ReactNode } from 'react';
import {
  Button,
  ButtonVariant,
  Dropdown,
  DropdownToggle,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

const isDropdownOpen: boolean = false;

const userDropdownItems: ReactNode[] = [];

export const AppToolbar = (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarItem>
        <Button id="simple-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
          <CogIcon />
        </Button>
      </ToolbarItem>
    </ToolbarGroup>
    <ToolbarGroup>
      <ToolbarItem>
        <Dropdown
          isPlain
          position="right"
          onSelect={() => {}}
          isOpen={isDropdownOpen}
          toggle={<DropdownToggle onToggle={() => {}}>User</DropdownToggle>}
          dropdownItems={userDropdownItems}
        />
      </ToolbarItem>
    </ToolbarGroup>
  </Toolbar>
);

export default AppToolbar;

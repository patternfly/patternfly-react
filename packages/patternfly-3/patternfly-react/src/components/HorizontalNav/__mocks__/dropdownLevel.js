import React from 'react';
import { HorizontalNavMenu, HorizontalNavMenuItem } from '../index';
import { MenuItem } from '../../../index';

export const dropdownLevel = (
  <HorizontalNavMenu>
    <HorizontalNavMenuItem title="Dropdown" dropdown>
      <MenuItem>Link</MenuItem>
      <MenuItem>Another link</MenuItem>
      <MenuItem divider />
      <MenuItem>Separated link</MenuItem>
      <MenuItem divider />
      <MenuItem>One more separated link</MenuItem>
    </HorizontalNavMenuItem>
    <HorizontalNavMenuItem title="Dropdown with Submenu" dropdown>
      <MenuItem>Link</MenuItem>
      <MenuItem>Another link</MenuItem>
      <MenuItem divider />
      <MenuItem>Separated link</MenuItem>
      <MenuItem divider />
      <MenuItem>One more separated link</MenuItem>
      <HorizontalNavMenuItem title="More options" dropdown submenu>
        <MenuItem>Link</MenuItem>
        <MenuItem>Another link</MenuItem>
        <MenuItem divider />
        <MenuItem>Separated link</MenuItem>
        <MenuItem divider />
        <MenuItem>One more separated link</MenuItem>
      </HorizontalNavMenuItem>
    </HorizontalNavMenuItem>
    <HorizontalNavMenuItem title="Dropdown with Dropup Submenu" dropdown dropup>
      <MenuItem>Link</MenuItem>
      <MenuItem>Another link</MenuItem>
      <MenuItem divider />
      <MenuItem>Separated link</MenuItem>
      <MenuItem divider />
      <MenuItem>One more separated link</MenuItem>
      <HorizontalNavMenuItem title="More options" dropdown submenu>
        <MenuItem>Link</MenuItem>
        <MenuItem>Another link</MenuItem>
        <MenuItem divider />
        <MenuItem>Separated link</MenuItem>
        <MenuItem divider />
        <MenuItem>One more separated link</MenuItem>
      </HorizontalNavMenuItem>
    </HorizontalNavMenuItem>
    <HorizontalNavMenuItem title="Dropdown with Pull-left Submenu" dropdown>
      <MenuItem>Link</MenuItem>
      <MenuItem>Another link</MenuItem>
      <MenuItem divider />
      <MenuItem>Separated link</MenuItem>
      <MenuItem divider />
      <MenuItem>One more separated link</MenuItem>
      <HorizontalNavMenuItem title="More options" dropdown submenu pullLeft>
        <MenuItem>Link</MenuItem>
        <MenuItem>Another link</MenuItem>
        <MenuItem divider />
        <MenuItem>Separated link</MenuItem>
        <MenuItem divider />
        <MenuItem>One more separated link</MenuItem>
      </HorizontalNavMenuItem>
    </HorizontalNavMenuItem>
    <HorizontalNavMenuItem title="No Dropdown" />
  </HorizontalNavMenu>
);

import React from 'react';
import { HorizontalNavMenu, HorizontalNavMenuItem } from '../index';
import { MenuItem } from '../../../index';

export const dropdownLevel = (
  <HorizontalNavMenu>
    <HorizontalNavMenuItem id="dropdown" title="Dropdown" dropdown>
      <MenuItem>Link</MenuItem>
      <MenuItem>Another link</MenuItem>
      <MenuItem divider />
      <MenuItem>Separated link</MenuItem>
      <MenuItem divider />
      <MenuItem>One more separated link</MenuItem>
    </HorizontalNavMenuItem>
    <HorizontalNavMenuItem id="dropdown-with-submenu" title="Dropdown with Submenu" dropdown>
      <MenuItem>Link</MenuItem>
      <MenuItem>Another link</MenuItem>
      <MenuItem divider />
      <MenuItem>Separated link</MenuItem>
      <MenuItem divider />
      <MenuItem>One more separated link</MenuItem>
      <HorizontalNavMenuItem id="more-options" title="More options" dropdown submenu>
        <MenuItem>Link</MenuItem>
        <MenuItem>Another link</MenuItem>
        <MenuItem divider />
        <MenuItem>Separated link</MenuItem>
        <MenuItem divider />
        <MenuItem>One more separated link</MenuItem>
      </HorizontalNavMenuItem>
    </HorizontalNavMenuItem>
    <HorizontalNavMenuItem id="dropup-submenu" title="Dropdown with Dropup Submenu" dropdown dropup>
      <MenuItem>Link</MenuItem>
      <MenuItem>Another link</MenuItem>
      <MenuItem divider />
      <MenuItem>Separated link</MenuItem>
      <MenuItem divider />
      <MenuItem>One more separated link</MenuItem>
      <HorizontalNavMenuItem id="more-options" title="More options" dropdown submenu>
        <MenuItem>Link</MenuItem>
        <MenuItem>Another link</MenuItem>
        <MenuItem divider />
        <MenuItem>Separated link</MenuItem>
        <MenuItem divider />
        <MenuItem>One more separated link</MenuItem>
      </HorizontalNavMenuItem>
    </HorizontalNavMenuItem>
    <HorizontalNavMenuItem id="pull-left" title="Dropdown with Pull-left Submenu" dropdown>
      <MenuItem>Link</MenuItem>
      <MenuItem>Another link</MenuItem>
      <MenuItem divider />
      <MenuItem>Separated link</MenuItem>
      <MenuItem divider />
      <MenuItem>One more separated link</MenuItem>
      <HorizontalNavMenuItem id="left-more-options" title="More options" dropdown submenu pullLeft>
        <MenuItem>Link</MenuItem>
        <MenuItem>Another link</MenuItem>
        <MenuItem divider />
        <MenuItem>Separated link</MenuItem>
        <MenuItem divider />
        <MenuItem>One more separated link</MenuItem>
      </HorizontalNavMenuItem>
    </HorizontalNavMenuItem>
    <HorizontalNavMenuItem id="no-dropdown" title="No Dropdown" />
  </HorizontalNavMenu>
);

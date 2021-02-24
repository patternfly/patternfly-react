import React from 'react';
import { MenuItem } from '@patternfly/react-core';
import StorageDomainIcon from '@patternfly/react-icons/dist/js/icons/storage-domain-icon';

// We wrap the menu items that contain drilldown menus to keep things DRY since they're used to drill into, as well as drill out of the next menu

// rootMenu -> drilldownMenuStart
export const MenuItemStartRollout = ({ direction, onClick, ...rest }) => (
  <MenuItem itemId="group:start_rollout" direction={direction} onClick={onClick} {...rest}>
    Start rollout
  </MenuItem>
);
// rootMenu -> drilldownMenuPause
export const MenuItemPauseRollout = ({ direction, onClick, ...rest }) => (
  <MenuItem itemId="group:pause_rollout" direction={direction} onClick={onClick} {...rest}>
    Pause rollouts
  </MenuItem>
);
// rootMenu -> drilldownMenuStorage
export const MenuItemStorage = ({ direction, onClick, ...rest }) => (
  <MenuItem
    itemId="group:storage"
    icon={<StorageDomainIcon aria-hidden />}
    direction={direction}
    onClick={onClick}
    {...rest}
  >
    Add storage
  </MenuItem>
);
// drilldown menu parent -> drilldownMenuGrouping
export const MenuItemAppGrouping = ({ direction, onClick, ...rest }) => (
  <MenuItem itemId="group:app_grouping" description="Groups A-C" direction={direction} onClick={onClick} {...rest}>
    Application Grouping
  </MenuItem>
);
// drilldown menu parent -> drilldownMenuLabels
export const MenuItemLabels = ({ direction, onClick, ...rest }) => (
  <MenuItem itemId="group:labels" direction={direction} onClick={onClick} {...rest}>
    Labels
  </MenuItem>
);

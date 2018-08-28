import React from 'react';
import { Icon, Dropdown, MenuItem } from '../../../index';

export const MockIconBarChildren = props => (
  <React.Fragment>
    <li className="drawer-pf-trigger">
      <a className="nav-item-iconic">
        <Icon name="bell" />
      </a>
    </li>
    <Dropdown componentClass="li" id="help">
      <Dropdown.Toggle useAnchor className="nav-item-iconic">
        <Icon type="pf" name="help" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <MenuItem>Help</MenuItem>
        <MenuItem>About</MenuItem>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown componentClass="li" id="user">
      <Dropdown.Toggle useAnchor className="nav-item-iconic">
        <Icon type="pf" name="user" /> Brian Johnson
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <MenuItem>Preferences</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  </React.Fragment>
);

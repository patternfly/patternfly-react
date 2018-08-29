import React from 'react';
import { Masthead, MenuItem } from '../../../index';

export const mastheadMock = props => (
  <Masthead {...props}>
    <Masthead.Collapse>
      <Masthead.Dropdown id="app-help-dropdown" title={<span title="Help" className="pficon pficon-help" />} noCaret>
        <MenuItem eventKey="1">Help</MenuItem>
        <MenuItem eventKey="2">About</MenuItem>
      </Masthead.Dropdown>
      <Masthead.Dropdown
        id="app-user-dropdown"
        title={
          <span>
            <span title="Help" className="pficon pficon-user" />
            <span className="dropdown-title"> Brian Johnson</span>
          </span>
        }
      >
        <MenuItem eventKey="1">User Preferences</MenuItem>
        <MenuItem eventKey="2">Logout</MenuItem>
      </Masthead.Dropdown>
    </Masthead.Collapse>
  </Masthead>
);

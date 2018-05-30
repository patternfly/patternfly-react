import React from 'react';
import { shallow } from 'enzyme';
import { DropdownButton, MenuItem } from '../../index';
import { Masthead } from './index';

test('Masthead renders properly', () => {
  const onNavToggleMock = jest.fn();
  const onTitleClickMock = jest.fn();
  const pfLogo = 'Fake Logo';
  const pfBrand = 'Fake Brand';

  const component = shallow(
    <Masthead
      iconImg={pfLogo}
      titleImg={pfBrand}
      title="Patternfly React"
      onNavToggleClick={onNavToggleMock}
      onTitleClick={onTitleClickMock}
    >
      <li className="dropdown">
        <DropdownButton
          id="app-help-dropdown"
          className="dropdown-toggle nav-item-iconic"
          bsStyle="link"
          title={<span title="Help" className="pficon pficon-help" />}
        >
          <MenuItem eventKey="1">Help</MenuItem>
          <MenuItem eventKey="2">About</MenuItem>
        </DropdownButton>
      </li>
      <li className="dropdown">
        <DropdownButton
          id="app-user-dropdown"
          className="dropdown-toggle nav-item-iconic"
          bsStyle="link"
          title={
            <span>
              <span title="Help" className="pficon pficon-user" />
              <span className="dropdown-title"> Brian Johnson</span>
            </span>
          }
        >
          <MenuItem eventKey="1">Preferences</MenuItem>
          <MenuItem eventKey="2">Logout</MenuItem>
        </DropdownButton>
      </li>
    </Masthead>
  );
  component.find('.navbar-toggle').simulate('click');
  expect(onNavToggleMock).toBeCalled();
  component.find('.navbar-brand').simulate('click');
  expect(onTitleClickMock).toBeCalled();
  expect(component).toMatchSnapshot('Masthead snapshot');
});

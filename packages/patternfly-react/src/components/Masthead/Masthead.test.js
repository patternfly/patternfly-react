import React from 'react';
import { shallow } from 'enzyme';
import { MenuItem } from '../../index';
import { Masthead } from './index';
import CustomMastheadDropdown from './InnerComponents/CustomMastheadDropdown';

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
      <Masthead.Collapse>
        <Masthead.Dropdown id="app-help-dropdown" title={<span title="Help" className="pficon pficon-help" />}>
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
          <MenuItem eventKey="1">Preferences</MenuItem>
          <MenuItem eventKey="2">Logout</MenuItem>
        </Masthead.Dropdown>
      </Masthead.Collapse>
    </Masthead>
  );
  component.find('.navbar-toggle').simulate('click');
  expect(onNavToggleMock).toBeCalled();
  component.find('.navbar-brand').simulate('click');
  expect(onTitleClickMock).toBeCalled();
  expect(component).toMatchSnapshot('Masthead snapshot');
});

test('Masthead without nav toggle renders properly', () => {
  const onTitleClickMock = jest.fn();
  const pfLogo = 'Fake Logo';
  const pfBrand = 'Fake Brand';

  const component = shallow(
    <Masthead
      iconImg={pfLogo}
      titleImg={pfBrand}
      title="Patternfly React"
      navToggle={false}
      onTitleClick={onTitleClickMock}
    >
      <Masthead.Collapse>
        <Masthead.Dropdown id="app-help-dropdown" title={<span title="Help" className="pficon pficon-help" />}>
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
          <MenuItem eventKey="1">Preferences</MenuItem>
          <MenuItem eventKey="2">Logout</MenuItem>
        </Masthead.Dropdown>
      </Masthead.Collapse>
    </Masthead>
  );
  component.find('.navbar-brand').simulate('click');
  expect(onTitleClickMock).toBeCalled();
  expect(component).toMatchSnapshot('Masthead without nav toggle snapshot');
});

test('MastheadCollapse renders properly', () => {
  const component = shallow(
    <Masthead.Collapse>
      <Masthead.Dropdown id="app-help-dropdown" title={<span title="Help" className="pficon pficon-help" />}>
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
        <MenuItem eventKey="1">Preferences</MenuItem>
        <MenuItem eventKey="2">Logout</MenuItem>
      </Masthead.Dropdown>
    </Masthead.Collapse>
  );
  expect(component).toMatchSnapshot('MastheadCollapse snapshot');
});

test('MastheadDropdown renders properly', () => {
  const component = shallow(
    <Masthead.Dropdown id="app-help-dropdown" title={<span title="Help" className="pficon pficon-help" />}>
      <MenuItem eventKey="1">Help</MenuItem>
      <MenuItem eventKey="2">About</MenuItem>
    </Masthead.Dropdown>
  );
  expect(component).toMatchSnapshot('MastheadDropdown snapshot');
});

test('CustomMastheadDropdown renders properly', () => {
  const component = shallow(<CustomMastheadDropdown className="dropdown">children</CustomMastheadDropdown>);
  expect(component).toMatchSnapshot('CustomMastheadDropdown snapshot');
});

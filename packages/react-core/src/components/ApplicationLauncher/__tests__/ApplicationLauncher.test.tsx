import React from 'react';
import { mount } from 'enzyme';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';
import { ApplicationLauncher } from '../ApplicationLauncher';
import { ApplicationLauncherItem } from '../ApplicationLauncherItem';

import { DropdownPosition, DropdownDirection } from '../../Dropdown/dropdownConstants';
import { ApplicationLauncherSeparator } from '../ApplicationLauncherSeparator';

const dropdownItems = [
  <ApplicationLauncherItem key="link">Link</ApplicationLauncherItem>,
  <ApplicationLauncherItem key="action" component="button">
    Action
  </ApplicationLauncherItem>,
  <ApplicationLauncherItem key="disabled link" isDisabled>
    Disabled Link
  </ApplicationLauncherItem>,
  <ApplicationLauncherItem key="disabled action" isDisabled component="button">
    Disabled Action
  </ApplicationLauncherItem>,
  <ApplicationLauncherSeparator key="separator" />,
  <ApplicationLauncherItem key="separated link">Separated Link</ApplicationLauncherItem>,
  <ApplicationLauncherItem key="separated action" component="button">
    Separated Action
  </ApplicationLauncherItem>
];

describe('ApplicationLauncher', () => {
  test('regular', () => {
    const view = mount(<ApplicationLauncher items={dropdownItems} />);
    expect(view).toMatchSnapshot();
  });

  test('right aligned', () => {
    const view = mount(<ApplicationLauncher items={dropdownItems} position={DropdownPosition.right} />);
    expect(view).toMatchSnapshot();
  });

  test('dropup', () => {
    const view = mount(<ApplicationLauncher items={dropdownItems} direction={DropdownDirection.up} />);
    expect(view).toMatchSnapshot();
  });

  test('dropup + right aligned', () => {
    const view = mount(
      <ApplicationLauncher
        items={dropdownItems}
        direction={DropdownDirection.up}
        position={DropdownPosition.right}
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('expanded', () => {
    const view = mount(<ApplicationLauncher items={dropdownItems} isOpen />);
    expect(view).toMatchSnapshot();
  });

  test('custom icon', () => {
    const view = mount(
      <ApplicationLauncher items={dropdownItems} isOpen toggleIcon={<HelpIcon id="test-icon" />} />
    );
    expect(view).toMatchSnapshot();
  });
});

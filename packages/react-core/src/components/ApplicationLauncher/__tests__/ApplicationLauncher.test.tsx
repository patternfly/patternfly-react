import React from 'react';
import { render } from '@testing-library/react';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
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
    const view = render(<ApplicationLauncher items={dropdownItems} />);
    expect(view.container).toMatchSnapshot();
  });

  test('right aligned', () => {
    const view = render(<ApplicationLauncher items={dropdownItems} position={DropdownPosition.right} />);
    expect(view.container).toMatchSnapshot();
  });

  test('dropup', () => {
    const view = render(<ApplicationLauncher items={dropdownItems} direction={DropdownDirection.up} />);
    expect(view.container).toMatchSnapshot();
  });

  test('dropup + right aligned', () => {
    const view = render(
      <ApplicationLauncher
        items={dropdownItems}
        direction={DropdownDirection.up}
        position={DropdownPosition.right}
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('expanded', () => {
    const view = render(<ApplicationLauncher items={dropdownItems} isOpen />);
    expect(view.container).toMatchSnapshot();
  });

  test('custom icon', () => {
    const view = render(
      <ApplicationLauncher items={dropdownItems} isOpen toggleIcon={<HelpIcon id="test-icon" />} />
    );
    expect(view.container).toMatchSnapshot();
  });
});

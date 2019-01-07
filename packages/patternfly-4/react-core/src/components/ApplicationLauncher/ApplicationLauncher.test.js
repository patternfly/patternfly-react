import React from 'react';
import { shallow, mount } from 'enzyme';
import ApplicationLauncher from './ApplicationLauncher';
import DropdownItem from '../Dropdown/DropdownItem';

import { DropdownPosition, DropdownDirection } from '../Dropdown/dropdownConstants';
import DropdownSeparator from '../Dropdown/Separator';

const dropdownItems = [
  <DropdownItem key="link">Link</DropdownItem>,
  <DropdownItem key="action" component="button">
    Action
  </DropdownItem>,
  <DropdownItem key="disabled link" isDisabled>
    Disabled Link
  </DropdownItem>,
  <DropdownItem key="disabled action" isDisabled component="button">
    Disabled Action
  </DropdownItem>,
  <DropdownSeparator key="separator" />,
  <DropdownItem key="separated link">Separated Link</DropdownItem>,
  <DropdownItem key="separated action" component="button">
    Separated Action
  </DropdownItem>
];

describe('ApplicationLauncher', () => {
  test('regular', () => {
    const view = shallow(<ApplicationLauncher dropdownItems={dropdownItems} />);
    expect(view).toMatchSnapshot();
  });

  test('right aligned', () => {
    const view = shallow(<ApplicationLauncher dropdownItems={dropdownItems} position={DropdownPosition.right} />);
    expect(view).toMatchSnapshot();
  });

  test('dropup', () => {
    const view = shallow(<ApplicationLauncher dropdownItems={dropdownItems} direction={DropdownDirection.up} />);
    expect(view).toMatchSnapshot();
  });

  test('dropup + right aligned', () => {
    const view = shallow(
      <ApplicationLauncher
        dropdownItems={dropdownItems}
        direction={DropdownDirection.up}
        position={DropdownPosition.right}
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('expanded', () => {
    const view = shallow(<ApplicationLauncher dropdownItems={dropdownItems} isOpen />);
    expect(view).toMatchSnapshot();
  });
});

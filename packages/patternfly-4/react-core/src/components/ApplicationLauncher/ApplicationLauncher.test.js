import React from 'react';
import { mount } from 'enzyme';
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
    const view = mount(<ApplicationLauncher dropdownItems={dropdownItems} />);
    expect(view).toMatchSnapshot();
  });

  test('right aligned', () => {
    const view = mount(<ApplicationLauncher dropdownItems={dropdownItems} position={DropdownPosition.right} />);
    expect(view).toMatchSnapshot();
  });

  test('dropup', () => {
    const view = mount(<ApplicationLauncher dropdownItems={dropdownItems} direction={DropdownDirection.up} />);
    expect(view).toMatchSnapshot();
  });

  test('dropup + right aligned', () => {
    const view = mount(
      <ApplicationLauncher
        dropdownItems={dropdownItems}
        direction={DropdownDirection.up}
        position={DropdownPosition.right}
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('expanded', () => {
    const view = mount(<ApplicationLauncher dropdownItems={dropdownItems} isOpen />);
    expect(view).toMatchSnapshot();
  });

  test('plain set to false', () => {
    const view = mount(<ApplicationLauncher dropdownItems={dropdownItems} isPlain={false} />);
    expect(view).toMatchSnapshot();
  });
});

describe('API', () => {
  test('click on item', () => {
    const mockSelect = jest.fn();
    const view = mount(<ApplicationLauncher dropdownItems={dropdownItems} onSelect={mockSelect} isOpen />);

    view
      .find('li')
      .first()
      .simulate('click');
    expect(mockSelect.mock.calls).toHaveLength(1);
  });

  test('dropdownItems and children console error ', () => {
    const myMock = jest.fn();
    global.console = { error: myMock };
    mount(
      <ApplicationLauncher dropdownItems={dropdownItems} isOpen>
        Children items
      </ApplicationLauncher>
    );
    expect(myMock).toBeCalled();
  });

  test('dropdownItems only, no console error ', () => {
    const myMock = jest.fn();
    global.console = { error: myMock };
    mount(<ApplicationLauncher dropdownItems={dropdownItems} isOpen />);
    expect(myMock).not.toBeCalled();
  });

  test('children only, no console ', () => {
    const myMock = jest.fn();
    global.console = { error: myMock };
    mount(<ApplicationLauncher isOpen>Children items</ApplicationLauncher>);
    expect(myMock).not.toBeCalled();
  });
});

import React from 'react';
import { mount } from 'enzyme';
import Dropdown, { DropdownPosition, DropdownDirection } from './Dropdown';
import DropdownItem from './DropdownItem';
import DropdownSeparator from './Separator';
import DropdownToggle from './DropdownToggle';
import KebabToggle from './KebabToggle';

const DropItems = () => (
  <React.Fragment>
    <DropdownItem>Link</DropdownItem>
    <DropdownItem component="button">Action</DropdownItem>
    <DropdownItem isDisabled>Disabled Link</DropdownItem>
    <DropdownItem isDisabled component="button">
      Disabled Action
    </DropdownItem>
    <DropdownSeparator />
    <DropdownItem>Separated Link</DropdownItem>
    <DropdownItem component="button">Separated Action</DropdownItem>
  </React.Fragment>
);

describe('dropdown', () => {
  test('regular', () => {
    const view = mount(
      <Dropdown id="Dropdown" toggle={<DropdownToggle>Dropdown</DropdownToggle>}>
        <DropItems />
      </Dropdown>
    );
    expect(view).toMatchSnapshot();
  });

  test('right aligned', () => {
    const view = mount(
      <Dropdown id="Dropdown" position={DropdownPosition.right} toggle={<DropdownToggle>Dropdown</DropdownToggle>}>
        <DropItems />
      </Dropdown>
    );
    expect(view).toMatchSnapshot();
  });

  test('dropup', () => {
    const view = mount(
      <Dropdown id="Dropdown" direction={DropdownDirection.up} toggle={<DropdownToggle>Dropdown</DropdownToggle>}>
        <DropItems />
      </Dropdown>
    );
    expect(view).toMatchSnapshot();
  });

  test('dropup + right aligned', () => {
    const view = mount(
      <Dropdown
        id="Dropdown"
        direction={DropdownDirection.up}
        position={DropdownPosition.right}
        toggle={<DropdownToggle>Dropdown</DropdownToggle>}
      >
        <DropItems />
      </Dropdown>
    );
    expect(view).toMatchSnapshot();
  });

  test('expanded', () => {
    const view = mount(
      <Dropdown id="Dropdown" isOpen toggle={<DropdownToggle>Dropdown</DropdownToggle>}>
        <DropItems />
      </Dropdown>
    );
    expect(view).toMatchSnapshot();
  });
});

describe('KebabToggle', () => {
  test('regular', () => {
    const view = mount(
      <Dropdown id="Dropdown" toggle={<KebabToggle />}>
        <DropItems />
      </Dropdown>
    );
    expect(view).toMatchSnapshot();
  });

  test('right aligned', () => {
    const view = mount(
      <Dropdown id="Dropdown" position={DropdownPosition.right} toggle={<KebabToggle />}>
        <DropItems />
      </Dropdown>
    );
    expect(view).toMatchSnapshot();
  });

  test('dropup', () => {
    const view = mount(
      <Dropdown id="Dropdown" direction={DropdownDirection.up} toggle={<KebabToggle />}>
        <DropItems />
      </Dropdown>
    );
    expect(view).toMatchSnapshot();
  });

  test('dropup + right aligned', () => {
    const view = mount(
      <Dropdown
        id="Dropdown"
        direction={DropdownDirection.up}
        position={DropdownPosition.right}
        toggle={<KebabToggle />}
      >
        <DropItems />
      </Dropdown>
    );
    expect(view).toMatchSnapshot();
  });

  test('expanded', () => {
    const view = mount(
      <Dropdown id="Dropdown" isOpen toggle={<KebabToggle />}>
        <DropItems />
      </Dropdown>
    );
    expect(view).toMatchSnapshot();
  });

  test('plain', () => {
    const view = mount(
      <Dropdown id="Dropdown" isPlain toggle={<KebabToggle />}>
        <DropItems />
      </Dropdown>
    );
    expect(view).toMatchSnapshot();
  });
});

describe('API', () => {
  test('click on item', () => {
    const mockToggle = jest.fn();
    const mockSelect = jest.fn();
    const view = mount(
      <Dropdown id="Dropdown" onSelect={mockSelect} isOpen>
        <DropItems />
      </Dropdown>
    );

    view
      .find({ role: 'menuitem' })
      .first()
      .simulate('click');
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(mockSelect.mock.calls).toHaveLength(1);
  });
});

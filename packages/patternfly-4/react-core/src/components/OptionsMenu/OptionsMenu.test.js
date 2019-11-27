import React from 'react';
import { mount } from 'enzyme';
import { OptionsMenu, OptionsMenuDirection, OptionsMenuPosition } from './OptionsMenu';
import { OptionsMenuToggle } from './OptionsMenuToggle';
import { OptionsMenuGroup } from './OptionsMenuGroup';
import { OptionsMenuItem } from './OptionsMenuItem';
import { OptionsMenuSeparator } from './OptionsMenuSeparator';
import { OptionsMenuToggleWithText } from './OptionsMenuToggleWithText';

const menuItems = [
  <OptionsMenuGroup key="first group" groupTitle="Sort order">
    <OptionsMenuItem key="name">Name</OptionsMenuItem>
    <OptionsMenuItem key="date">Date</OptionsMenuItem>
    <OptionsMenuItem isDisabled key="disabled">
      Disabled
    </OptionsMenuItem>
    <OptionsMenuItem key="size">Size</OptionsMenuItem>
  </OptionsMenuGroup>,
  <OptionsMenuSeparator key="separator" />,
  <OptionsMenuGroup key="second group" groupTitle="Sort direction" hasSeparator>
    <OptionsMenuItem key="ascending">Ascending</OptionsMenuItem>
    <OptionsMenuItem key="descending">Descending</OptionsMenuItem>
  </OptionsMenuGroup>
];

describe('optionsMenu', () => {
  test('regular', () => {
    const view = mount(
      <OptionsMenu id="regular" menuItems={menuItems} toggle={<OptionsMenuToggle>Options Menu</OptionsMenuToggle>} />
    );
    expect(view).toMatchSnapshot();
  });

  test('right aligned', () => {
    const view = mount(
      <OptionsMenu
        id="rightAligned"
        menuItems={menuItems}
        position={OptionsMenuPosition.right}
        toggle={<OptionsMenuToggle>Options Menu</OptionsMenuToggle>}
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('open up', () => {
    const view = mount(
      <OptionsMenu
        id="openUp"
        menuItems={menuItems}
        direction={OptionsMenuDirection.up}
        toggle={<OptionsMenuToggle>Options Menu</OptionsMenuToggle>}
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('right aligned + open up', () => {
    const view = mount(
      <OptionsMenu
        id="rightAlignedOpenUp"
        menuItems={menuItems}
        position={OptionsMenuPosition.right}
        direction={OptionsMenuDirection.up}
        toggle={<OptionsMenuToggle>Options Menu</OptionsMenuToggle>}
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('expanded', () => {
    const view = mount(
      <OptionsMenu
        id="expanded"
        menuItems={menuItems}
        isOpen
        toggle={<OptionsMenuToggle>Options Menu</OptionsMenuToggle>}
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('plain', () => {
    const view = mount(
      <OptionsMenu
        id="plain"
        menuItems={menuItems}
        isPlain
        toggle={<OptionsMenuToggle>Options Menu</OptionsMenuToggle>}
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('text', () => {
    const view = mount(
      <OptionsMenu
        id="text"
        menuItems={menuItems}
        toggle={
          <OptionsMenuToggleWithText toggleButtonContents={<React.Fragment>Test</React.Fragment>} toggleText="Test" />
        }
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('isDisabled', () => {
    const view = mount(
      <OptionsMenu
        id="disabled"
        menuItems={menuItems}
        toggle={<OptionsMenuToggle isDisabled>Options Menu</OptionsMenuToggle>}
      />
    );
    expect(view).toMatchSnapshot();
  });
});

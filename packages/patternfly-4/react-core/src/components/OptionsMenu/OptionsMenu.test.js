import React from 'react';
import { mount } from 'enzyme';
import OptionsMenu from './OptionsMenu';
import OptionsMenuToggle from './OptionsMenuToggle';
import OptionsMenuItemGroup from './OptionsMenuItemGroup';
import OptionsMenuItem from './OptionsMenuItem';
import OptionsMenuSeparator from './OptionsMenuSeparator';
import { OptionsMenuDirection, OptionsMenuPosition } from './optionsMenuConstants';
import OptionsMenuToggleWithText from './OptionsMenuToggleWithText';

const menuItems = [
  <OptionsMenuItemGroup key="first group">
    <OptionsMenuItem key="name">Name</OptionsMenuItem>
    <OptionsMenuItem key="date">Date</OptionsMenuItem>
    <OptionsMenuItem isDisabled key="disabled">
      Disabled
    </OptionsMenuItem>
    <OptionsMenuItem key="size">Size</OptionsMenuItem>
  </OptionsMenuItemGroup>,
  <OptionsMenuSeparator key="separator" />,
  <OptionsMenuItemGroup key="second group">
    <OptionsMenuItem key="ascending">Ascending</OptionsMenuItem>
    <OptionsMenuItem key="descending">Descending</OptionsMenuItem>
  </OptionsMenuItemGroup>
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
});

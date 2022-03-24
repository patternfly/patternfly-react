import React from 'react';
import { render } from '@testing-library/react';
import { OptionsMenu, OptionsMenuDirection, OptionsMenuPosition } from '../OptionsMenu';
import { OptionsMenuToggle } from '../OptionsMenuToggle';
import { OptionsMenuItemGroup } from '../OptionsMenuItemGroup';
import { OptionsMenuItem } from '../OptionsMenuItem';
import { OptionsMenuSeparator } from '../OptionsMenuSeparator';
import { OptionsMenuToggleWithText } from '../OptionsMenuToggleWithText';

const menuItems = [
  <OptionsMenuItemGroup key="first group" groupTitle="Sort order">
    <OptionsMenuItem key="name">Name</OptionsMenuItem>
    <OptionsMenuItem key="date">Date</OptionsMenuItem>
    <OptionsMenuItem isDisabled key="disabled">
      Disabled
    </OptionsMenuItem>
    <OptionsMenuItem key="size">Size</OptionsMenuItem>
  </OptionsMenuItemGroup>,
  <OptionsMenuSeparator key="separator" />,
  <OptionsMenuItemGroup key="second group" groupTitle="Sort direction" hasSeparator>
    <OptionsMenuItem key="ascending">Ascending</OptionsMenuItem>
    <OptionsMenuItem key="descending">Descending</OptionsMenuItem>
  </OptionsMenuItemGroup>
];

describe('optionsMenu', () => {
  test('regular', () => {
    const view = render(
      <OptionsMenu id="regular" menuItems={menuItems} toggle={<OptionsMenuToggle>Options Menu</OptionsMenuToggle>} />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('right aligned', () => {
    const view = render(
      <OptionsMenu
        id="rightAligned"
        menuItems={menuItems}
        position={OptionsMenuPosition.right}
        toggle={<OptionsMenuToggle>Options Menu</OptionsMenuToggle>}
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('open up', () => {
    const view = render(
      <OptionsMenu
        id="openUp"
        menuItems={menuItems}
        direction={OptionsMenuDirection.up}
        toggle={<OptionsMenuToggle>Options Menu</OptionsMenuToggle>}
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('right aligned + open up', () => {
    const view = render(
      <OptionsMenu
        id="rightAlignedOpenUp"
        menuItems={menuItems}
        position={OptionsMenuPosition.right}
        direction={OptionsMenuDirection.up}
        toggle={<OptionsMenuToggle>Options Menu</OptionsMenuToggle>}
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('expanded', () => {
    const view = render(
      <OptionsMenu
        id="expanded"
        menuItems={menuItems}
        isOpen
        toggle={<OptionsMenuToggle>Options Menu</OptionsMenuToggle>}
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('plain', () => {
    const view = render(
      <OptionsMenu
        id="plain"
        menuItems={menuItems}
        isPlain
        toggle={<OptionsMenuToggle>Options Menu</OptionsMenuToggle>}
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('text', () => {
    const view = render(
      <OptionsMenu
        id="text"
        menuItems={menuItems}
        toggle={
          <OptionsMenuToggleWithText toggleButtonContents={<React.Fragment>Test</React.Fragment>} toggleText="Test" />
        }
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('isDisabled', () => {
    const view = render(
      <OptionsMenu
        id="disabled"
        menuItems={menuItems}
        toggle={<OptionsMenuToggle isDisabled>Options Menu</OptionsMenuToggle>}
      />
    );
    expect(view.container).toMatchSnapshot();
  });
});

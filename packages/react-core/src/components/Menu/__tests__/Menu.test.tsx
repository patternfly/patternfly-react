import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Menu } from '../Menu';
import { MenuItem, MenuItemProps } from '../MenuItem';
import { MenuList } from '../MenuList';
import { MenuContent } from '../MenuContent';

describe('Menu', () => {
  test('should render Menu successfully', () => {
    const { asFragment } = render(
      <Menu activeItemId={0} onSelect={jest.fn()}>
        content
      </Menu>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should accept onSelect with various types', () => {
    const onSelectMock = jest.fn();

    const items: MenuItemProps[] = [
      { itemId: 1, children: 'Item 1', key: 'item1' },
      { itemId: new Date(1), children: 'Item 2', key: 'item2' },
      { itemId: 'item3', children: 'Item 3', key: 'item3' },
      { itemId: { some: 'object' }, children: 'Item 4', key: 'item4' },
      { itemId: NaN, children: 'Item 5', key: 'item5' },
      { itemId: null, children: 'Item 6', key: 'item6' },
      { itemId: 0n, children: 'Item 7', key: 'item7' },
      { itemId: true, children: 'Item 8', key: 'item8' },
      { itemId: false, children: 'Item 9', key: 'item9' },
      { itemId: -0, children: 'Item 10', key: 'item10' },
      { itemId: '', children: 'Item 11', key: 'item11' }
    ];

    render(
      <Menu activeItemId={0} onSelect={onSelectMock}>
        <MenuContent>
          <MenuList>
            {items.map((item) => (
              <MenuItem key={item.key} itemId={item.itemId}>
                {item.children}
              </MenuItem>
            ))}
          </MenuList>
        </MenuContent>
      </Menu>
    );

    for (const item of items) {
      const menuItem = screen.getByText(item.children as string);
      menuItem.click();
      expect(onSelectMock).toHaveBeenCalledWith(expect.anything(), item.itemId);
    }
  });

  describe('with isPlain', () => {
    test('should render Menu with plain styles applied', () => {
      render(
        <Menu activeItemId={0} onSelect={jest.fn()} isPlain>
          content
        </Menu>
      );
      expect(screen.getByText('content')).toHaveClass('pf-m-plain');
    });
  });

  describe('with isScrollable', () => {
    test('should render Menu with scrollable styles applied', () => {
      render(
        <Menu activeItemId={0} onSelect={jest.fn()} isScrollable>
          content
        </Menu>
      );
      expect(screen.getByText('content')).toHaveClass('pf-m-scrollable');
    });
  });

  describe('with hasCheckbox', () => {
    test('should render Menu with checkbox items', () => {
      render(
        <Menu>
          <MenuContent>
            <MenuList>
              <MenuItem hasCheckbox itemId={0}>
                Checkbox 1
              </MenuItem>
            </MenuList>
          </MenuContent>
        </Menu>
      );
      const checkbox1 = screen.getAllByRole('checkbox')[0];
      expect(checkbox1).not.toBeChecked();
      expect(screen.getByText('Checkbox 1')).toBeInTheDocument();
    });
  });
});

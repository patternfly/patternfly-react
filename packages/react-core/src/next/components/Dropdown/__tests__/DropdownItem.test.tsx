import { DropdownItem } from '../../Dropdown';
import { MenuItemProps } from '../../../../components/Menu';
import { render, screen } from '@testing-library/react';
import React from 'react';

jest.mock('../../../../components/Menu', () => ({
  MenuItem: ({ className, children, description }: MenuItemProps) => {
    return (
      <>
        <div className={className} data-testid="menu-item-mock">
          {children}
        </div>
        <p>{`description: ${description}`}</p>
      </>
    );
  }
}));

const dropdownItemChildren = <div>Dropdown Item children</div>;

test('renders dropdown item', () => {
  render(
    <div data-testid="dropdown-item">
      <DropdownItem>{dropdownItemChildren}</DropdownItem>
    </div>
  );

  expect(screen.getByTestId('dropdown-item').children[0]).toBeVisible();
});

test('passes children', () => {
  render(<DropdownItem>{dropdownItemChildren}</DropdownItem>);

  expect(screen.getByText('Dropdown Item children')).toBeVisible();
});

test('passes no class name by default', () => {
  render(<DropdownItem>{dropdownItemChildren}</DropdownItem>);

  expect(screen.getByTestId('menu-item-mock')).not.toHaveClass();
});

test('passes custom class name to MenuItem', () => {
  render(<DropdownItem className="custom-class">{dropdownItemChildren}</DropdownItem>);

  expect(screen.getByTestId('menu-item-mock')).toHaveClass('custom-class');
});

test('passes no description by default', () => {
  render(<DropdownItem>{dropdownItemChildren}</DropdownItem>);

  expect(screen.getByText('description: undefined')).toBeVisible();
});

test('passes custom description to MenuItem', () => {
  render(<DropdownItem description="Test description">{dropdownItemChildren}</DropdownItem>);

  expect(screen.getByText('description: Test description')).toBeVisible();
});

test('matches snapshot', () => {
  const { asFragment } = render(
    <DropdownItem className="custom-class" description="Test description">
      {dropdownItemChildren}
    </DropdownItem>
  );

  expect(asFragment()).toMatchSnapshot();
});

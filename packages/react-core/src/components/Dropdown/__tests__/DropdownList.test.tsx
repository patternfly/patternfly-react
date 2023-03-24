import { DropdownList } from '../../Dropdown';
import { render, screen } from '@testing-library/react';
import React from 'react';

jest.mock('../../Menu');

const dropdownListChildren = <div>Dropdown List children</div>;

test('renders dropdown list', () => {
  render(
    <div data-testid="dropdown-list">
      <DropdownList>{dropdownListChildren}</DropdownList>
    </div>
  );

  expect(screen.getByTestId('dropdown-list').children[0]).toBeVisible();
});

test('passes children', () => {
  render(<DropdownList>{dropdownListChildren}</DropdownList>);

  expect(screen.getByText('Dropdown List children')).toBeVisible();
});

test('passes no class name by default', () => {
  render(<DropdownList>{dropdownListChildren}</DropdownList>);

  expect(screen.getByTestId('menu-list-mock')).not.toHaveClass();
});

test('passes custom class name to MenuList', () => {
  render(<DropdownList className="custom-class">{dropdownListChildren}</DropdownList>);

  expect(screen.getByTestId('menu-list-mock')).toHaveClass('custom-class');
});

test('matches snapshot', () => {
  const { asFragment } = render(<DropdownList className="custom-class">{dropdownListChildren}</DropdownList>);

  expect(asFragment()).toMatchSnapshot();
});

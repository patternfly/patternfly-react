import { DropdownGroup } from '../../Dropdown';
import { render, screen } from '@testing-library/react';
import React from 'react';

jest.mock('../../Menu');

const dropdownGroupChildren = <div>Dropdown Group children</div>;

test('renders dropdown group', () => {
  render(
    <div data-testid="dropdown-group">
      <DropdownGroup>{dropdownGroupChildren}</DropdownGroup>
    </div>
  );

  expect(screen.getByTestId('dropdown-group').children[0]).toBeVisible();
});

test('passes children', () => {
  render(<DropdownGroup>{dropdownGroupChildren}</DropdownGroup>);

  expect(screen.getByText('Dropdown Group children')).toBeVisible();
});

test('passes no class name by default', () => {
  render(<DropdownGroup>{dropdownGroupChildren}</DropdownGroup>);

  expect(screen.getByTestId('menu-group-mock')).not.toHaveClass();
});

test('passes custom class name to MenuGroup', () => {
  render(<DropdownGroup className="custom-class">{dropdownGroupChildren}</DropdownGroup>);

  expect(screen.getByTestId('menu-group-mock')).toHaveClass('custom-class');
});

test('passes no label by default', () => {
  render(<DropdownGroup>{dropdownGroupChildren}</DropdownGroup>);

  expect(screen.getByText('label: undefined')).toBeVisible();
});

test('passes custom label to MenuGroup', () => {
  render(<DropdownGroup label="Test label">{dropdownGroupChildren}</DropdownGroup>);

  expect(screen.getByText('label: Test label')).toBeVisible();
});

test('passes h1 as labelHeadingLevel to MenuGroup by default', () => {
  render(<DropdownGroup>{dropdownGroupChildren}</DropdownGroup>);

  expect(screen.getByText('labelHeadingLevel: h1')).toBeVisible();
});

test('passes custom labelHeadingLevel to MenuGroup', () => {
  render(<DropdownGroup labelHeadingLevel="h2">{dropdownGroupChildren}</DropdownGroup>);

  expect(screen.getByText('labelHeadingLevel: h2')).toBeVisible();
});

test('matches snapshot', () => {
  const { asFragment } = render(
    <DropdownGroup className="custom-class" label="Test label" labelHeadingLevel="h2">
      {dropdownGroupChildren}
    </DropdownGroup>
  );

  expect(asFragment()).toMatchSnapshot();
});

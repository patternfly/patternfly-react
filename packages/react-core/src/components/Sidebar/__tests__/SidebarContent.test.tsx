import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { SidebarContent } from '../SidebarContent';

test('Renders children', () => {
  render(<SidebarContent>Test</SidebarContent>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with only class name pf-c-sidebar__content by default', () => {
  render(<SidebarContent>Test</SidebarContent>);
  expect(screen.getByText('Test')).toHaveClass('pf-c-sidebar__content', { exact: true });
});

test('Renders with class name pf-c-sidebar__content', () => {
  render(<SidebarContent>Test</SidebarContent>);
  expect(screen.getByText('Test')).toHaveClass('pf-c-sidebar__content');
});

test('Renders with custom class name when className prop is provided', () => {
  render(<SidebarContent className="custom-class">Test</SidebarContent>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders with class name pf-m-no-background when hasNoBackground prop is passed', () => {
  render(<SidebarContent hasNoBackground>Test</SidebarContent>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-no-background');
});

test('Renders with inherited element props spread to the component', () => {
  render(<SidebarContent aria-label="Test label">Test</SidebarContent>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<SidebarContent>Test</SidebarContent>);
  expect(asFragment()).toMatchSnapshot();
});

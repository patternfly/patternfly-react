import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { SidebarContent } from '../SidebarContent';
import styles from '@patternfly/react-styles/css/components/Sidebar/sidebar';

test('Renders children', () => {
  render(<SidebarContent>Test</SidebarContent>);
  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with only class name ${styles.sidebarContent} by default`, () => {
  render(<SidebarContent>Test</SidebarContent>);
  expect(screen.getByText('Test')).toHaveClass(styles.sidebarContent, { exact: true });
});

test(`Renders with class name ${styles.sidebarContent}`, () => {
  render(<SidebarContent>Test</SidebarContent>);
  expect(screen.getByText('Test')).toHaveClass(styles.sidebarContent);
});

test(`Renders with class name ${styles.modifiers.secondary} when backgroundVariant="secondary" is passed`, () => {
  render(<SidebarContent backgroundVariant="secondary">Test</SidebarContent>);
  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.secondary);
});

test('Renders with custom class name when className prop is provided', () => {
  render(<SidebarContent className="custom-class">Test</SidebarContent>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test('Renders with class name pf-m-no-background when hasNoBackground prop is passed', () => {
  render(<SidebarContent hasNoBackground>Test</SidebarContent>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-no-background');
});

test('Renders with class name pf-m-padding when hasPadding prop is passed', () => {
  render(<SidebarContent hasPadding>Test</SidebarContent>);
  expect(screen.getByText('Test')).toHaveClass('pf-m-padding');
});

test('Renders with inherited element props spread to the component', () => {
  render(<SidebarContent aria-label="Test label">Test</SidebarContent>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<SidebarContent>Test</SidebarContent>);
  expect(asFragment()).toMatchSnapshot();
});

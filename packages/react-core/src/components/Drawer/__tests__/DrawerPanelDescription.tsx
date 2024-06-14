import React from 'react';
import { render, screen } from '@testing-library/react';
import { DrawerPanelDescription } from '../DrawerPanelDescription';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import '@testing-library/jest-dom';

test(`Renders with only class ${styles.drawerDescription} by default`, () => {
  render(<DrawerPanelDescription>description content</DrawerPanelDescription>);

  expect(screen.getByText('description content')).toHaveClass(styles.drawerDescription, { exact: true });
});

test(`Renders with custom class when className is passed`, () => {
  render(<DrawerPanelDescription className="test-class">description content</DrawerPanelDescription>);

  expect(screen.getByText('description content')).toHaveClass('test-class');
});

test(`Spreads props`, () => {
  render(<DrawerPanelDescription id="test-id">description content</DrawerPanelDescription>);

  expect(screen.getByText('description content')).toHaveAttribute('id', 'test-id');
});

test(`Matches snapshot`, () => {
  const { asFragment } = render(<DrawerPanelDescription>description content</DrawerPanelDescription>);

  expect(asFragment()).toMatchSnapshot();
});

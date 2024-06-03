import React from 'react';
import { render, screen } from '@testing-library/react';
import { DrawerPanelContent } from '../DrawerPanelContent';
import { Drawer } from '../Drawer';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';

test(`Renders with only class ${styles.drawerPanel} by default`, () => {
  render(
    <Drawer isExpanded>
      <DrawerPanelContent>Drawer panel content</DrawerPanelContent>
    </Drawer>
  );

  expect(screen.getByText('Drawer panel content')).toHaveClass(styles.drawerPanel, { exact: true });
});

test(`Renders with class ${styles.modifiers.noBackground} when colorVariant="no-background"`, () => {
  render(
    <Drawer isExpanded>
      <DrawerPanelContent colorVariant="no-background">Drawer panel content</DrawerPanelContent>
    </Drawer>
  );

  expect(screen.getByText('Drawer panel content')).toHaveClass(styles.modifiers.noBackground);
});

test(`Renders with class ${styles.modifiers.secondary} when colorVariant="secondary"`, () => {
  render(
    <Drawer isExpanded>
      <DrawerPanelContent colorVariant="secondary">Drawer panel content</DrawerPanelContent>
    </Drawer>
  );

  expect(screen.getByText('Drawer panel content')).toHaveClass(styles.modifiers.secondary);
});

jest.mock('../../../helpers/GenerateId/GenerateId');

jest.mock('../../../helpers/GenerateId/GenerateId');

test('Does not render with aria-labelledby by default', () => {
  render(
    <Drawer isExpanded>
      <DrawerPanelContent>Drawer panel content</DrawerPanelContent>
    </Drawer>
  );

  expect(screen.getByText('Drawer panel content')).not.toHaveAccessibleName();
});

test('Renders with aria-labelledby when focusTrap.enabled is true', () => {
  render(
    <Drawer isExpanded>
      <DrawerPanelContent focusTrap={{ enabled: true }}>Drawer panel content</DrawerPanelContent>
    </Drawer>
  );

  expect(screen.getByText('Drawer panel content')).toHaveAccessibleName('Drawer panel content');
});

test('Renders with aria-labelledby when id is passed in', () => {
  render(
    <Drawer isExpanded>
      <DrawerPanelContent id="drawer-panel-content" focusTrap={{ enabled: true }}>
        Drawer panel content
      </DrawerPanelContent>
    </Drawer>
  );

  expect(screen.getByText('Drawer panel content')).toHaveAccessibleName('Drawer panel content');
});

test('Renders with custom aria-labelledby', () => {
  render(
    <Drawer isExpanded>
      <DrawerPanelContent focusTrap={{ enabled: true, 'aria-labelledby': 'drawer-panel-title' }}>
        <span id="drawer-panel-title">Title</span>
        <span>Drawer panel content</span>
      </DrawerPanelContent>
    </Drawer>
  );

  expect(screen.getByText('Drawer panel content').parentElement).toHaveAccessibleName('Title');
});

test('Does not render with aria-modal="true" by default', () => {
  render(
    <Drawer isExpanded>
      <DrawerPanelContent>Drawer panel content</DrawerPanelContent>
    </Drawer>
  );

  expect(screen.getByText('Drawer panel content')).not.toHaveAttribute('aria-modal');
});

test('Renders with aria-modal="true" when focusTrap.enabled is true', () => {
  render(
    <Drawer isExpanded>
      <DrawerPanelContent focusTrap={{ enabled: true }}>Drawer panel content</DrawerPanelContent>
    </Drawer>
  );

  expect(screen.getByText('Drawer panel content')).toHaveAttribute('aria-modal', 'true');
});

test('Does not render with role="dialog" by default', () => {
  render(
    <Drawer isExpanded>
      <DrawerPanelContent>Drawer panel content</DrawerPanelContent>
    </Drawer>
  );

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('Renders with role="dialog" when focusTrap.enabled is true', () => {
  render(
    <Drawer isExpanded>
      <DrawerPanelContent focusTrap={{ enabled: true }}>Drawer panel content</DrawerPanelContent>
    </Drawer>
  );

  expect(screen.getByRole('dialog')).toBeInTheDocument();
});

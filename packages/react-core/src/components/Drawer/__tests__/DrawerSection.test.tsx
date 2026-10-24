import { render, screen } from '@testing-library/react';
import { DrawerColorVariant } from '../Drawer';
import { DrawerSection } from '../DrawerSection';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';

test(`Renders with only class ${styles.drawerSection} by default`, () => {
  render(<DrawerSection>Section content</DrawerSection>);

  expect(screen.getByText('Section content')).toHaveClass(styles.drawerSection, { exact: true });
});

test(`Applies ${styles.drawerSection} and ${styles.modifiers.plain} when isPlain is true`, () => {
  render(<DrawerSection isPlain>Section content</DrawerSection>);

  const section = screen.getByText('Section content');
  expect(section).toHaveClass(styles.drawerSection);
  expect(section).toHaveClass(styles.modifiers.plain);
});

test(`Does not apply ${styles.modifiers.plain} when isPlain is false`, () => {
  render(<DrawerSection isPlain={false}>Section content</DrawerSection>);

  expect(screen.getByText('Section content')).not.toHaveClass(styles.modifiers.plain);
});

test(`Applies plain and secondary modifiers together when isPlain and colorVariant are set`, () => {
  render(
    <DrawerSection isPlain colorVariant={DrawerColorVariant.secondary}>
      Section content
    </DrawerSection>
  );

  const section = screen.getByText('Section content');
  expect(section).toHaveClass(styles.drawerSection);
  expect(section).toHaveClass(styles.modifiers.plain);
  expect(section).toHaveClass(styles.modifiers.secondary);
});

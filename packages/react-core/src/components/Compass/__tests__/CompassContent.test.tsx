import { render, screen } from '@testing-library/react';
import { CompassContent } from '../CompassContent';
import styles from '@patternfly/react-styles/css/components/Compass/compass';

test('Renders with children', () => {
  render(<CompassContent>Test content</CompassContent>);
  expect(screen.getByText('Test content')).toBeVisible();
});

test('Renders with custom class name when className prop is provided', () => {
  render(<CompassContent className="custom-class">Test</CompassContent>);
  expect(screen.getByText('Test')).toHaveClass('custom-class');
});

test(`Renders with default ${styles.compassContent} class`, () => {
  render(<CompassContent>Test</CompassContent>);
  expect(screen.getByText('Test')).toHaveClass(styles.compassContent);
});

test('Renders with drawer when drawerContent is provided', () => {
  render(<CompassContent drawerContent={<div>Drawer content</div>}>Test</CompassContent>);
  expect(screen.getByText('Drawer content')).toBeVisible();
});

test('Renders with additional props spread to the component', () => {
  render(<CompassContent aria-label="Test label">Test</CompassContent>);
  expect(screen.getByText('Test')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot without drawer', () => {
  const { asFragment } = render(
    <CompassContent>
      <div>Test content</div>
    </CompassContent>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Matches the snapshot with drawer', () => {
  const { asFragment } = render(
    <CompassContent drawerContent={<div>Drawer content</div>} drawerProps={{ isExpanded: true }}>
      <div>Test content</div>
    </CompassContent>
  );
  expect(asFragment()).toMatchSnapshot();
});

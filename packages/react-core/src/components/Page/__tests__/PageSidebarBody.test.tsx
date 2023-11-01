import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { PageSidebarBody } from '../PageSidebarBody';
import styles from '@patternfly/react-styles/css/components/Page/page';

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <PageSidebarBody />
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test('Renders with children', () => {
  render(<PageSidebarBody>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).toBeVisible();
});

test(`Renders with class ${styles.pageSidebarBody} by default`, () => {
  render(<PageSidebarBody>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).toHaveClass(styles.pageSidebarBody);
});

test('Renders with custom class', () => {
  render(<PageSidebarBody className="tester">Test</PageSidebarBody>);

  expect(screen.getByText('Test')).toHaveClass('tester');
});

test(`Renders without ${styles.modifiers.pageInsets} by default`, () => {
  render(<PageSidebarBody>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).not.toHaveClass(styles.modifiers.pageInsets);
});

test(`Renders with ${styles.modifiers.pageInsets} when usePageInsets is passed`, () => {
  render(<PageSidebarBody usePageInsets>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.pageInsets);
});

test(`Renders without ${styles.modifiers.fill} by default`, () => {
  render(<PageSidebarBody>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).not.toHaveClass(styles.modifiers.fill);
});

test(`Renders with ${styles.modifiers.fill} when isFilled={true} is passed`, () => {
  render(<PageSidebarBody isFilled={true}>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.fill);
});

test(`Renders without ${styles.modifiers.noFill} by default`, () => {
  render(<PageSidebarBody>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).not.toHaveClass(styles.modifiers.noFill);
});

test(`Renders with ${styles.modifiers.noFill} when isFilled={false} is passed`, () => {
  render(<PageSidebarBody isFilled={false}>Test</PageSidebarBody>);

  expect(screen.getByText('Test')).toHaveClass(styles.modifiers.noFill);
});

test('Renders with additional props', () => {
  render(<PageSidebarBody id="tester">Test</PageSidebarBody>);

  expect(screen.getByText('Test')).toHaveAttribute('id', 'tester');
});

test('Matches snapshot', () => {
  const { asFragment } = render(<PageSidebarBody>Test</PageSidebarBody>);

  expect(asFragment()).toMatchSnapshot();
});

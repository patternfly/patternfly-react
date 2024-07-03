import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { PageBody } from '../PageBody';
import styles from '@patternfly/react-styles/css/components/Page/page';

test('Renders without children', () => {
  render(<PageBody data-testid="page-main-body" />);

  expect(screen.getByTestId('page-main-body')).toBeVisible();
});
test('Renders children', () => {
  render(<PageBody>Test</PageBody>);

  expect(screen.getByText('Test')).toBeVisible();
});
test(`Renders with class ${styles.pageMainBody} by default`, () => {
  render(<PageBody>Test</PageBody>);

  expect(screen.getByText('Test')).toHaveClass(styles.pageMainBody);
});
test(`Renders with custom classes when className is passed`, () => {
  render(<PageBody className="custom-class">Test</PageBody>);

  expect(screen.getByText('Test')).toHaveClass('custom-class');
});
test(`Renders with spread props`, () => {
  render(<PageBody id="custom-id">Test</PageBody>);

  expect(screen.getByText('Test')).toHaveAttribute('id', 'custom-id');
});
test('Matches snapshot', () => {
  const { asFragment } = render(<PageBody>Test</PageBody>);
  expect(asFragment()).toMatchSnapshot();
});

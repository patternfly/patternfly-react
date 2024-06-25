import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { PageMainBody } from '../PageMainBody';
import styles from '@patternfly/react-styles/css/components/Page/page';

test('Renders without children', () => {
  render(<PageMainBody data-testid="page-main-body" />);

  expect(screen.getByTestId('page-main-body')).toBeVisible();
});
test('Renders children', () => {
  render(<PageMainBody>Test</PageMainBody>);

  expect(screen.getByText('Test')).toBeVisible();
});
test(`Renders with class ${styles.pageMainBody} by default`, () => {
  render(<PageMainBody>Test</PageMainBody>);

  expect(screen.getByText('Test')).toHaveClass(styles.pageMainBody);
});
test(`Renders with custom classes when className is passed`, () => {
  render(<PageMainBody className="custom-class">Test</PageMainBody>);

  expect(screen.getByText('Test')).toHaveClass('custom-class');
});
test(`Renders with spread props`, () => {
  render(<PageMainBody id="custom-id">Test</PageMainBody>);

  expect(screen.getByText('Test')).toHaveAttribute('id', 'custom-id');
});
test('Matches snapshot', () => {
  const { asFragment } = render(<PageMainBody>Test</PageMainBody>);
  expect(asFragment()).toMatchSnapshot();
})

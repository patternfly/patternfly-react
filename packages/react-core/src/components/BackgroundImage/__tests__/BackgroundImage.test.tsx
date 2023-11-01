import React from 'react';
import { render, screen } from '@testing-library/react';
import { BackgroundImage } from '../BackgroundImage';
import styles from '@patternfly/react-styles/css/components/BackgroundImage/background-image';

test(`renders with default className ${styles.backgroundImage}`, () => {
  render(<BackgroundImage src="/image/url.png" data-testid="test-id" />);
  expect(screen.getByTestId('test-id')).toHaveClass(styles.backgroundImage, { exact: true });
});

test('spreads additional props', () => {
  render(<BackgroundImage src="/image/url.png" data-testid="test-id" lang="en-US" />);
  expect(screen.getByTestId('test-id')).toHaveProperty('lang');
});

test('has src URL applied to style', () => {
  render(<BackgroundImage src="/image/url.png" data-testid="test-id" />);

  expect(screen.getByTestId('test-id')).toHaveAttribute(
    'style',
    '--pf-v5-c-background-image--BackgroundImage: url(/image/url.png);'
  );
});

test('renders with custom className when one is provided', () => {
  render(<BackgroundImage src="/image/url.png" className="another-class" data-testid="test-id" />);

  expect(screen.getByTestId('test-id')).toHaveClass('another-class');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<BackgroundImage src="/image/url.png" data-testid="test-id" />);
  expect(asFragment()).toMatchSnapshot();
});

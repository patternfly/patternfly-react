import React from 'react';
import { render, screen } from '@testing-library/react';
import { BackgroundImage } from '../BackgroundImage';

test('renders with default className pf-v5-c-background-image', () => {
  render(<BackgroundImage src="/image/url.png" data-testid="test-id" />);
  expect(screen.getByTestId('test-id')).toHaveClass('pf-v5-c-background-image', { exact: true });
});

test('has src URL applied to style', () => {
  render(<BackgroundImage src="/image/url.png" data-testid="test-id" />);

  const backgroundImageStyle = screen.getByTestId('test-id').getAttribute('style');

  expect(backgroundImageStyle).toContain('--pf-v5-c-background-image--BackgroundImage');
  expect(backgroundImageStyle).toContain('/image/url.png');
});

test('renders with custom className when one is provided', () => {
  render(<BackgroundImage src="/image/url.png" className="another-class" data-testid="test-id" />);

  expect(screen.getByTestId('test-id')).toHaveClass('another-class');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<BackgroundImage src="/image/url.png" data-testid="test-id" />);
  expect(asFragment()).toMatchSnapshot();
});

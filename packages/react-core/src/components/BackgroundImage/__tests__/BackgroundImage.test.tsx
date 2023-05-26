import React from 'react';
import { render, screen } from '@testing-library/react';
import { BackgroundImage } from '../BackgroundImage';

test('has default className and src URL applied to style', () => {
  render(<BackgroundImage src="/image/url.png" data-testid="test-id" />);

  const backgroundImage = screen.getByTestId('test-id');
  const backgroundImageStyle = backgroundImage.getAttribute('style');

  expect(backgroundImage).toHaveClass('pf-v5-c-background-image');
  expect(backgroundImageStyle).toContain('--pf-v5-c-background-image--BackgroundImage');
  expect(backgroundImageStyle).toContain('/image/url.png');
});

test('has additional className when one is provided', () => {
  render(<BackgroundImage src="/image/url.png" className="another-class" data-testid="test-id" />);

  expect(screen.getByTestId('test-id')).toHaveClass('another-class');
});

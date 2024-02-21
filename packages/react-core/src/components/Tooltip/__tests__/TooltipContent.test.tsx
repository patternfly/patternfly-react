import React from 'react';
import { render, screen } from '@testing-library/react';
import { TooltipContent } from '../TooltipContent';
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';

test('Renders with children', () => {
  render(<TooltipContent>Test content</TooltipContent>);

  expect(screen.getByText('Test content')).toBeVisible();
});

test('Renders with class name pf-v6-c-tooltip__content by default', () => {
  render(<TooltipContent>Test content</TooltipContent>);

  expect(screen.getByText('Test content')).toHaveClass(styles.tooltipContent);
});

test('Renders with custom class names provided via prop', () => {
  render(<TooltipContent className="test-class">Test content</TooltipContent>);

  expect(screen.getByText('Test content')).toHaveClass('test-class');
});

test('Does not render with class pf-m-text-align-left when isLeftAligned is not passed', () => {
  render(<TooltipContent>Test content</TooltipContent>);

  expect(screen.getByText('Test content')).not.toHaveClass('pf-m-text-align-left');
});

test('Renders with class pf-m-text-align-left when isLeftAligned is passed', () => {
  render(<TooltipContent isLeftAligned>Test content</TooltipContent>);

  expect(screen.getByText('Test content')).toHaveClass('pf-m-text-align-left');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<TooltipContent>Test content</TooltipContent>);
  expect(asFragment()).toMatchSnapshot();
});

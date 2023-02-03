import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressStepper } from '../ProgressStepper';

test('Renders without children', () => {
  render(
    <div data-testid="progress-stepper">
      <ProgressStepper />
    </div>
  );
  expect(screen.getByTestId('progress-stepper').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<ProgressStepper>Test</ProgressStepper>);
  expect(screen.getByRole('list')).toBeVisible();
});

test('Renders with only class name pf-c-progress-stepper by default', () => {
  render(<ProgressStepper>Test</ProgressStepper>);
  expect(screen.getByRole('list')).toHaveClass('pf-c-progress-stepper', { exact: true });
});

test('Renders with class name pf-c-progress-stepper', () => {
  render(<ProgressStepper>Test</ProgressStepper>);
  expect(screen.getByRole('list')).toHaveClass('pf-c-progress-stepper');
});

test('Renders with custom class name when className prop is provided', () => {
  render(<ProgressStepper className="custom-class">Test</ProgressStepper>);
  expect(screen.getByRole('list')).toHaveClass('custom-class');
});

test('Renders with class name pf-m-center when isCenterAligned prop is passed', () => {
  render(<ProgressStepper isCenterAligned>Test</ProgressStepper>);
  expect(screen.getByRole('list')).toHaveClass('pf-m-center');
});

test('Renders with class name pf-m-vertical when isVertical prop is passed', () => {
  render(<ProgressStepper isVertical>Test</ProgressStepper>);
  expect(screen.getByRole('list')).toHaveClass('pf-m-vertical');
});

test('Renders with class name pf-m-compact when isCompact prop is passed', () => {
  render(<ProgressStepper isCompact>Test</ProgressStepper>);
  expect(screen.getByRole('list')).toHaveClass('pf-m-compact');
});

test('Renders with inherited element props spread to the component', () => {
  render(<ProgressStepper aria-label="Test label">Test</ProgressStepper>);
  expect(screen.getByRole('list')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<ProgressStepper>Test</ProgressStepper>);
  expect(asFragment()).toMatchSnapshot();
});

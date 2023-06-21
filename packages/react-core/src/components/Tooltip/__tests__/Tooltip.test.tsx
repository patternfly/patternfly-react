import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tooltip } from '../Tooltip';

test('Does not render by default', () => {
  render(<Tooltip content="Test content" />);

  expect(screen.queryByText('Test content')).not.toBeInTheDocument();
});

// Need to pass isVisible and make test callbacks async in order to render tooltip

test('Renders with content', async () => {
  render(<Tooltip isVisible content="Test content" />);

  const tooltip = await screen.findByText('Test content');
  expect(tooltip.parentElement).toBeVisible();
});

test('Renders with class name pf-v5-c-tooltip by default', async () => {
  render(<Tooltip isVisible content="Test content" />);

  const tooltip = await screen.findByText('Test content');
  expect(tooltip.parentElement).toHaveClass('pf-v5-c-tooltip');
});

test('Renders with custom class names provided via prop', async () => {
  render(<Tooltip isVisible className="test-class" content="Test content" />);

  const tooltip = await screen.findByText('Test content');
  expect(tooltip.parentElement).toHaveClass('test-class');
});

test('Renders with role of tooltip', async () => {
  render(<Tooltip isVisible content="Test content" />);

  const tooltip = await screen.findByText('Test content');
  expect(tooltip.parentElement).toHaveAttribute('role', 'tooltip');
});

test('Renders with aria-live of off by default when triggerRef is not passed', async () => {
  render(<Tooltip isVisible content="Test content" />);

  const tooltip = await screen.findByText('Test content');
  expect(tooltip.parentElement).toHaveAttribute('aria-live', 'off');
});

test('Renders with aria-live of polite by default when triggerRef is passed', async () => {
  const triggerRef = React.createRef();
  render(<Tooltip triggerRef={triggerRef} isVisible content="Test content" />);

  const tooltip = await screen.findByText('Test content');
  expect(tooltip.parentElement).toHaveAttribute('aria-live', 'polite');
});

test('Renders with value passed to aria-live prop', async () => {
  render(<Tooltip aria-live="polite" isVisible content="Test content" />);

  const tooltip = await screen.findByText('Test content');
  expect(tooltip.parentElement).toHaveAttribute('aria-live', 'polite');
});

test('Renders with value passed to id prop', async () => {
  render(<Tooltip id="custom-id" isVisible content="Test content" />);

  const tooltip = await screen.findByText('Test content');
  expect(tooltip.parentElement).toHaveAttribute('id', 'custom-id');
});

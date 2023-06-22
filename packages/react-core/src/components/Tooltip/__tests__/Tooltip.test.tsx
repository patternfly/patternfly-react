import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from '../Tooltip';

jest.mock('../../../helpers/Popper/Popper');

test('Does not render by default', () => {
  render(<Tooltip content="Test content" />);

  expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
});

test('Renders when isVisible is true', async () => {
  render(<Tooltip isVisible content="Test content" />);

  const tooltip = await screen.findByRole('tooltip');
  expect(tooltip).toBeVisible();
});

test('Renders with class name pf-v5-c-tooltip by default', async () => {
  render(<Tooltip isVisible content="Test content" />);

  const tooltip = await screen.findByRole('tooltip');
  expect(tooltip).toHaveClass('pf-v5-c-tooltip');
});

test('Renders with custom class names provided via prop', async () => {
  render(<Tooltip isVisible className="test-class" content="Test content" />);

  const tooltip = await screen.findByRole('tooltip');
  expect(tooltip).toHaveClass('test-class');
});

test('Renders with aria-live of off by default when triggerRef is not passed', async () => {
  render(<Tooltip isVisible content="Test content" />);

  const tooltip = await screen.findByRole('tooltip');
  expect(tooltip).toHaveAttribute('aria-live', 'off');
});

test('Renders with aria-live of polite by default when triggerRef is passed', async () => {
  const triggerRef = React.createRef();
  render(<Tooltip triggerRef={triggerRef} isVisible content="Test content" />);

  const tooltip = await screen.findByRole('tooltip');
  expect(tooltip).toHaveAttribute('aria-live', 'polite');
});

test('Renders with value passed to aria-live prop', async () => {
  render(<Tooltip aria-live="polite" isVisible content="Test content" />);

  const tooltip = await screen.findByRole('tooltip');
  expect(tooltip).toHaveAttribute('aria-live', 'polite');
});

test('Renders with value passed to id prop', async () => {
  render(<Tooltip id="custom-id" isVisible content="Test content" />);

  const tooltip = await screen.findByRole('tooltip');
  expect(tooltip).toHaveAttribute('id', 'custom-id');
});

test('Passes zIndex to Popper', async () => {
  render(<Tooltip zIndex={10} content="Test content" />);

  const contentPassedToPopper = await screen.findByText('zIndex: 10');
  expect(contentPassedToPopper).toBeVisible();
});

test('Passes enableFlip to Popper', async () => {
  render(<Tooltip enableFlip content="Test content" />);

  const contentPassedToPopper = await screen.findByText('enableFlip: true');
  expect(contentPassedToPopper).toBeVisible();
});

test('Passes position as placement to Popper', async () => {
  render(<Tooltip position="left-start" content="Test content" />);

  const contentPassedToPopper = await screen.findByText('placement: left-start');
  expect(contentPassedToPopper).toBeVisible();
});

test('Passes appendTo to Popper', async () => {
  render(<Tooltip appendTo={() => document.body} content="Test content" />);

  const contentPassedToPopper = await screen.findByText('appendTo: () => document.body');
  expect(contentPassedToPopper).toBeVisible();
});

test('Passes distance to Popper', async () => {
  render(<Tooltip distance={5} content="Test content" />);

  const contentPassedToPopper = await screen.findByText('distance: 5');
  expect(contentPassedToPopper).toBeVisible();
});

test('Passes flipBehavior to Popper', async () => {
  render(<Tooltip flipBehavior="flip" content="Test content" />);

  const contentPassedToPopper = await screen.findByText('flipBehavior: flip');
  expect(contentPassedToPopper).toBeVisible();
});

test('Passes minWidth to Popper', async () => {
  render(<Tooltip minWidth="100px" content="Test content" />);

  const contentPassedToPopper = await screen.findByText('minWidth: 100px');
  expect(contentPassedToPopper).toBeVisible();
});

test('Matches snapshot', async () => {
  render(<Tooltip id="custom-id" isVisible content="Test content" />);

  const tooltip = await screen.findByRole('tooltip');
  expect(tooltip).toMatchSnapshot();
});

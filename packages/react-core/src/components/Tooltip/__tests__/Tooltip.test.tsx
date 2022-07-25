import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Tooltip } from '../Tooltip';
import { TooltipArrow } from "../TooltipArrow";
import { TooltipContent } from "../TooltipContent";
import userEvent from '@testing-library/user-event';

/** Testing tooltip content */

test('tooltip content renders', () => {
  const { asFragment } = render(
    <TooltipContent
      children={
          <div>Test</div>
      }
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
  
test('renders pf-c-tooltip__content class', () => {
  render(
    <TooltipContent
      aria-label="test-label"
      children={
          <div>Test</div>
      }
    />
  );

  const tooltip = screen.getByLabelText('test-label');

  expect(tooltip).toHaveClass('pf-c-tooltip__content');
});
  
test('renders custom class', () => {
  render(
    <TooltipContent
      className="custom-classname"
      aria-label="test-label"
      children={
          <div>Test</div>
      }
    />
  );
  
  const tooltip = screen.getByLabelText('test-label');

  expect(tooltip).toHaveClass('custom-classname');
});

test('renders with children', () => {
  render(
    <TooltipContent
        children={
          <div>Test</div>
        }
    />
  );

  expect(screen.getByText('Test')).toBeVisible();
});

test('renders tooltip content with default alignment', () => {
  render(
    <TooltipContent
      aria-label="test-label"
      children={
        <div>Test</div>
      }
    />
  );
  
  expect(screen.getByLabelText('test-label')).not.toHaveClass('pf-m-text-align-left');
});

test('renders tooltip content with left alignment', () => {
  render(
    <TooltipContent
      aria-label="test-label"
      isLeftAligned
      children={
        <div>Test</div>
      }
    />
  );
  
  expect(screen.getByLabelText('test-label')).toHaveClass('pf-m-text-align-left');
});

test('renders with inherited element props spread to the component', () => {
  render(
    <TooltipContent
      aria-label="test-label"
    >
      Test
    </TooltipContent>
  );

  const tooltip = screen.getByText('Test');

  expect(tooltip).toHaveAccessibleName('test-label');
});

/** Testing tooltip arrow */

test('tooltip arrow renders', () => {
  const { asFragment } = render(
    <TooltipArrow />
  );

  expect(asFragment()).toMatchSnapshot();
});

test('renders pf-c-tooltip__arrow class', () => {
  render(
    <TooltipArrow
      aria-label="test-label"
    />
  );

  const tooltip = screen.getByLabelText('test-label');

  expect(tooltip).toHaveClass('pf-c-tooltip__arrow');
});

test('renders custom class', () => {
  render(
    <TooltipArrow
      className="custom-classname"
      aria-label="test-label"
    />
  );

  const tooltip = screen.getByLabelText('test-label');

  expect(tooltip).toHaveClass('custom-classname');
});

test('renders with inherited element props spread to the component', () => {
  render(
    <TooltipArrow
      aria-label="test-label"
    >
      Test
    </TooltipArrow>
  );

  const tooltip = screen.getByText('Test');

  expect(tooltip).toHaveAccessibleName('test-label');
});

/** Testing remaining tooltip props */

test('tooltip renders', () => {
  const { asFragment } = render(
    <Tooltip
      position="top"
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <div>Toggle tooltip</div>
    </Tooltip>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders tooltip content', async () => {
  render(
    <Tooltip
      aria-label="test-label"
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <div>Toggle tooltip</div>
    </Tooltip>
  );

  const user = screen.getByText("Toggle tooltip");
  userEvent.hover(user);

  const tooltip = await screen.findByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.");

  expect(tooltip).toBeVisible();
});

test('renders tooltip position', async () => {
  render(
    <Tooltip
      position="top"
      aria-label="test-label"
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <div>Toggle tooltip</div>
    </Tooltip>
  );

  const user = screen.getByText("Toggle tooltip");
  userEvent.hover(user);

  const tooltip = await screen.findByLabelText("test-label");
  expect(tooltip).toHaveClass("pf-m-top");
});

test('renders tooltip on DOM without userEvent when isVisible prop passed', async () => {
  render(
    <Tooltip
      aria-label="test-label"
      isVisible
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <div>Toggle tooltip</div>
    </Tooltip>
  );

  const tooltip = await screen.findByLabelText("test-label");
  expect(tooltip).toHaveClass("pf-c-tooltip");
});

test('renders default classname pf-c-tooltip', async () => {
  render(
    <Tooltip
      aria-label="test-label"
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <div>Toggle tooltip</div>
    </Tooltip>
  );

  const user = screen.getByText("Toggle tooltip");
  userEvent.hover(user);

  const tooltip = await screen.findByLabelText("test-label");
  expect(tooltip).toHaveClass("pf-c-tooltip");
});

test('renders custom classname', async () => {
  render(
    <Tooltip
      aria-label="test-label"
      className="custom-class"
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <div>Toggle tooltip</div>
    </Tooltip>
  );

  const user = screen.getByText("Toggle tooltip");
  userEvent.hover(user);

  const tooltip = await screen.findByLabelText("test-label");
  expect(tooltip).toHaveClass("custom-class");
});

test('renders zIndex styling', async () => {
  render(
    <Tooltip
      aria-label="test-label"
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <div>Toggle tooltip</div>
    </Tooltip>
  );

  const user = screen.getByText("Toggle tooltip");
  userEvent.hover(user);

  const tooltip = await screen.findByLabelText("test-label");
  const style = window.getComputedStyle(tooltip);
  expect(style.zIndex).toBe("9999");
});

test('renders children', async () => {
  render(
    <Tooltip
      aria-label="test-label"
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <div>Toggle tooltip</div>
    </Tooltip>
  );

  const user = screen.getByText("Toggle tooltip");
  expect(user).toBeVisible();
});

test('renders animationDuration styling', async () => {
  render(
    <Tooltip
      aria-label="test-label"
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <div>Toggle tooltip</div>
    </Tooltip>
  );

  const user = screen.getByText("Toggle tooltip");
  userEvent.hover(user);

  const tooltip = await screen.findByLabelText("test-label");
  const style = window.getComputedStyle(tooltip);
  expect(style.transition).toBe("opacity 300ms cubic-bezier(.54, 1.5, .38, 1.11)");
});

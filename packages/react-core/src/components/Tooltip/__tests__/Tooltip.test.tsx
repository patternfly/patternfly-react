import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Tooltip } from '../Tooltip';
import { TooltipArrow } from "../TooltipArrow";
import { TooltipContent } from "../TooltipContent";
import userEvent from '@testing-library/user-event';

jest.mock('../../../helpers/Popper/Popper', () => ({
  Popper: ({ trigger, enableFlip, appendTo, distance, flipBehavior, isVisible, placement, popper, zIndex, ...props }) => (
    <div data-testid="popper-mock">
      <div data-testid="trigger">{trigger}</div>
      <div data-testid="content">{isVisible && popper}</div>
      <div data-testid="placement">{placement}</div>
      <div data-testid="enableFlip">{enableFlip}</div>
      <div data-testid="distance">{distance}</div>
      <div data-testid="flipBehavior">{flipBehavior}</div>
      <div data-testid="appendTo">{appendTo}</div>
      <div data-testid="zIndex">{zIndex}</div>
      <p>{`enableFlip: ${enableFlip}`}</p>
      <p>Append to class name: {appendTo && `${appendTo.className}`}</p>
    </div>
  ),
  getOpacityTransition: () => {}
}));

/** Testing tooltip content */

test('tooltip content renders', () => {
  render(
    <TooltipContent
      children={
        <div>Test</div>
      }
      data-testid='Tooltip'
    />
  );

  expect(screen.getByTestId('Tooltip')).toBeVisible();
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

test('renders tooltip content when isVisible', async () => {
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

  const tooltip = await screen.findByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.");

  expect(tooltip).toBeVisible();
});

test('does not render tooltip content by default', () => {
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

  const tooltip = screen.queryByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.");

  expect(tooltip).not.toBeInTheDocument();
});

test('renders tooltip position when isVisible', () => {
  render(
    <Tooltip
      position="top"
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

  const tooltip = screen.getByTestId("placement");
  expect(tooltip).toHaveTextContent("top");
});

test('passes Popper enableFlip set to true', async () => {
  render(
    <Tooltip
      enableFlip
      content={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
        </div>
      }
    >
      <div>Toggle tooltip</div>
    </Tooltip>
  );

  const input = await screen.findByText('enableFlip: true');

  expect(input).toBeVisible();
});

test('renders default classname pf-c-tooltip when isVisible', async () => {
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

test('renders custom classname when isVisible', async () => {
  render(
    <Tooltip
      aria-label="test-label"
      className="custom-class"
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
  expect(tooltip).toHaveClass("custom-class");
});

// entrydelay test

// exitdelay test

// appendto test


test('renders zIndex styling when isVisible', () => {
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

  const input = screen.getByTestId('zIndex');

  expect(input).toHaveTextContent('9999');
});

// maxwidth

test('renders default distance when isVisible', () => {
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

  const input = screen.getByTestId('distance');

  expect(input).toHaveTextContent('15');
});

// aria

test('renders default flipBehavior when isVisible', () => {
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

  const input = screen.getByTestId('flipBehavior');

  expect(input).toHaveTextContent('toprightbottomlefttoprightbottom');
});

// id

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

// test('renders animationDuration styling', async () => {
//   render(
//     <Tooltip
//       aria-label="test-label"
//       content={
//         <div>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
//         </div>
//       }
//     >
//       <div>Toggle tooltip</div>
//     </Tooltip>
//   );

//   const user = screen.getByText("Toggle tooltip");
//   userEvent.hover(user);

//   const tooltip = await screen.findByLabelText("test-label");
//   const style = window.getComputedStyle(tooltip);
//   expect(style.transition).toBe("opacity 300ms cubic-bezier(.54, 1.5, .38, 1.11)");
// });

// reference

// aria-live


// appendTo is passed straight to popper

// aria - has assertions against what the accessible name is
// test against trigger prop for popper!!!
// maybe just have popper render trigger with custom data test id and have assertions based on that and the accessible name

// id - same thing w aria prop AND make sure it's getting passed to the proper place
// not rly a good rtl to test for IDs -> have it render what trigger returns and make assertions based on accessible name -> test aria prop and id prop
// select using data test-id bc content is a div

// reference is straight to popper
// but also note: aria-live uses reference -> might have to use toHave attribute


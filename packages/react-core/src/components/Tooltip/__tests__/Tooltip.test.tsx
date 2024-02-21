import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tooltip } from '../Tooltip';
import userEvent from '@testing-library/user-event';
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';

jest.mock('../../../helpers/Popper/Popper');

test('Renders with class name pf-v6-c-tooltip by default', async () => {
  render(<Tooltip isVisible content="Test content" />);

  const tooltip = await screen.findByRole('tooltip');
  expect(tooltip).toHaveClass(styles.tooltip);
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

test('Renders with maxWidth styling applied when maxWidth is passed', async () => {
  render(<Tooltip isVisible maxWidth="100px" content="Test content" />);

  const tooltip = await screen.findByRole('tooltip');
  expect(tooltip).toHaveStyle('max-width: 100px');
});

test('Renders with aria-describedby on trigger by default', async () => {
  render(
    <Tooltip id="trigger-with-aria" isVisible content="Test content">
      <button>Toggle</button>
    </Tooltip>
  );

  await screen.findByRole('tooltip');
  expect(screen.getByRole('button')).toHaveAccessibleDescription('Test content');
});

test('Renders with aria-labelledby on trigger when aria="labelledby" is passed', async () => {
  render(
    <Tooltip id="trigger-with-aria" aria="labelledby" isVisible content="Test content">
      <button>Toggle</button>
    </Tooltip>
  );

  await screen.findByRole('tooltip');
  expect(screen.getByRole('button')).toHaveAccessibleName('Test content');
});

test('Renders without aria-labelledby or aria-describedby on trigger when aria="none" is passed', async () => {
  render(
    <Tooltip id="trigger-with-aria" aria="none" isVisible content="Test content">
      <button>Toggle</button>
    </Tooltip>
  );

  await screen.findByRole('tooltip');
  expect(screen.getByRole('button')).not.toHaveAccessibleName('Test content');
  expect(screen.getByRole('button')).not.toHaveAccessibleDescription('Test content');
});

test('Does not call onTooltipHidden before tooltip is hidden', async () => {
  const onTooltipHiddenMock = jest.fn();
  const user = userEvent.setup();

  const TooltipCallback = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    return (
      <Tooltip trigger="manual" isVisible={isVisible} onTooltipHidden={onTooltipHiddenMock} content="Test content">
        <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      </Tooltip>
    );
  };
  render(<TooltipCallback />);

  await user.click(screen.getByRole('button'));
  await screen.findByRole('tooltip');
  expect(onTooltipHiddenMock).not.toHaveBeenCalled();
});

test.skip('Calls onTooltipHidden when tooltip is hidden', async () => {
  const onTooltipHiddenMock = jest.fn();
  const user = userEvent.setup();

  const TooltipCallback = () => {
    const [isVisible, setIsVisible] = React.useState(true);

    return (
      <Tooltip trigger="manual" isVisible={isVisible} onTooltipHidden={onTooltipHiddenMock} content="Test content">
        <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      </Tooltip>
    );
  };
  render(<TooltipCallback />);

  await screen.findByRole('tooltip');
  await user.click(screen.getByRole('button'));
  await screen.findByText('isVisible: false');
  expect(onTooltipHiddenMock).toHaveBeenCalled();
});

test('Does not pass isVisible to Popper by default', async () => {
  render(<Tooltip content="Test content" />);

  const contentPassedToPopper = await screen.findByText('isVisible: false');
  expect(contentPassedToPopper).toBeVisible();
});

test('Passes isVisible to Popper', async () => {
  render(<Tooltip isVisible content="Test content" />);

  const contentPassedToPopper = await screen.findByText('isVisible: true');
  expect(contentPassedToPopper).toBeVisible();
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
  render(
    <Tooltip id="custom-id" isVisible isContentLeftAligned content="Test content">
      <button>Trigger</button>
    </Tooltip>
  );

  const tooltip = await screen.findByRole('tooltip');
  expect(tooltip).toMatchSnapshot();
});

import { render, screen } from '@testing-library/react';
import { PageGroup } from '../PageGroup';
import styles from '@patternfly/react-styles/css/components/Page/page';

test('Verify basic render', () => {
  const { asFragment } = render(<PageGroup>test</PageGroup>);
  expect(asFragment()).toMatchSnapshot();
});
test('Verify top sticky', () => {
  const { asFragment } = render(<PageGroup stickyOnBreakpoint={{ default: 'top' }}>test</PageGroup>);
  expect(asFragment()).toMatchSnapshot();
});
test('Verify bottom sticky', () => {
  const { asFragment } = render(<PageGroup stickyOnBreakpoint={{ default: 'bottom' }}>test</PageGroup>);
  expect(asFragment()).toMatchSnapshot();
});
test('Verify top shadow', () => {
  const { asFragment } = render(<PageGroup hasShadowTop>test</PageGroup>);
  expect(asFragment()).toMatchSnapshot();
});
test('Verify bottom shadow', () => {
  const { asFragment } = render(<PageGroup hasShadowBottom>test</PageGroup>);
  expect(asFragment()).toMatchSnapshot();
});
test('Verify overflow scroll', () => {
  const { asFragment } = render(<PageGroup hasOverflowScroll>test</PageGroup>);
  expect(asFragment()).toMatchSnapshot();
});

test('Renders without an aria-label by default', () => {
  render(<PageGroup>test</PageGroup>);

  expect(screen.getByText('test')).not.toHaveAccessibleName('Test label');
});

test('Renders with the passed aria-label applied', () => {
  render(
    <PageGroup aria-label="Test label" hasOverflowScroll>
      test
    </PageGroup>
  );

  expect(screen.getByText('test')).toHaveAccessibleName('Test label');
});

test('Does not log a warning in the console by default', () => {
  const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

  render(<PageGroup>test</PageGroup>);

  expect(consoleWarning).not.toHaveBeenCalled();
});

test('Does not log a warning in the console when an aria-label is included with hasOverflowScroll', () => {
  const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

  render(
    <PageGroup hasOverflowScroll aria-label="Test label">
      test
    </PageGroup>
  );

  expect(consoleWarning).not.toHaveBeenCalled();
});

test('Logs a warning in the console when an aria-label is not included with hasOverflowScroll', () => {
  const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

  render(<PageGroup hasOverflowScroll>test</PageGroup>);

  expect(consoleWarning).toHaveBeenCalled();
});

test(`Does not render with ${styles.modifiers.fill} or ${styles.modifiers.noFill} if isFilled is not passed`, () => {
  render(<PageGroup>test</PageGroup>);

  expect(screen.getByText('test')).not.toHaveClass(styles.modifiers.fill);
  expect(screen.getByText('test')).not.toHaveClass(styles.modifiers.noFill);
});

test(`Renders with ${styles.modifiers.fill} if isFilled={true} is passed`, () => {
  render(<PageGroup isFilled={true}>test</PageGroup>);

  expect(screen.getByText('test')).toHaveClass(styles.modifiers.fill);
});

test(`Renders with ${styles.modifiers.noFill} if isFilled={false} is passed`, () => {
  render(<PageGroup isFilled={false}>test</PageGroup>);

  expect(screen.getByText('test')).toHaveClass(styles.modifiers.noFill);
});

test(`Renders with ${styles.modifiers.plain} class when isPlain is true`, () => {
  render(<PageGroup isPlain>test</PageGroup>);

  expect(screen.getByText('test')).toHaveClass(styles.modifiers.plain);
});

test(`Renders with ${styles.modifiers.noPlainOnGlass} class when isPlain is true`, () => {
  render(<PageGroup isNoPlainOnGlass>test</PageGroup>);

  expect(screen.getByText('test')).toHaveClass(styles.modifiers.noPlainOnGlass);
});

test('Does not log a warning when only isPlain is passed', () => {
  const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

  render(<PageGroup isPlain>test</PageGroup>);

  expect(consoleWarning).not.toHaveBeenCalled();
});

test('Does not log a warning when only isNoPlainOnGlass is passed', () => {
  const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

  render(<PageGroup isNoPlainOnGlass>test</PageGroup>);

  expect(consoleWarning).not.toHaveBeenCalled();
});

test('Logs a warning when both isPlain and isNoPlainOnGlass are passed', () => {
  const consoleWarning = jest.spyOn(console, 'warn').mockImplementation();

  render(
    <PageGroup isPlain isNoPlainOnGlass>
      test
    </PageGroup>
  );

  expect(consoleWarning).toHaveBeenCalledWith(
    `PageGroup: When both isPlain and isNoPlainOnGlass are true, isPlain will take precedence and isNoPlainOnGlass will have no effect. It's recommended to pass only one prop according to the current theme.`
  );
});

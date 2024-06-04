import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Hint } from '../Hint';
import styles from '@patternfly/react-styles/css/components/Hint/hint';

test('renders without children', () => {
  render(<Hint data-testid="Hint" />);

  expect(screen.getByTestId('Hint')).toBeVisible();
});

test('renders children', () => {
  render(<Hint>Test</Hint>);

  expect(screen.getByText('Test')).toBeVisible();
});

test(`renders with class ${styles.hint}`, () => {
  render(<Hint>Test</Hint>);

  const hint = screen.getByText('Test');

  expect(hint).toHaveClass(styles.hint);
});

test('renders with custom class names provided via prop', () => {
  render(<Hint className="custom-classname">Test</Hint>);

  const hint = screen.getByText('Test');

  expect(hint).toHaveClass('custom-classname');
});

test('does not render actions options when not passed', () => {
  render(<Hint>Test</Hint>);

  const actions = screen.queryByText('actions');

  expect(actions).not.toBeInTheDocument();
});

test('renders actions options', () => {
  render(<Hint actions="actions">Test</Hint>);

  const actions = screen.getByText('actions');

  expect(actions).toBeVisible();
});

test(`renders with class ${styles.hintActions} if there is an action prop and not have class ${styles.modifiers.noOffset} without hasNoActionsOffset prop`, () => {
  render(<Hint actions="actions">Test</Hint>);

  const hint = screen.getByText('actions');

  expect(hint).toHaveClass(styles.hintActions);
  expect(hint).not.toHaveClass(styles.modifiers.noOffset);
});

test(`renders with class ${styles.modifiers.noOffset} if there is an action prop and hasNoActionsOffset is true`, () => {
  render(
    <Hint actions="actions" hasNoActionsOffset>
      Test
    </Hint>
  );

  const hint = screen.getByText('actions');

  expect(hint).toHaveClass(styles.modifiers.noOffset);
});

test('renders with inherited element props spread to the component', () => {
  render(<Hint aria-label="labelling-id">Test</Hint>);

  expect(screen.getByText('Test')).toHaveAccessibleName('labelling-id');
});

test('matches hint snapshot', () => {
  const { asFragment } = render(<Hint />);
  expect(asFragment()).toMatchSnapshot();
});

test('actions are rendered', () => {
  const { asFragment } = render(<Hint actions="test" />);
  expect(asFragment()).toMatchSnapshot();
});

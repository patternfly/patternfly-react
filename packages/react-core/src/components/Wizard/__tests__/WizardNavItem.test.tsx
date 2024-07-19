import React from 'react';

import { render, screen } from '@testing-library/react';
import { WizardNavItem } from '../WizardNavItem';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import userEvent from '@testing-library/user-event';

test(`Renders with additional classes when className is passed`, () => {
  render(<WizardNavItem className="custom-class" />);
  expect(screen.getByRole('listitem')).toHaveClass('custom-class');
});

test(`Renders content passed to content prop`, () => {
  render(<WizardNavItem content="test content" />);
  expect(screen.getByText('test content')).toBeVisible();
});

test(`Renders ${styles.modifiers.disabled} class when isDisabled is true`, () => {
  render(<WizardNavItem isDisabled />);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.disabled);
});

test(`Renders ${styles.modifiers.current} class when isCurrent is true`, () => {
  render(<WizardNavItem isCurrent />);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.current);
});

test(`Callback function fires when onClick passed`, async () => {
  const onClick = jest.fn();
  const user = userEvent.setup();
  render(<WizardNavItem onClick={onClick} />);
  await user.click(screen.getByRole('button'));
  expect(onClick).toHaveBeenCalled();
});

test(`Renders a link element with an href when the props are passed`, () => {
  render(<WizardNavItem component="a" href="test-href" />);
  expect(screen.getByRole('link')).toHaveAttribute('href', 'test-href');
});

test(`Renders a link element with a target when the props are passed`, () => {
  render(<WizardNavItem component="a" href="test-href" target="test-target" />);
  expect(screen.getByRole('link')).toHaveAttribute('target', 'test-target');
});

test(`Renders an expandable li when isExapandable is passed`, () => {
  render(<WizardNavItem isExpandable />);
  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('listitem')).toHaveClass(styles.modifiers.expandable);
});

test(`Renders id to nav item button when passed`, () => {
  render(<WizardNavItem id="test-id" />);
  expect(screen.getByRole('button')).toHaveAttribute('id', 'test-id');
});

test(`Renders screen reader text and danger icon when status is error`, () => {
  render(<WizardNavItem status="error" />);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.danger);
  expect(screen.getByText(', error')).toBeInTheDocument();
});

test(`Renders screen reader text and success icon when status is success`, () => {
  render(<WizardNavItem status="success" />);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.success);
  expect(screen.getByText(', success')).toBeInTheDocument();
});

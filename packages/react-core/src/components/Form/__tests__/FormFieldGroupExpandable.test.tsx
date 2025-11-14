import { render, screen } from '@testing-library/react';
import { FormFieldGroupExpandable } from '../FormFieldGroupExpandable';
import { AnimationsProvider } from '../../../helpers/AnimationsProvider';
import styles from '@patternfly/react-styles/css/components/Form/form';

test('Does not render children by default', () => {
  render(<FormFieldGroupExpandable toggleAriaLabel="Toggle label">Child content</FormFieldGroupExpandable>);

  expect(screen.queryByText('Child content')).not.toBeInTheDocument();
});

test('Renders children when isExpanded is true', () => {
  render(
    <FormFieldGroupExpandable isExpanded toggleAriaLabel="Toggle label">
      Child content
    </FormFieldGroupExpandable>
  );

  expect(screen.getByText('Child content')).toBeInTheDocument();
});

test('Renders children with inert attribute by default when hasAnimations is true', () => {
  render(
    <FormFieldGroupExpandable hasAnimations toggleAriaLabel="Toggle label">
      Child content
    </FormFieldGroupExpandable>
  );

  expect(screen.getByText('Child content')).toHaveAttribute('inert', '');
});

test('Does not render children with inert attribute when hasAnimations and isExpanded are true', () => {
  render(
    <FormFieldGroupExpandable hasAnimations isExpanded toggleAriaLabel="Toggle label">
      Child content
    </FormFieldGroupExpandable>
  );

  expect(screen.getByText('Child content')).not.toHaveAttribute('inert');
});

test(`Does not render with class ${styles.modifiers.expandable} by default`, () => {
  render(<FormFieldGroupExpandable toggleAriaLabel="Toggle label">Child content</FormFieldGroupExpandable>);

  expect(screen.getByRole('group')).not.toHaveClass(styles.modifiers.expandable);
});

test(`Renders with class ${styles.modifiers.expandable} when hasAnimations is true`, () => {
  render(
    <FormFieldGroupExpandable hasAnimations toggleAriaLabel="Toggle label">
      Child content
    </FormFieldGroupExpandable>
  );

  expect(screen.getByRole('group')).toHaveClass(styles.modifiers.expandable);
});

// Regression tests for AnimationsProvider context
test('respects AnimationsProvider context when no local hasAnimations prop', () => {
  render(
    <AnimationsProvider config={{ hasAnimations: true }}>
      <FormFieldGroupExpandable toggleAriaLabel="Toggle label">Child content</FormFieldGroupExpandable>
    </AnimationsProvider>
  );

  expect(screen.getByRole('group')).toHaveClass(styles.modifiers.expandable);
});

test('local hasAnimations prop takes precedence over context', () => {
  render(
    <AnimationsProvider config={{ hasAnimations: true }}>
      <FormFieldGroupExpandable hasAnimations={false} toggleAriaLabel="Toggle label">
        Child content
      </FormFieldGroupExpandable>
    </AnimationsProvider>
  );

  expect(screen.getByRole('group')).not.toHaveClass(styles.modifiers.expandable);
});

test('works without AnimationsProvider (backward compatibility)', () => {
  render(<FormFieldGroupExpandable toggleAriaLabel="Toggle label">Child content</FormFieldGroupExpandable>);

  expect(screen.getByRole('group')).not.toHaveClass(styles.modifiers.expandable);
});

import React from 'react';

import { render, screen } from '@testing-library/react';
import { WizardNav } from '../WizardNav';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

test(`Renders with additional classes when className is passed`, () => {
  render(
    <WizardNav className="custom-class" data-testid="test-id">
      Test
    </WizardNav>
  );
  expect(screen.getByTestId('test-id')).toHaveClass('custom-class');
});

test(`Renders with accessible aria-label when passed`, () => {
  render(
    <WizardNav aria-label="test aria label" data-testid="test-id">
      Test
    </WizardNav>
  );
  expect(screen.getByTestId('test-id')).toHaveAccessibleName('test aria label');
});

test(`Renders with accessible aria-labelledby when passed`, () => {
  render(
    <WizardNav aria-labelledby="test-labelledby" data-testid="test-id">
      Test
    </WizardNav>
  );
  expect(screen.getByTestId('test-id')).toHaveAttribute('aria-labelledby');
});

test(`Renders with expanded styles when prop passed`, () => {
  render(
    <WizardNav isExpanded data-testid="test-id">
      Test
    </WizardNav>
  );
  expect(screen.getByTestId('test-id')).toHaveClass(styles.modifiers.expanded);
});

test(`Renders with expanded styles when prop passed`, () => {
  render(<WizardNav isInnerList>Test</WizardNav>);
  expect(screen.getByRole('list')).toBeInTheDocument();
});

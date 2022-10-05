import React from 'react';

import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { css } from '@patternfly/react-styles';

/**
 * Used as a wrapper for WizardStep content, where the wrapping element is customizable.
 */

export interface WizardBodyProps {
  children: React.ReactNode | React.ReactNode[];
  /** Set to true to remove the default body padding */
  hasNoBodyPadding?: boolean;
  /** An aria-label to use for the wrapper element */
  'aria-label'?: string;
  /** Sets the aria-labelledby attribute for the wrapper element */
  'aria-labelledby'?: string;
  /** Component used as the wrapping content container */
  component?: React.ElementType;
}

export const WizardBody = ({
  children,
  hasNoBodyPadding = false,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  component: WrapperComponent = 'div'
}: WizardBodyProps) => (
  <WrapperComponent aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} className={css(styles.wizardMain)}>
    <div className={css(styles.wizardMainBody, hasNoBodyPadding && styles.modifiers.noPadding)}>{children}</div>
  </WrapperComponent>
);

WizardBody.displayName = 'WizardBody';

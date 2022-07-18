import React from 'react';

import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { css } from '@patternfly/react-styles';

export interface WizardComposableBodyProps {
  children?: React.ReactNode | React.ReactNode[];
  /** Set to true to remove the default body padding */
  hasNoBodyPadding?: boolean;
  /** An aria-label to use for the wrapper element */
  'aria-label'?: string;
  /** Sets the aria-labelledby attribute for the wrapper element */
  'aria-labelledby'?: string;
  /** Component used as the wrapping content container */
  wrapperElement?: React.ElementType;
}

export const WizardComposableBody = ({
  children,
  hasNoBodyPadding = false,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  wrapperElement: Wrapper = 'div'
}: WizardComposableBodyProps) => (
  <Wrapper
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    className={css(styles.wizardMain)}
    {...(Wrapper === 'div' && { role: 'main' })}
  >
    <div className={css(styles.wizardMainBody, hasNoBodyPadding && styles.modifiers.noPadding)}>{children}</div>
  </Wrapper>
);

WizardComposableBody.displayName = 'WizardComposableBody';

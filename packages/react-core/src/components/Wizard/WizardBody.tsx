import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { css } from '@patternfly/react-styles';

export interface WizardBodyProps {
  /** Anything that can be rendered in the Wizard body */
  children: any;
  /** Set to true to remove the default body padding */
  hasNoBodyPadding: boolean;
  /** An aria-label to use for the main element */
  'aria-label'?: string;
  /** Sets the aria-labelledby attribute for the main element */
  'aria-labelledby': string;
  /** Component used as the primary content container */
  mainComponent?: React.ElementType;
}

export const WizardBody: React.FunctionComponent<WizardBodyProps> = ({
  children,
  hasNoBodyPadding = false,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  mainComponent = 'div'
}: WizardBodyProps) => {
  const MainComponent = mainComponent;
  return (
    <MainComponent aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} className={css(styles.wizardMain)}>
      <div className={css(styles.wizardMainBody, hasNoBodyPadding && styles.modifiers.noPadding)}>{children}</div>
    </MainComponent>
  );
};
WizardBody.displayName = 'WizardBody';

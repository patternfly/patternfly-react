import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { css } from '@patternfly/react-styles';

export interface WizardBodyProps {
  /** Anything that can be rendered in the Wizard body */
  children: any;
  /** Set to true to remove the default body padding */
  hasNoBodyPadding: boolean;
}

export const WizardBody: React.FunctionComponent<WizardBodyProps> = ({
  children,
  hasNoBodyPadding = false
}: WizardBodyProps) => (
  <main className={css(styles.wizardMain)}>
    <div className={css(styles.wizardMainBody, hasNoBodyPadding && styles.modifiers.noPadding)}>{children}</div>
  </main>
);

import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

export interface WizardFooterProps {
  /** Buttons in the footer */
  children: any;
}

/**
 *
 */
export function WizardFooter({ children }: WizardFooterProps) {
  return <footer className={css(styles.wizardFooter)}>{children}</footer>;
}

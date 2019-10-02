import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

export interface WizardFooterProps {
  /** Buttons in the footer */
  children: any;
}

export const WizardFooter: React.SFC<WizardFooterProps> = ({ children }: WizardFooterProps) => (
  <footer className={css(styles.wizardFooter)}>{children}</footer>
);

import * as React from 'react';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { css } from '@patternfly/react-styles';

interface WizardBodyProps {
  children?: any;
}

const WizardBody: React.SFC<WizardBodyProps> = ({ children }) => (
  <main className={css(styles.wizardMain)}>
    {children}
  </main>
);

export default WizardBody;
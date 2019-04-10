import * as React from 'react';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { css } from '@patternfly/react-styles';

interface WizardBodyProps {
  children?: any;
  hasBodyPadding: boolean;
}

const WizardBody: React.SFC<WizardBodyProps> = ({ children, hasBodyPadding }) => (
  <main className={css(styles.wizardMain, !hasBodyPadding && 'pf-m-no-padding')}>
    <div className={css(styles.wizardMainBody)}>
      {children}
    </div>
  </main>
);

export default WizardBody;
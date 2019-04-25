import * as React from 'react';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { css } from '@patternfly/react-styles';

interface WizardNavProps {
  children?: any;
  ariaLabel?: string;
  isOpen?: boolean;
  returnList?: boolean;
}

export const WizardNav: React.FunctionComponent<WizardNavProps> = ({
  children,
  ariaLabel,
  isOpen = false,
  returnList = false
}: WizardNavProps) => {
  const innerList = (
    <ol className={css(styles.wizardNavList)}>
      {children}
    </ol>
  );

  if (returnList) {
    return innerList;
  }

  return (
    <nav className={css(styles.wizardNav, isOpen && 'pf-m-expanded')} aria-label={ariaLabel}>
      <ol className={css(styles.wizardNavList)}>
        {children}
      </ol>
    </nav>
  );
};

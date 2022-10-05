import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { css } from '@patternfly/react-styles';

export interface WizardNavProps {
  /** children should be WizardNavItem components */
  children?: any;
  /** Aria-label applied to the navigation element */
  'aria-label'?: string;
  /** Sets the aria-labelledby attribute on the navigation element */
  'aria-labelledby'?: string;
  /** Whether the navigation is expanded */
  isExpanded?: boolean;
  /** True to return the inner list without the wrapping navigation element */
  isInnerList?: boolean;
}

export const WizardNav: React.FunctionComponent<WizardNavProps> = ({
  children,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  isExpanded = false,
  isInnerList = false
}: WizardNavProps) => {
  if (isInnerList) {
    return <ol className={css(styles.wizardNavList)}>{children}</ol>;
  }

  return (
    <nav
      className={css(styles.wizardNav, isExpanded && styles.modifiers.expanded)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      <ol className={css(styles.wizardNavList)}>{children}</ol>
    </nav>
  );
};

WizardNav.displayName = 'WizardNav';

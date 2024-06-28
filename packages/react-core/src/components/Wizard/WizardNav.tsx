import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { css } from '@patternfly/react-styles';

export interface WizardNavProps extends Omit<React.HTMLProps<HTMLOListElement>, 'type' | 'ref'> {
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
  /** Additional classes spread to the wizard nav */
  className?: string;
}

export const WizardNav: React.FunctionComponent<WizardNavProps> = ({
  children,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  isExpanded = false,
  isInnerList = false,
  className,
  ...props
}: WizardNavProps) => {
  if (isInnerList) {
    return (
      <ol className={css(styles.wizardNavList, className)} role="list" {...props}>
        {children}
      </ol>
    );
  }

  return (
    <nav
      className={css(styles.wizardNav, isExpanded && styles.modifiers.expanded, className)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      {...props}
    >
      <ol className={css(styles.wizardNavList)} role="list">
        {children}
      </ol>
    </nav>
  );
};

WizardNav.displayName = 'WizardNav';

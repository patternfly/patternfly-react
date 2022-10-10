import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { css } from '@patternfly/react-styles';
import { useOUIAProps, OUIAProps } from '../../helpers';

export interface WizardNavProps extends OUIAProps {
  /** children should be WizardNavItem components */
  children?: any;
  /** Aria-label applied to the nav element */
  'aria-label'?: string;
  /** Sets the aria-labelledby attribute on the nav element */
  'aria-labelledby'?: string;
  /** Whether the nav is expanded */
  isOpen?: boolean;
  /** True to return the inner list without the wrapping nav element */
  returnList?: boolean;
}

export const WizardNav: React.FunctionComponent<WizardNavProps> = ({
  children,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  isOpen = false,
  returnList = false,
  ouiaId,
  ouiaSafe = true
}: WizardNavProps) => {
  const ouiaProps = useOUIAProps(WizardNav.displayName, ouiaId, ouiaSafe);

  const innerList = <ol className={css(styles.wizardNavList)}>{children}</ol>;

  if (returnList) {
    return innerList;
  }

  return (
    <nav
      className={css(styles.wizardNav, isOpen && styles.modifiers.expanded)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      {...ouiaProps}
    >
      <ol className={css(styles.wizardNavList)}>{children}</ol>
    </nav>
  );
};
WizardNav.displayName = 'WizardNav';

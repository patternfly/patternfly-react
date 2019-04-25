import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';

export interface WizardNavItemProps {
  /** Can nest a WizardNav component for substeps */
  children?: React.ReactNode;
  /** The text to display in the nav item */
  text?: string;
  /** Whether the nav item is the currently active item */
  isCurrent?: boolean;
  /** Whether the nav item is disabled */
  isDisabled?: boolean;
  /** Callback for when the nav item is clicked */
  onNavItemClick?(step: number): any;
  /** The step passed into the onNavItemClick callback */
  step: number;
}

export const WizardNavItem: React.FunctionComponent<WizardNavItemProps> = ({
  children = null,
  text = '',
  isCurrent = false,
  isDisabled = false,
  step,
  onNavItemClick = () => undefined
}: WizardNavItemProps) => (
    <li className={css(styles.wizardNavItem)}>
      <a
        aria-current={isCurrent && !children ? 'page' : false}
        onClick={() => onNavItemClick(step)}
        className={css(styles.wizardNavLink, isCurrent && 'pf-m-current', isDisabled && 'pf-m-disabled')}
        aria-disabled={isDisabled ? true : false}
        tabIndex={isDisabled ? -1 : undefined}>
        {text}
      </a>
      {children}
    </li>
  );

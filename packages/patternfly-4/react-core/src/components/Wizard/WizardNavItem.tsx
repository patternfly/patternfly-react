import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';

interface WizardNavItemProps {
  children?: React.ReactNode;
  label?: string;
  current?: boolean;
  disabled?: boolean;
  onNavItemClick?(step: number): any;
  step: number;
  hasChildren?: boolean;
}

const WizardNavItem: React.FunctionComponent<WizardNavItemProps> = ({
  children = null,
  label = '',
  current = false,
  disabled = false,
  step,
  onNavItemClick,
  hasChildren = false
}: WizardNavItemProps) => (
    <li className={css(styles.wizardNavItem)}>
      <a
        aria-current={current && !hasChildren ? 'page' : 'false'}
        onClick={() => (onNavItemClick && onNavItemClick(step))}
        className={css(styles.wizardNavLink, current && 'pf-m-current', disabled && 'pf-m-disabled')}
        aria-disabled={disabled ? 'true' : 'false'}
        tabIndex={disabled ? -1 : undefined}>
        {label}
      </a>
      {children}
    </li>
  );

export default WizardNavItem;
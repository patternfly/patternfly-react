import * as React from 'react';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { css } from '@patternfly/react-styles';

interface WizardNavItemProps {
  children?: any;
  label?: string;
  current?: boolean;
  disabled?: boolean;
  onNavItemClick(step: number): any;
  step: number;
  hasChildren?: boolean;
}

const WizardNavItem: React.SFC<WizardNavItemProps> = ({ children = null, label = '', current = null, disabled = null, step, onNavItemClick, hasChildren = null }) => (
  <li className={css(styles.wizardNavItem)}>
    <a
      aria-current={current && !hasChildren ? 'page' : null}
      onClick={() => onNavItemClick(step)}
      className={css(styles.wizardNavLink, current && 'pf-m-current', disabled && 'pf-m-disabled')}
      aria-disabled={disabled ? 'true' : null}
      tabIndex={disabled ? -1 : null}>
      {label}
    </a>
    {children}
  </li>
);

export default WizardNavItem;
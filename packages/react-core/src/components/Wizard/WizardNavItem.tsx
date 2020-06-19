import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

export interface WizardNavItemProps {
  /** Can nest a WizardNav component for substeps */
  children?: React.ReactNode;
  /** The content to display in the nav item */
  content?: React.ReactNode;
  /** Whether the nav item is the currently active item */
  isCurrent?: boolean;
  /** Whether the nav item is disabled */
  isDisabled?: boolean;
  /** The step passed into the onNavItemClick callback */
  step: number;
  /** Callback for when the nav item is clicked */
  onNavItemClick?: (step: number) => any;
  /** Component used to render WizardNavItem */
  navItemComponent?: 'button' | 'a';
  /** An optional url to use for when using an anchor component */
  href?: string;
}

export const WizardNavItem: React.FunctionComponent<WizardNavItemProps> = ({
  children = null,
  content = '',
  isCurrent = false,
  isDisabled = false,
  step,
  onNavItemClick = () => undefined,
  navItemComponent = 'button',
  href = null,
  ...rest
}: WizardNavItemProps) => {
  const NavItemComponent = navItemComponent;

  if (navItemComponent === 'a' && !href && process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error('WizardNavItem: When using an anchor, please provide an href');
  }

  const btnProps = {
    disabled: isDisabled
  };

  const linkProps = {
    tabIndex: isDisabled ? -1 : undefined,
    href
  };

  return (
    <li className={css(styles.wizardNavItem)}>
      <NavItemComponent
        {...rest}
        {...(navItemComponent === 'a' ? { ...linkProps } : { ...btnProps })}
        onClick={() => onNavItemClick(step)}
        className={css(styles.wizardNavLink, isCurrent && 'pf-m-current', isDisabled && 'pf-m-disabled')}
        aria-disabled={isDisabled ? true : null}
        aria-current={isCurrent && !children ? 'page' : false}
      >
        {content}
      </NavItemComponent>
      {children}
    </li>
  );
};
WizardNavItem.displayName = 'WizardNavItem';

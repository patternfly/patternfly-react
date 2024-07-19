import * as React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';

import { OUIAProps, useOUIAProps } from '../../helpers';
import { WizardNavItemStatus } from './types';

export interface WizardNavItemProps
  extends Omit<React.HTMLProps<HTMLLIElement>, 'onClick' | 'id' | 'content' | 'type'>,
    OUIAProps {
  /** Additional classes spread to the wizard nav item */
  className?: string;
  /** Can nest a WizardNav component for substeps */
  children?: React.ReactNode;
  /** The content to display in the navigation item */
  content?: React.ReactNode;
  /** Whether the navigation item is the currently active item */
  isCurrent?: boolean;
  /** Whether the navigation item is disabled */
  isDisabled?: boolean;
  /** Whether the navigation item has been visited */
  isVisited?: boolean;
  /** The step index passed into the onNavItemClick callback */
  stepIndex: number;
  /** Callback for when the navigation item is clicked */
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>, index: number) => any;
  /** Component used to render WizardNavItem */
  component?: 'button' | 'a';
  /** An optional url to use for when using an anchor component */
  href?: string;
  /** Where to display the linked URL when using an anchor component */
  target?: React.HTMLAttributeAnchorTarget;
  /** Flag indicating that this NavItem has child steps and is expandable */
  isExpandable?: boolean;
  /** The id for the navigation item */
  id?: string | number;
  /** Used to determine the icon displayed next to content. Default has no icon. */
  status?: 'default' | 'error' | 'success';
}

export const WizardNavItem = ({
  children = null,
  content = '',
  isCurrent = false,
  isDisabled = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isVisited = false,
  stepIndex,
  onClick,
  component: NavItemComponent = 'button',
  href,
  isExpandable = false,
  id,
  status = 'default',
  target,
  ouiaId,
  ouiaSafe = true,
  className,
  ...props
}: WizardNavItemProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const ouiaProps = useOUIAProps(WizardNavItem.displayName, ouiaId, ouiaSafe);

  React.useEffect(() => {
    setIsExpanded(isCurrent);
  }, [isCurrent]);

  if (NavItemComponent === 'a' && !href && process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error('WizardNavItem: When using an anchor, please provide an href');
  }

  return (
    <li
      className={css(
        styles.wizardNavItem,
        isExpandable && styles.modifiers.expandable,
        isExpandable && isExpanded && styles.modifiers.expanded,
        className
      )}
      {...props}
    >
      <NavItemComponent
        {...(NavItemComponent === 'a'
          ? { tabIndex: isDisabled ? -1 : undefined, href, target }
          : { disabled: isDisabled })}
        {...(id && { id: id.toString() })}
        onClick={(e) => {
          e.stopPropagation();
          isExpandable ? setIsExpanded(!isExpanded || isCurrent) : onClick?.(e, stepIndex);
        }}
        className={css(
          styles.wizardNavLink,
          isCurrent && styles.modifiers.current,
          isDisabled && styles.modifiers.disabled,
          status === WizardNavItemStatus.Error && styles.modifiers.danger,
          status === WizardNavItemStatus.Success && styles.modifiers.success
        )}
        aria-disabled={isDisabled ? true : null}
        aria-current={isCurrent && !children ? 'step' : false}
        {...(isExpandable && { 'aria-expanded': isExpanded })}
        {...ouiaProps}
      >
        {status !== WizardNavItemStatus.Default && (
          <>
            <span className="pf-v6-screen-reader">, {status}</span>
            <span className={css(styles.wizardNavLinkStatusIcon)}>
              {status === WizardNavItemStatus.Error && <ExclamationCircleIcon />}
              {status === WizardNavItemStatus.Success && <CheckCircleIcon />}
            </span>
          </>
        )}
        <span className={css(styles.wizardNavLinkMain)}>
          {isExpandable ? (
            <>
              <span className={css(styles.wizardNavLinkText)}>{content}</span>
              <span className={css(styles.wizardNavLinkToggle)}>
                <span className={css(styles.wizardNavLinkToggleIcon)}>
                  <AngleRightIcon aria-label={`${isCurrent ? 'Collapse' : 'Expand'} step icon`} />
                </span>
              </span>
            </>
          ) : (
            <>{content}</>
          )}
        </span>
      </NavItemComponent>
      {children}
    </li>
  );
};

WizardNavItem.displayName = 'WizardNavItem';

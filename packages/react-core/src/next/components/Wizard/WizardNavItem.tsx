import * as React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

import { WizardNavItemStatus } from './types';

export interface WizardNavItemProps {
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
  onNavItemClick?: (stepIndex: number) => any;
  /** Component used to render WizardNavItem */
  navItemComponent?: 'button' | 'a';
  /** An optional url to use for when using an anchor component */
  href?: string;
  /** Flag indicating that this NavItem has child steps and is expandable */
  isExpandable?: boolean;
  /** The id for the navigation item */
  id?: string | number;
  /** Used to determine the icon displayed next to content. Default has no icon. */
  status?: 'default' | 'error';
}

export const WizardNavItem: React.FunctionComponent<WizardNavItemProps> = ({
  children = null,
  content = '',
  isCurrent = false,
  isDisabled = false,
  isVisited = false,
  stepIndex,
  onNavItemClick = () => undefined,
  navItemComponent = 'button',
  href = null,
  isExpandable = false,
  id,
  status = 'default',
  ...rest
}: WizardNavItemProps) => {
  const NavItemComponent = navItemComponent;
  const [isExpanded, setIsExpanded] = React.useState(false);

  React.useEffect(() => {
    setIsExpanded(isCurrent);
  }, [isCurrent]);

  if (navItemComponent === 'a' && !href && process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error('WizardNavItem: When using an anchor, please provide an href');
  }

  const ariaLabel = React.useMemo(() => {
    if (status === WizardNavItemStatus.Error || (isVisited && !isCurrent)) {
      let label = content.toString();

      if (status === WizardNavItemStatus.Error) {
        label += `, ${status}`;
      }

      // No need to signify step is visited if current
      if (isVisited && !isCurrent) {
        label += ', visited';
      }

      return label;
    }
  }, [content, isCurrent, isVisited, status]);

  return (
    <li
      className={css(
        styles.wizardNavItem,
        isExpandable && styles.modifiers.expandable,
        isExpandable && isExpanded && styles.modifiers.expanded
      )}
    >
      <NavItemComponent
        {...rest}
        {...(navItemComponent === 'a' ? { tabIndex: isDisabled ? -1 : undefined, href } : { disabled: isDisabled })}
        {...(id && { id: id.toString() })}
        onClick={e => {
          e.preventDefault();
          isExpandable ? setIsExpanded(!isExpanded || isCurrent) : onNavItemClick(stepIndex);
        }}
        className={css(
          styles.wizardNavLink,
          isCurrent && styles.modifiers.current,
          isDisabled && styles.modifiers.disabled
        )}
        aria-disabled={isDisabled ? true : null}
        aria-current={isCurrent && !children ? 'step' : false}
        {...(isExpandable && { 'aria-expanded': isExpanded })}
        {...(ariaLabel && { 'aria-label': ariaLabel })}
      >
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
          <>
            {content}
            {/* TODO, patternfly/patternfly#5142 */}
            {status === WizardNavItemStatus.Error && (
              <span style={{ marginLeft: 'var(--pf-global--spacer--sm)' }}>
                <ExclamationCircleIcon color="var(--pf-global--danger-color--100)" />
              </span>
            )}
          </>
        )}
      </NavItemComponent>
      {children}
    </li>
  );
};

WizardNavItem.displayName = 'WizardNavItem';

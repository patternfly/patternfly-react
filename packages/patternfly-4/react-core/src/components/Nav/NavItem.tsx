import * as React from 'react';
import styles from '@patternfly/patternfly/components/Nav/nav.css';
import { css } from '@patternfly/react-styles';
import { Omit } from '../../helpers/typeUtils';
import { NavContext, NavSelectClickHandler } from './Nav';

export interface NavItemProps extends Omit<React.HTMLProps<HTMLAnchorElement>,  'onClick'> {
  /** Content rendered inside the nav item */
  children?: React.ReactNode;
  /** Additional classes added to the nav item */
  className?: string;
  /** Target navigation link */
  to?: string;
  /** Flag indicating whether the item is active */
  isActive?: boolean;
  /** Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  groupId?: string | number | null;
  /** Item identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  itemId?: string | number | null;
  /** If true prevents the default anchor link action to occur. Set to true if you want to handle navigation yourself. */
  preventDefault?: boolean;
  /** Callback for item click */
  onClick?: NavSelectClickHandler
}

export const NavItem: React.FunctionComponent<NavItemProps> = ({
   children = null as React.ReactNode,
   className = '',
   to = '',
   isActive = false,
   groupId = null as string,
   itemId = null as string,
   preventDefault = false,
   onClick = null as NavSelectClickHandler,
  ...props
}: NavItemProps) => {

  const renderDefaultLink = ():React.ReactNode => {
    const preventLinkDefault = preventDefault || !to;
    return (
      <NavContext.Consumer>
        {(context: any) => (
          <a
            href={to}
            onClick={e => context.onSelect(e, groupId, itemId, to, preventLinkDefault, onClick)}
            className={css(styles.navLink, isActive && styles.modifiers.current, className)}
            aria-current={isActive ? 'page' : null}
            {...props}
          >
            {children}
          </a>
        )}
      </NavContext.Consumer>
    );
  };

  const renderClonedChild = (child: React.ReactElement): React.ReactNode => (
    <NavContext.Consumer>
      {(context: any) =>
        React.cloneElement(child, {
          onClick: (e: MouseEvent) => context.onSelect(e, groupId, itemId, to, preventDefault, onClick),
          className: css(styles.navLink, isActive && styles.modifiers.current, className),
          'aria-current': isActive ? 'page' : null
        })
      }
    </NavContext.Consumer>
  );

  return (
    <li className={css(styles.navItem, className)}>
      {React.isValidElement(children) ? renderClonedChild(children as React.ReactElement) : renderDefaultLink()}
    </li>
  );
};

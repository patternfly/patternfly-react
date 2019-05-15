import * as React from 'react';
import styles from '@patternfly/patternfly/components/Nav/nav.css';
import { css } from '@patternfly/react-styles';
import { Omit } from '../../helpers/typeUtils';
import { NavContext } from './Nav';

export interface NavItemProps extends Omit<React.HTMLProps<HTMLAnchorElement>,  'onClick'> {
  /** Content rendered inside the nav item */
  children?: React.ReactNode | string | null;
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
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, itemId: number | string, groupId: number | string) => void
}

export class NavItem extends React.Component<NavItemProps> {

  static defaultProps = {
    children: null as React.ReactNode,
    className: '',
    to: '',
    isActive: false,
    groupId: null as string,
    itemId: null as string,
    preventDefault: false,
    onClick: null as ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, itemId: number | string, groupId: number | string) => void)
  };

  static componentType:string = 'NavItem';

  renderDefaultLink() {
    const { className, children, to, isActive, groupId, itemId, preventDefault, onClick, ...rest } = this.props;

    return (
      <NavContext.Consumer>
        {(context: any) => (
          <a
            href={to}
            onClick={e => context.onSelect(e, groupId, itemId, to, preventDefault, onClick)}
            className={css(styles.navLink, isActive && styles.modifiers.current, className)}
            aria-current={isActive ? 'page' : null}
            {...rest}
          >
            {children}
          </a>
        )}
      </NavContext.Consumer>
    );
  }

  renderClonedChild(child: React.ReactElement) {
    const { className, to, isActive, groupId, itemId, preventDefault, onClick } = this.props;

    return (
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
  }

  render()
  {
    const { children, className } = this.props;
    const reactElement = React.isValidElement(children);

    return (
      <li className={css(styles.navItem, className)}>
        {reactElement ? this.renderClonedChild(children as React.ReactElement) : this.renderDefaultLink()}
      </li>
    );
  }
};


export default NavItem;

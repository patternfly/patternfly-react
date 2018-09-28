import React from 'react';
import styles from '@patternfly/patternfly-next/components/Nav/styles.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { NavContext } from './Nav';

const propTypes = {
  /** Content rendered inside the nav item */
  children: PropTypes.node,
  /** Additional classes added to the nav item */
  className: PropTypes.string,
  /** Target navigation link */
  to: PropTypes.string,
  /** Flag indicating whether the item is active */
  isActive: PropTypes.bool,
  /** Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  groupId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Item identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const defaultProps = {
  children: null,
  className: '',
  to: '#',
  isActive: false,
  groupId: null,
  itemId: null
};

const NavItem = ({ className, children, to, isActive, groupId, itemId, ...props }) => {
  const defaultLink = (
    <NavContext.Consumer>
      {context => (
        <a
          href={to}
          onClick={e => context.onSelect(e, groupId, itemId)}
          className={css(styles.navLink, isActive && styles.modifiers.current, className)}
          aria-current={isActive ? 'page' : null}
        >
          {children}
        </a>
      )}
    </NavContext.Consumer>
  );
  const reactElement = React.isValidElement(children);
  const clonedChild = (
    <NavContext.Consumer>
      {context =>
        React.cloneElement(children, {
          onClick: e => context.onSelect(e, groupId, itemId),
          className: css(styles.navLink, isActive && styles.modifiers.current, className)
        })
      }
    </NavContext.Consumer>
  );
  return (
    <li className={css(styles.navItem, className)} {...props}>
      {reactElement ? clonedChild : defaultLink}
    </li>
  );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;
NavItem.componentType = 'NavItem';

export default NavItem;

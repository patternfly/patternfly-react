import React from 'react';
import styles from '@patternfly/patternfly-next/components/Nav/nav.css';
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
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** If true prevents the default anchor link action to occur. Set to true if you want to handle navigation yourself. */
  preventDefault: PropTypes.bool,
  /** Callback for item click */
  onClick: PropTypes.func
};

const defaultProps = {
  children: null,
  className: '',
  to: '',
  isActive: false,
  groupId: null,
  itemId: null,
  preventDefault: false,
  onClick: null
};

const NavItem = ({ className, children, to, isActive, groupId, itemId, preventDefault, onClick, ...props }) => (
  <li className={css(styles.navItem, className)} {...props}>
    <NavContext.Consumer>
      {context => (
        <a
          href={to}
          onClick={e => context.onSelect(e, groupId, itemId, to, preventDefault, onClick)}
          className={css(styles.navLink, isActive && styles.modifiers.current, className)}
          aria-current={isActive ? 'page' : null}
        >
          {children}
        </a>
      )}
    </NavContext.Consumer>
  </li>
);

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;
NavItem.componentType = 'NavItem';

export default NavItem;

import React from 'react';
import styles from '@patternfly/patternfly-next/components/Nav/nav.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Anything that can be rendered inside of the nav */
  children: PropTypes.node,
  /** Additional classes added to the container */
  className: PropTypes.string,
  /** Callback for updating when item selection changes */
  onSelect: PropTypes.func,
  /** Callback for when a list is expanded or collapsed */
  onToggle: PropTypes.func,
  /** Accessibility label */
  'aria-label': PropTypes.string.isRequired
};

const defaultProps = {
  children: null,
  className: '',
  onSelect: () => undefined,
  onToggle: () => undefined
};

export const NavContext = React.createContext();

class Nav extends React.Component {
  // Callback from NavItem
  onSelect(event, groupId, itemId, to, preventDefault, onClick) {
    preventDefault && event.preventDefault();
    this.props.onSelect({
      event,
      itemId,
      groupId,
      to
    });
    onClick && onClick(event, itemId, groupId, to);
  }

  // Callback from NavExpandable
  onToggle(event, groupId, isExpanded) {
    this.props.onToggle({
      event,
      groupId,
      isExpanded
    });
  }

  render() {
    const { children, className, ...props } = this.props;

    return (
      <NavContext.Provider
        value={{
          onSelect: (event, groupId, itemId, to, preventDefault, onClick) => this.onSelect(event, groupId, itemId, to, preventDefault, onClick),
          onToggle: (event, groupId, expanded) => this.onToggle(event, groupId, expanded)
        }}
      >
        <nav className={css(styles.nav, className)} {...props}>
          {children}
        </nav>
      </NavContext.Provider>
    );
  }
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;

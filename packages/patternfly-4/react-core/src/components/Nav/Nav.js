import React from 'react';
import styles from '@patternfly/patternfly/components/Nav/nav.css';
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
  'aria-label': PropTypes.string,
  /** Additional props are spread to the container <nav> */
  '': PropTypes.any
};

const defaultProps = {
  'aria-label': '',
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
  onToggle(event, groupId, toggleValue) {
    this.props.onToggle({
      event,
      groupId,
      toggleValue
    });
  }

  render() {
    const { 'aria-label': ariaLabel, children, className, ...props } = this.props;

    return (
      <NavContext.Provider
        value={{
          onSelect: (event, groupId, itemId, to, preventDefault, onClick) =>
            this.onSelect(event, groupId, itemId, to, preventDefault, onClick),
          onToggle: (event, groupId, expanded) => this.onToggle(event, groupId, expanded)
        }}
      >
        <nav
          className={css(styles.nav, className)}
          aria-label={
            ariaLabel === ''
              ? typeof this.props.children.props !== 'undefined' && this.props.children.props.variant === 'tertiary'
                ? 'Local'
                : 'Global'
              : ariaLabel
          }
          {...props}
        >
          {children}
        </nav>
      </NavContext.Provider>
    );
  }
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;

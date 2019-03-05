import React from 'react';
import styles from '@patternfly/patternfly/components/Nav/nav.css';
import a11yStyles from '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import NavToggle from './NavToggle';
import { AngleRightIcon } from '@patternfly/react-icons';
import { NavContext } from './Nav';
import { getUniqueId } from '../../helpers/util';

const propTypes = {
  /** Title shown for the expandable list */
  title: PropTypes.string.isRequired,
  /** If defined, screen readers will read this text instead of the list title */
  srText: PropTypes.string,
  /** Boolean to programatically expand or collapse section */
  isExpanded: PropTypes.bool,
  /** Anything that can be rendered inside of the expandable list */
  children: PropTypes.node,
  /** Additional classes added to the container */
  className: PropTypes.string,
  /** Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  groupId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** If true makes the expandable list title active */
  isActive: PropTypes.bool,
  /** Identifier to use for the section aria label */
  id: PropTypes.string,
  /** Additional props are spread to the container <li> */
  '': PropTypes.any,
  /** allow consumer to optionally override this callback and manage expand state externally */
  onExpand: PropTypes.func
};

const defaultProps = {
  srText: '',
  isExpanded: false,
  children: null,
  className: '',
  groupId: null,
  isActive: false,
  id: '',
  onExpand: undefined
};

class NavExpandable extends React.Component {
  id = this.props.id || getUniqueId();
  state = {
    expandedState: false
  };

  componentDidMount() {
    this.setState({ expandedState: this.props.isExpanded });
  }

  componentDidUpdate(prevProps) {
    if (this.props.isExpanded !== prevProps.isExpanded) {
      this.setState({ expandedState: this.props.isExpanded });
    }
  }

  onExpand = (e, val) => {
    if (this.props.onExpand) {
      this.props.onExpand(e, val);
    } else {
      this.setState({ expandedState: val });
    }
  };

  render() {
    const { id, title, srText, isExpanded, children, className, groupId, isActive, onExpand, ...props } = this.props;
    const { expandedState } = this.state;

    return (
      <NavContext.Consumer>
        {context => (
          <NavToggle groupId={groupId} onToggle={context.onToggle} onExpand={this.onExpand} isExpanded={expandedState}>
            {({ toggleValue, toggle }) => (
              <li
                className={css(
                  styles.navItem,
                  toggleValue && styles.modifiers.expanded,
                  isActive && styles.modifiers.current,
                  className
                )}
                onClick={toggle}
                {...props}
              >
                <a
                  data-component="pf-nav-expandable"
                  className={css(styles.navLink)}
                  id={srText ? null : this.id}
                  href="#"
                  onClick={e => e.preventDefault()}
                  onMouseDown={e => e.preventDefault()}
                  aria-expanded={toggleValue}
                >
                  {title}
                  <span className={css(styles.navToggle)}>
                    <AngleRightIcon aria-hidden="true" />
                  </span>
                </a>
                <section className={css(styles.navSubnav)} aria-labelledby={this.id} hidden={toggleValue ? null : true}>
                  {srText && (
                    <h2 className={css(a11yStyles.screenReader)} id={this.id}>
                      {srText}
                    </h2>
                  )}
                  <ul className={css(styles.navSimpleList)}>{children}</ul>
                </section>
              </li>
            )}
          </NavToggle>
        )}
      </NavContext.Consumer>
    );
  }
}

NavExpandable.propTypes = propTypes;
NavExpandable.defaultProps = defaultProps;
NavExpandable.componentType = 'NavExpandable';

export default NavExpandable;

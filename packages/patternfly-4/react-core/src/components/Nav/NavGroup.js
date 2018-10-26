import React from 'react';
import styles from '@patternfly/patternfly-next/components/Nav/nav.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { getUniqueId } from '../../internal/util';

const propTypes = {
  /** Title shown for the group */
  title: PropTypes.string.isRequired,
  /** Anything that can be rendered inside of the group */
  children: PropTypes.node,
  /** Additional classes added to the container */
  className: PropTypes.string,
  /** Identifier to use for the section aria label */
  id: PropTypes.string
};

const defaultProps = {
  children: null,
  className: '',
  id: ''
};

class NavGroup extends React.Component {
  id = this.props.id || getUniqueId();

  render() {
    const { id, title, children, className, ...props } = this.props;

    return (
      <section className={css(styles.navSection, className)} aria-labelledby={this.id} {...props}>
        <h2 className={css(styles.navSectionTitle)} id={this.id}>
          {title}
        </h2>
        <ul className={css(styles.navSimpleList)}>{children}</ul>
      </section>
    );
  }
}

NavGroup.propTypes = propTypes;
NavGroup.defaultProps = defaultProps;
NavGroup.componentType = 'NavGroup';

export default NavGroup;

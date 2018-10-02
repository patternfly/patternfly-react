import React from 'react';
import styles from '@patternfly/patternfly-next/components/Nav/styles.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

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
  constructor(props) {
    super(props);

    this.uniqueId =
      props.id ||
      new Date().getTime() +
      Math.random()
        .toString(36)
        .slice(2);
  }

  render() {
    const { title, children, className, ...props } = this.props;

    return (
      <section className={css(styles.navSection, className)} aria-labelledby={this.uniqueId} {...props}>
        <h2 className={css(styles.navSectionTitle)} id={this.uniqueId}>
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

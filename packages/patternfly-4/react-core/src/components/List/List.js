import React from 'react';
import styles from '@patternfly/patternfly-next/components/List/list.css';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

export const ListVariant = {
  grid: 'grid',
  inline: 'inline'
};

const propTypes = {
  /** Anything that can be rendered inside of the list */
  children: PropTypes.node,
  /** Additional classes added to the list. */
  className: PropTypes.string,
  /** Adds list variant styles */
  variant: PropTypes.oneOf(Object.values(ListVariant))
};

const defaultProps = {
  children: null,
  className: '',
  variant: null
};

const List = ({ className, children, variant, ...props }) => (
  <ul {...props} className={css(styles.list, getModifier(styles.modifiers, variant), className)}>
    {children}
  </ul>
);

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;

import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/layouts/Stack/stack.css';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** Flag indicating if this Stack Layout item contains the primary content */
  isMain: PropTypes.bool,
  /** additional classes added to the Stack Layout Item */
  children: PropTypes.node,
  /** content rendered inside the Stack Layout Item */
  className: PropTypes.string
};

const defaultProps = {
  isMain: false,
  className: '',
  children: null
};

const StackItem = ({ isMain, className, children, ...props }) => (
  <div {...props} className={css(styles.stackItem, isMain && styles.modifiers.main, className)}>
    {children}
  </div>
);

StackItem.propTypes = propTypes;
StackItem.defaultProps = defaultProps;

export default StackItem;

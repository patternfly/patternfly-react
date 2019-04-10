import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/layouts/Stack/stack.css';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** Flag indicating if this Stack Layout item should fill the available horizontal space. */
  isFilled: PropTypes.bool,
  /** additional classes added to the Stack Layout Item */
  children: PropTypes.node,
  /** content rendered inside the Stack Layout Item */
  className: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  isFilled: false,
  className: '',
  children: null
};

const StackItem = ({ isFilled, className, children, ...props }) => (
  <div {...props} className={css(styles.stackItem, isFilled && styles.modifiers.fill, className)}>
    {children}
  </div>
);

StackItem.propTypes = propTypes;
StackItem.defaultProps = defaultProps;

export default StackItem;

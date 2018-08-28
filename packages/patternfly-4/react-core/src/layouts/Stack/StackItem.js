import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/layouts/Stack/styles.css';
import { css } from '@patternfly/react-styles';

const propTypes = {
  isMain: PropTypes.bool,
  children: PropTypes.node,
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

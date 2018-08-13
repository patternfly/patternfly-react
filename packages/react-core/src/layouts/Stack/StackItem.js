import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/layouts/Stack/styles.css';
import { css, getModifier } from '@patternfly/react-styles';

export const StackItemVariant = {
  primary: 'primary',
  secondary: 'secondary'
};

const propTypes = {
  variant: PropTypes.oneOf(Object.keys(StackItemVariant)),
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  variant: null,
  className: '',
  children: null
};

const StackItem = ({ variant, className, children, ...props }) => (
  <div {...props} className={css(styles.stackItem, getModifier(styles.modifiers, variant), className)}>
    {children}
  </div>
);

StackItem.propTypes = propTypes;
StackItem.defaultProps = defaultProps;

export default StackItem;

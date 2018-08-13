import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/layouts/Split/styles.css';
import { css, getModifier } from '@patternfly/react-styles';

export const SplitItemVariant = {
  primary: 'primary',
  secondary: 'secondary'
};

const propTypes = {
  variant: PropTypes.oneOf(Object.keys(SplitItemVariant)),
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  variant: null,
  className: '',
  children: null
};

const SplitItem = ({ variant, className, children, ...props }) => (
  <div {...props} className={css(styles.splitItem, getModifier(styles.modifiers, variant), className)}>
    {children}
  </div>
);

SplitItem.propTypes = propTypes;
SplitItem.defaultProps = defaultProps;

export default SplitItem;

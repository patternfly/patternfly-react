import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/layouts/Split/styles.css';
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

const SplitItem = ({ isMain, className, children, ...props }) => (
  <div {...props} className={css(styles.splitItem, isMain && styles.modifiers.main, className)}>
    {children}
  </div>
);

SplitItem.propTypes = propTypes;
SplitItem.defaultProps = defaultProps;

export default SplitItem;

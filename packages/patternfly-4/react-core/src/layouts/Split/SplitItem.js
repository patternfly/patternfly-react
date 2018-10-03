import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/layouts/Split/split.css';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** Flag indicating if this Split Layout item contains the primary content */
  isMain: PropTypes.bool,
  /** content rendered inside the Split Layout Item */
  children: PropTypes.node,
  /** additional classes added to the Split Layout Item */
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

import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/layouts/Split/split.css';
import { css } from '@patternfly/react-styles';

const propTypes = {
  /** Flag indicating if this Split Layout item should fill the available horizontal space. */
  isFilled: PropTypes.bool,
  /** content rendered inside the Split Layout Item */
  children: PropTypes.node,
  /** additional classes added to the Split Layout Item */
  className: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  isFilled: false,
  className: '',
  children: null
};

const SplitItem = ({ isFilled, className, children, ...props }) => (
  <div {...props} className={css(styles.splitItem, isFilled && styles.modifiers.fill, className)}>
    {children}
  </div>
);

SplitItem.propTypes = propTypes;
SplitItem.defaultProps = defaultProps;

export default SplitItem;

import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/DataList/data-list.css';

const DataListCell = ({ children, className, width, isFilled, alignRight, isIcon, ...props }) => (
  <div
    className={css(
      styles.dataListCell,
      width > 1 && getModifier(styles, `flex_${width}`, ''),
      !isFilled && styles.modifiers.noFill,
      alignRight && styles.modifiers.alignRight,
      isIcon && styles.modifiers.icon,
      className
    )}
    {...props}
  >
    {children}
  </div>
);

DataListCell.propTypes = {
  /** Content rendered inside the DataList cell */
  children: PropTypes.node,
  /** Additional classes added to the DataList cell */
  className: PropTypes.string,
  /** Width (from 1-5) to the DataList cell */
  width: PropTypes.oneOf([1, 2, 3, 4, 5]),
  /** Enables the body Content to fill the height of the card */
  isFilled: PropTypes.bool,
  /**  Aligns the cell content to the right of its parent. */
  alignRight: PropTypes.bool,
  /** Set to true if the cell content is an Icon */
  isIcon: PropTypes.bool,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

DataListCell.defaultProps = {
  children: null,
  className: '',
  width: 1,
  isFilled: true,
  alignRight: false,
  isIcon: false
};

export default DataListCell;

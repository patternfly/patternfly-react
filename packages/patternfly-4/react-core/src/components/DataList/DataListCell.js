import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/DataList/data-list.css';

const DataListCell = ({ children, className, width, ...props }) => (
  <div
    className={css(styles.dataListCell, width > 1 && getModifier(styles, `flex_${width}`, ''), className)}
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
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

DataListCell.defaultProps = {
  children: null,
  className: '',
  width: 1
};

export default DataListCell;

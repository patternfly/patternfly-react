import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/DataList/data-list.css';

const DataList = ({ children, className, ...props }) => (
  <ul
    className={css(styles.dataList, className)}
    role="list"
    {...props}
  >
    {children}
  </ul>
);

DataList.propTypes = {
  /** Content rendered inside the DataList list */
  children: PropTypes.node,
  /** Additional classes added to the DataList list */
  className: PropTypes.string,
  /** Adds accessible text to the DataList list */
  'aria-label': PropTypes.string.isRequired,
  /** Additional props are spread to the container <ul> */
  '': PropTypes.any
};

DataList.defaultProps = {
  children: null,
  className: ''
};

export default DataList;

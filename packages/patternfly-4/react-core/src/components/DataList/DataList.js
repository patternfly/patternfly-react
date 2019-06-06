import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

const DataList = ({ children, className, 'aria-label': ariaLabel, ...props }) => (
  <ul className={css(styles.dataList, className)} aria-label={ariaLabel} {...props}>
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
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

DataList.defaultProps = {
  children: null,
  className: ''
};

export default DataList;

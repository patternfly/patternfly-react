import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/DataList/data-list.css';
import boxShStyles from '@patternfly/patternfly-next//utilities/BoxShadow/box-shadow.css';

const DataList = ({ children, className, 'aria-label': ariaLabel, ...props }) => (
  <ul
    className={css(styles.dataList, boxShStyles.boxShadowMd, className)}
    role="list"
    aria-label={ariaLabel}
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

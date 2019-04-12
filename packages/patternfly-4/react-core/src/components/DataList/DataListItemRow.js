import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/DataList/data-list.css';

const DataListItemRow = ({ children, className, rowid, ...props }) => (
  <div className={css(styles.dataListItemRow, className)} {...props}>
    {React.Children.map(
      children,
      child =>
        React.isValidElement(child) &&
        React.cloneElement(child, {
          rowid
        })
    )}
  </div>
);

DataListItemRow.propTypes = {
  /** Content rendered inside the DataList item Row.  Can be <DataListItemCells>, <DataListAction>, <DataListCheck> or <DataListToggle> */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  /** Additional classes added to the DataList item Row */
  className: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

DataListItemRow.defaultProps = {
  className: ''
};

export default DataListItemRow;

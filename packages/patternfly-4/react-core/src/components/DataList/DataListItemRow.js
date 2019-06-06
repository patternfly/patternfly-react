import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

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
  /** Id for the row */
  rowid: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

DataListItemRow.defaultProps = {
  className: '',
  rowid: ''
};

export default DataListItemRow;

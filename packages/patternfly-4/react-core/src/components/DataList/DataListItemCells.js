import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

const DataListItemCells = ({ className, dataListCells, rowid, ...props }) => (
  <div className={css(styles.dataListItemContent, className)} {...props}>
    {dataListCells}
  </div>
);

DataListItemCells.propTypes = {
  /** Additional classes added to the DataList item Content Wrapper.  Children should be one ore more <DataListCell> nodes */
  className: PropTypes.string,
  /** Array of <DataListCell> nodes that are rendered one after the other. */
  dataListCells: PropTypes.arrayOf(PropTypes.node).isRequired,
  /** Id for the row */
  rowid: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

DataListItemCells.defaultProps = {
  className: '',
  rowid: ''
};

export default DataListItemCells;

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/DataList/data-list.css';

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
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

DataListItemCells.defaultProps = {
  className: ''
};

export default DataListItemCells;

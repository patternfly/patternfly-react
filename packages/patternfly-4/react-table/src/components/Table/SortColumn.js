import React from 'react';
import PropTypes from 'prop-types';
import { LongArrowAltUpIcon, LongArrowAltDownIcon, ArrowsAltVIcon } from '@patternfly/react-icons';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Table/table.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isSortedBy: PropTypes.bool,
  onSort: PropTypes.func,
  sortDirection: PropTypes.string
};
const defaultProps = {
  children: null,
  className: '',
  isSortedBy: false,
  onSort: null,
  sortDirection: ''
};

export const SortByDirection = {
  asc: 'asc',
  desc: 'desc'
};

const SortColumn = ({ isSortedBy, children, className, onSort, sortDirection, ...props }) => {
  const SortedByIcon = isSortedBy
    ? sortDirection === 'asc'
      ? LongArrowAltUpIcon
      : LongArrowAltDownIcon
    : ArrowsAltVIcon;
  return (
    <button {...props} className={css(className)} onClick={event => onSort && onSort(event)}>
      {children}
      <span className={css(styles.tableSortIndicator)}>
        <SortedByIcon />
      </span>
    </button>
  );
};

SortColumn.propTypes = propTypes;
SortColumn.defaultProps = defaultProps;

export default SortColumn;

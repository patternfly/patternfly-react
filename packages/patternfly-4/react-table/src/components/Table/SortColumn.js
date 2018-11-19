import React from 'react';
import PropTypes from 'prop-types';
import { AngleUpIcon, SortIcon } from '@patternfly/react-icons';
import { css } from '@patternfly/react-styles';
import { tableSortIndicator } from '@patternfly/patternfly-next/components/Table/table.css';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isSortedBy: PropTypes.bool,
  onSort: PropTypes.func
};
const defaultProps = {
  children: null,
  className: '',
  isSortedBy: false,
  onSort: null
};

export const SortByDirection = {
  asc: 'asc',
  desc: 'desc'
}

const SortColumn = ({ isSortedBy, children, className, onSort, ...props }) => {
  const SortedByIcon = isSortedBy ? AngleUpIcon : SortIcon;
  return (
    <button {...props} className={css(className)} onClick={event => onSort && onSort(event)}>
      {children}
      <span className={css(tableSortIndicator)}>
        <SortedByIcon />
      </span>
    </button>
  );
};

SortColumn.propTypes = propTypes;
SortColumn.defaultProps = defaultProps;

export default SortColumn;

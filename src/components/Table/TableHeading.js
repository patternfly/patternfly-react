import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  TABLE_ALIGN,
  TABLE_ALIGNMENT_TYPES,
  TABLE_SORT_DIRECTION,
  TABLE_SORT_DIRECTIONS
} from './constants';

/**
 * TableHeading component for Patternfly React
 */
const TableHeading = ({
  children,
  className,
  align,
  sort,
  sortDirection,
  ...props
}) => {
  const sortingClass = cx({
    sorting_asc: sortDirection === TABLE_SORT_DIRECTION.ASC,
    sorting_desc: sortDirection === TABLE_SORT_DIRECTION.DESC
  });
  const classes = cx(
    {
      'text-right': align === TABLE_ALIGN.RIGHT,
      'text-center': align === TABLE_ALIGN.CENTER
    },
    sort ? sortingClass || 'sorting' : '',
    className
  );
  return (
    <th className={classes} {...props}>
      {children}
    </th>
  );
};
TableHeading.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Heading alignment */
  align: PropTypes.oneOf(TABLE_ALIGNMENT_TYPES),
  /** sortable heading */
  sort: PropTypes.bool,
  /** sort direction */
  sortDirection: PropTypes.oneOf(TABLE_SORT_DIRECTIONS)
};
export default TableHeading;

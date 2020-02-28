import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import SortTypeSelector from './SortTypeSelector';
import SortDirectionSelector from './SortDirectionSelector';

/**
 * Sort Component for PatternFly React
 */
const Sort = ({ children, className, ...props }) => {
  const classes = classNames('form-group', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Sort.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

Sort.defaultProps = {
  children: null,
  className: ''
};

Sort.TypeSelector = SortTypeSelector;
Sort.DirectionSelector = SortDirectionSelector;

export default Sort;

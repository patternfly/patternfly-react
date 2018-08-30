import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FilterSidePanelCategory from './FilterSidePanelCategory';
import FilterSidePanelCategoryItem from './FilterSidePanelCategoryItem';

/**
 * FilterSidePanel Component for PatternFly
 */
const FilterSidePanel = ({ children, className, ...props }) => {
  const classes = classNames('filter-panel-pf', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

FilterSidePanel.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
FilterSidePanel.defaultProps = {
  children: null,
  className: ''
};

FilterSidePanel.Category = FilterSidePanelCategory;
FilterSidePanel.CategoryItem = FilterSidePanelCategoryItem;

export default FilterSidePanel;

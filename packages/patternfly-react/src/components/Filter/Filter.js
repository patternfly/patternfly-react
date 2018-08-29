import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { getContext } from 'recompose';
import { toolbarContextTypes } from '../Toolbar/ToolbarConstants';
import FilterTypeSelector from './FilterTypeSelector';
import FilterValueSelector from './FilterValueSelector';
import FilterCategorySelector from './FilterCategorySelector';
import FilterCategoryValueSelector from './FilterCategoryValueSelector';
import FilterActiveLabel from './FilterActiveLabel';
import FilterList from './FilterList';
import FilterItem from './FilterItem';

// Disabled eslint due to `isDescendantOfToolbar` being a context property we don't want passed by consumers
// eslint-disable-next-line react/prop-types
const ContextualFilter = ({ children, className, isDescendantOfToolbar, ...props }) => {
  const classes = classNames(
    {
      'filter-pf form-group': true,
      'toolbar-pf-filter': isDescendantOfToolbar
    },
    className
  );

  return (
    <div className={classes} {...props}>
      <div className="filter-pf-fields">
        <div className="input-group">{children}</div>
      </div>
    </div>
  );
};

ContextualFilter.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

ContextualFilter.defaultProps = {
  children: null,
  className: ''
};

const Filter = getContext(toolbarContextTypes)(ContextualFilter);

Filter.TypeSelector = FilterTypeSelector;
Filter.ValueSelector = FilterValueSelector;
Filter.CategorySelector = FilterCategorySelector;
Filter.CategoryValueSelector = FilterCategoryValueSelector;
Filter.ActiveLabel = FilterActiveLabel;
Filter.List = FilterList;
Filter.Item = FilterItem;

export default Filter;

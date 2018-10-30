import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { helpers, Form } from 'patternfly-react';

const FilterSidePanelCategoryItem = ({ children, className, icon, count, ...props }) => {
  const classes = classNames('filter-panel-pf-category-item', className);

  return (
    <div className={classes}>
      <Form.Checkbox {...props}>
        {icon && <span className="item-icon">{icon}</span>}
        {children}
        {Number.isInteger(count) && <span className="item-count">{`(${count})`}</span>}
      </Form.Checkbox>
    </div>
  );
};

FilterSidePanelCategoryItem.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Optional icon (or other) to show before the children */
  icon: PropTypes.node,
  /** Optional count of the items matching the filter */
  count: PropTypes.number,
  /** Properties passed on to the Checkbox */
  ...helpers.excludeKeys(Form.Checkbox.propTypes, ['className', 'children'])
};

FilterSidePanelCategoryItem.defaultProps = {
  children: null,
  className: '',
  icon: null,
  count: null,
  ...helpers.excludeKeys(Form.Checkbox.defaultProps, ['className', 'children'])
};

export default FilterSidePanelCategoryItem;

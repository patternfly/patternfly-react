import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { getContext } from 'recompose';
import { toolbarContextTypes } from '../Toolbar/ToolbarConstants';

// Disabled eslint due to `isDescendantOfToolbar` being a context property we don't want passed by consumers
// eslint-disable-next-line react/prop-types
const Filter = ({ children, className, isDescendantOfToolbar, ...rest }) => {
  const classes = classNames(
    {
      'filter-pf form-group': true,
      'toolbar-pf-filter': isDescendantOfToolbar
    },
    className
  );

  return (
    <div className={classes} {...rest}>
      <div className="filter-pf-fields">
        <div className="input-group">{children}</div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

Filter.defaultProps = {
  children: null,
  className: ''
};
export default getContext(toolbarContextTypes)(Filter);

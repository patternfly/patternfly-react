import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ListViewCheckbox wraps the input provided as child prop. The input depends
 * on the form solution the consuming application uses (e.g. Field component
 * in case of redux-form)
 */
const ListViewCheckbox = ({ children, className }) => (
  <div className={classNames('list-view-pf-checkbox', className)}>{children}</div>
);

ListViewCheckbox.propTypes = {
  /** Child node - form input component */
  children: PropTypes.node.isRequired,
  /** Additional css classes */
  className: PropTypes.string
};
ListViewCheckbox.defaultProps = {
  className: ''
};
export default ListViewCheckbox;

import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

/**
 * ListViewIcon used as a default content for ListViewLeft
 */
const ListViewIcon = ({ type, name, className, size, ...props }) => {
  return (
    <Icon
      type={type}
      name={name}
      className={cx(`list-view-pf-icon-${size}`, className)}
      {...props}
    />
  );
};
ListViewIcon.propTypes = {
  /** Icon type (pf or fa) */
  type: PropTypes.string,
  /** Name of the icon font */
  name: PropTypes.string.isRequired,
  /** additional classes */
  className: PropTypes.string,
  /** Icon size (sm, md, lg), defaults to 'sm' */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
ListViewIcon.defaultProps = {
  type: 'fa',
  size: 'sm',
};
export default ListViewIcon;

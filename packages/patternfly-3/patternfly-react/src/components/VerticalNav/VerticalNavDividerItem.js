import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const VerticalNavDividerItem = ({ title, className, ...props }) => {
  const classes = classNames('vertical-sub-header-pf', className);

  return (
    <span className={classes} {...props}>
      {title}
    </span>
  );
};
VerticalNavDividerItem.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,
  /** Title of divider */
  title: PropTypes.string
};
VerticalNavDividerItem.defaultProps = {
  className: '',
  title: ''
};
export default VerticalNavDividerItem;

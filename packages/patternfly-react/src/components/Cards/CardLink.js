import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const CardLink = ({ disabled, children, className, icon, ...props }) => {
  const classes = classNames(
    {
      'card-pf-link-with-icon': icon,
      disabled
    },
    className
  );

  return (
    <p>
      <a className={classes} {...props}>
        {icon}
        {children}
      </a>
    </p>
  );
};
CardLink.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** card link icon node */
  icon: PropTypes.node,
  /** href prop */
  href: PropTypes.string,
  /** is link prop */
  disabled: PropTypes.bool
};
CardLink.defaultProps = {
  className: '',
  icon: null,
  href: null,
  disabled: false
};
export default CardLink;

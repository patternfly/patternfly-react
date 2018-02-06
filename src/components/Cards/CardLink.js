import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const CardLink = ({ href, children, className, icon, ...props }) => {
  const classes = ClassNames({ 'card-pf-link-with-icon': icon }, className);

  return (
    <p>
      <a href={href} className={classes} {...props}>
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
  href: PropTypes.string
};
CardLink.defaultProps = {
  icon: null
};
export default CardLink;

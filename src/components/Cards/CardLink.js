import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const CardLink = ({ href, children, className, ...props }) => {
  const classes = ClassNames('card-pf-link-with-icon', className);

  return (
    <div>
      <p>
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      </p>
    </div>
  );
};
CardLink.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** href prop */
  href: PropTypes.string
};
export default CardLink;

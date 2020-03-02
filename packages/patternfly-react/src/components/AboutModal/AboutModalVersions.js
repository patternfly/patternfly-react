import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const AboutModalVersions = ({ children, className, ...props }) => {
  const classes = classNames('product-versions-pf', className);

  return (
    <div className={classes} {...props}>
      <ul className="list-unstyled">{children}</ul>
    </div>
  );
};

AboutModalVersions.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

AboutModalVersions.defaultProps = {
  children: null,
  className: ''
};

export default AboutModalVersions;

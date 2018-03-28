import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const AboutModalVersions = ({ children, className, ...rest }) => {
  const classes = classNames('product-versions-pf', className);

  return (
    <div className={classes} {...rest}>
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

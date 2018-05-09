import React from 'react';
import PropTypes from 'prop-types';

const AboutModalVersionItem = ({ className, label, versionText, ...props }) => (
  <li className={className} {...props}>
    <strong>{label}</strong> {versionText}
  </li>
);

AboutModalVersionItem.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Label for the version */
  label: PropTypes.string.isRequired,
  /** Text for the version */
  versionText: PropTypes.string.isRequired
};

AboutModalVersionItem.defaultProps = {
  className: ''
};

export default AboutModalVersionItem;

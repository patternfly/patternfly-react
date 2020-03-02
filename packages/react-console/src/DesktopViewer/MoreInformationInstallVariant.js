import PropTypes from 'prop-types';
import React from 'react';

const MoreInformationInstallVariant = ({ os, content, children }) => (
  <li>
    <div className="more-information-pf-install">
      <b>{os}:</b>
      {content || children}
    </div>
  </li>
);
MoreInformationInstallVariant.propTypes = {
  children: PropTypes.any,

  os: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
MoreInformationInstallVariant.defaultProps = {
  children: null,
  content: null
};

export default MoreInformationInstallVariant;

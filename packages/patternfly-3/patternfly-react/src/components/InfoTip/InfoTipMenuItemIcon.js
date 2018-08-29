import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../Icon';

const InfoTipMenuItemIcon = ({ className, ...props }) => {
  const infoTipMenuItemIconClass = classNames('i', className);

  return <Icon className={infoTipMenuItemIconClass} {...props} />;
};

InfoTipMenuItemIcon.propTypes = {
  type: PropTypes.oneOf(['fa', 'pf']),
  name: PropTypes.string,
  className: PropTypes.string
};

InfoTipMenuItemIcon.defaultProps = {
  type: 'pf',
  name: 'info',
  className: ''
};

export default InfoTipMenuItemIcon;

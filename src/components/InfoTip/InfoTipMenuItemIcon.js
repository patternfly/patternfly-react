import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Icon } from '../Icon';

class InfoTipMenuItemIcon extends React.Component {
  render() {
    const { type, name, className, ...props } = this.props;

    const infoTipMenuItemIconClass = ClassNames('i', className);

    return (
      <Icon
        type={type}
        name={name}
        className={infoTipMenuItemIconClass}
        {...props}
      />
    );
  }
}

InfoTipMenuItemIcon.propTypes = {
  type: PropTypes.oneOf(['fa', 'pf']),
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

InfoTipMenuItemIcon.defaultProps = {
  type: 'pf',
  name: 'info'
};

export default InfoTipMenuItemIcon;

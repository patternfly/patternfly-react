import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const InfoTipMenu = ({
  children,
  className,
  bsRole,
  rootCloseEvent,
  labelledBy, // eslint-disable-line react/prop-types
  pullRight, // eslint-disable-line react/prop-types
  bsClass, // eslint-disable-line react/prop-types
  ...props
}) => {
  const infoTipMenuClass = classNames(
    'dropdown-menu',
    'infotip',
    'bottom-right',
    className
  );
  return (
    <div className={infoTipMenuClass} style={{ padding: '' }} {...props}>
      <div className="arrow" />
      {children}
    </div>
  );
};
InfoTipMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  bsRole: PropTypes.string,
  rootCloseEvent: PropTypes.oneOf(['click', 'mousedown'])
};
InfoTipMenu.defaultProps = {
  bsRole: 'menu',
  className: '',
  rootCloseEvent: 'click'
};

export default InfoTipMenu;

import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

class InfoTipMenu extends React.Component {
  render() {
    const {
      children,
      className,
      bsRole,
      rootCloseEvent,
      labelledBy,
      pullRight,
      bsClass,
      ...props
    } = this.props;

    const infoTipMenuClass = ClassNames(
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
  }
}

InfoTipMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  bsRole: PropTypes.string,
  rootCloseEvent: PropTypes.oneOf(['click', 'mousedown']),
  labelledBy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pullRight: PropTypes.bool,
  bsClass: PropTypes.string
};
InfoTipMenu.defaultProps = {
  bsRole: 'menu'
};
export default InfoTipMenu;

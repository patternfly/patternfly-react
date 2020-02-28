import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// This must be a class component react-bootstrap passes a ref to it.
// eslint-disable-next-line react/prefer-stateless-function
class InfoTipMenu extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    bsRole: PropTypes.string,
    rootCloseEvent: PropTypes.oneOf(['click', 'mousedown'])
  };

  static defaultProps = {
    bsRole: 'menu',
    className: '',
    rootCloseEvent: 'click'
  };

  render() {
    const {
      children,
      className,
      bsRole,
      rootCloseEvent,
      labelledBy, // eslint-disable-line react/prop-types
      pullRight, // eslint-disable-line react/prop-types
      bsClass, // eslint-disable-line react/prop-types
      ...props
    } = this.props;
    const infoTipMenuClass = classNames('dropdown-menu', 'infotip', 'bottom-right', className);

    return (
      <div className={infoTipMenuClass} style={{ padding: '' }} {...props}>
        <div className="arrow" />
        {children}
      </div>
    );
  }
}

export default InfoTipMenu;

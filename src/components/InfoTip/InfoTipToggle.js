import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';

// eslint-disable-next-line react/prefer-stateless-function
class InfoTipToggle extends React.Component {
  render() {
    const { children, className, bsRole, bsClass, open, ...props } = this.props;

    return (
      <a href="#" className={className} aria-expanded={open} {...props}>
        <Icon type="pf" name="info" /> {children}
      </a>
    );
  }
}

InfoTipToggle.propTypes = {
  ...Dropdown.propTypes,
  children: PropTypes.node,
  open: PropTypes.bool,
  className: PropTypes.string
};

InfoTipToggle.defaultProps = {
  bsRole: 'toggle', // eslint-disable-line react/default-props-match-prop-types
  children: null,
  open: false,
  className: ''
};

export default InfoTipToggle;

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';

// Must be a class component react-bootstrap passes a ref to this.
// eslint-disable-next-line react/prefer-stateless-function
class InfoTipToggle extends React.Component {
  static propTypes = {
    ...Dropdown.propTypes,
    children: PropTypes.node,
    open: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    bsRole: 'toggle', // eslint-disable-line react/default-props-match-prop-types
    children: null,
    open: false,
    className: ''
  };

  render() {
    const { bsClass, bsRole, children, open, ...props } = this.props;

    return (
      <a href="#" aria-expanded={open} {...props}>
        <Icon type="pf" name="info" /> {children}
      </a>
    );
  }
}

export default InfoTipToggle;

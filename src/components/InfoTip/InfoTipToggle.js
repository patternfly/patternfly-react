import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';

const InfoTipToggle = ({ bsClass, bsRole, children, open, ...props }) => (
  <a href="#" aria-expanded={open} {...props}>
    <Icon type="pf" name="info" /> {children}
  </a>
);
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

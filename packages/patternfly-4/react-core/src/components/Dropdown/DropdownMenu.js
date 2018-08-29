import React from 'react';
import styles from '@patternfly/patternfly-next/components/Dropdown/styles.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Anything which can be rendered as dropdown items */
  children: PropTypes.node,
  /** Classess applied to root element of dropdown menu */
  className: PropTypes.string,
  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool
};

const defaultProps = {
  children: null,
  className: '',
  isOpen: true
};

const DropdownMenu = ({ className, isOpen, children, ...props }) => (
  <div {...props} className={css(styles.dropdownMenu, className)} role="menu" hidden={!isOpen}>
    {children}
  </div>
);

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;

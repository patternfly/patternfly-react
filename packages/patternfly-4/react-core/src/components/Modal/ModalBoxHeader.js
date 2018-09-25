import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/ModalBox/modal-box.css';

const propTypes = {
  /** content rendered inside the Header */
  children: PropTypes.node,
  /** additional classes added to the button */
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const ModalBoxHeader = ({ children, className, ...props }) => (
  <header {...props} className={css(styles.modalBoxHeader, className)}>
    <h1 className={css(styles.modalBoxHeaderTitle)}>{children}</h1>
  </header>
);

ModalBoxHeader.propTypes = propTypes;
ModalBoxHeader.defaultProps = defaultProps;

export default ModalBoxHeader;

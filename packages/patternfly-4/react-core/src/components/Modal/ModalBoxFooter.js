import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/ModalBox/modal-box.css';
// const styles = {};
const propTypes = {
  /** content rendered inside the Footer */
  children: PropTypes.node,
  /** additional classes added to the Footer */
  className: PropTypes.string
};

const defaultProps = {
  children: null,
  className: ''
};

const ModalBoxFooter = ({ children, className, ...props }) => (
  <div {...props} className={css(styles.modalBoxFooter, className)}>
    {children}
  </div>
);

ModalBoxFooter.propTypes = propTypes;
ModalBoxFooter.defaultProps = defaultProps;

export default ModalBoxFooter;

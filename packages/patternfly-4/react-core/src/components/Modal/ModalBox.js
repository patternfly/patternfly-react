import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/ModalBox/modal-box.css';

const propTypes = {
  /** content rendered inside the ModalBox. */
  children: PropTypes.node.isRequired,
  /** additional classes added to the ModalBox */
  className: PropTypes.string,
  /** Creates a large version of the ModalBox */
  isLarge: PropTypes.bool,
  /** Creates a small version of the ModalBox. */
  isSmall: PropTypes.bool,
  /** string to use for Modal Box label */
  title: PropTypes.string.isRequired,
  /** id to use for Modal Box description */
  id: PropTypes.string.isRequired,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  className: '',
  isLarge: false,
  isSmall: false
};

const ModalBox = ({ children, className, isLarge, isSmall, title, id, ...props }) => (
  <div
    {...props}
    role="dialog"
    aria-label={title}
    aria-describedby={id}
    aria-modal="true"
    className={css(styles.modalBox, className, isLarge && styles.modifiers.lg, isSmall && styles.modifiers.sm )}
  >
    {children}
  </div>
);
ModalBox.propTypes = propTypes;
ModalBox.defaultProps = defaultProps;

export default ModalBox;

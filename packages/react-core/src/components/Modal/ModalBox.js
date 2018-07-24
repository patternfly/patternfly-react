import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/ModalBox/styles.css';

const propTypes = {
  /** content rendered inside the button. */
  children: PropTypes.node.isRequired,
  /** additional classes added to the button */
  className: PropTypes.string,
  /** Creates a large version of the ModalBox */
  isLarge: PropTypes.bool,
  /* Header title used for Modal Box Header */
  title: PropTypes.string.isRequired,
  /** id to use for Modal Box description */
  id: PropTypes.string.isRequired
};

const defaultProps = {
  className: '',
  isLarge: false
};

const ModalBox = ({ children, className, isLarge, title, id, ...props }) => (
  <div
    {...props}
    role="dialog"
    aria-label={title}
    aria-describedby={id}
    aria-modal="true"
    className={css(styles.modalBox, className, isLarge && styles.modifiers.lg)}
  >
    {children}
  </div>
);
ModalBox.propTypes = propTypes;
ModalBox.defaultProps = defaultProps;

export default ModalBox;

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/AboutModalBox/about-modal-box.css';
import { Button, ButtonVariant } from '../Button';
import { TimesIcon } from '@patternfly/react-icons';

const propTypes = {
  /** additional classes added to the About Modal Close button */
  className: PropTypes.string,
  /** A callback for when the close button is clicked */
  onClose: PropTypes.func
};

const defaultProps = {
  className: '',
  onClose: () => undefined
};

const AboutModalBoxCloseButton = ({ className, onClose, ...props }) => (
  <div {...props} className={css(styles.aboutModalBoxClose, className)}>
    <Button variant={ButtonVariant.plain} onClick={onClose} aria-label="Close Dialog">
      <TimesIcon />
    </Button>
  </div>
);

AboutModalBoxCloseButton.propTypes = propTypes;
AboutModalBoxCloseButton.defaultProps = defaultProps;

export default AboutModalBoxCloseButton;

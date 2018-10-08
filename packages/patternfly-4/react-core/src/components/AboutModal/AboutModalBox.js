import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/AboutModalBox/about-modal-box.css';

const propTypes = {
  /** content rendered inside the AboutModelBox. */
  children: PropTypes.node.isRequired,
  /** additional classes added to the AboutModalBox */
  className: PropTypes.string,
  /** id to use for About Modal Box aria-labelledby attribute */
  'aria-labelledby': PropTypes.string.isRequired,
  /** id to use for About Modal Box aria-describedby attribute */
  'aria-describedby': PropTypes.string.isRequired
};

const defaultProps = {
  className: ''
};

const AboutModalBox = ({ children, className, ...props }) => (
  <div {...props} role="dialog" aria-modal="true" className={css(styles.aboutModalBox, className)}>
    {children}
  </div>
);
AboutModalBox.propTypes = propTypes;
AboutModalBox.defaultProps = defaultProps;

export default AboutModalBox;

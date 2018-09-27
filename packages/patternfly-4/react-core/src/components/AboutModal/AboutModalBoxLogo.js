import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/AboutModalBox/about-modal-box.css';

const propTypes = {
  /** additional classes added to the About Modal Hero */
  className: PropTypes.string,
  /** the URL of the image for the Hero. */
  src: PropTypes.string.isRequired,
  /** the alternate text of the Hero image. */
  alt: PropTypes.string.isRequired
};

const defaultProps = {
  className: ''
};

const AboutModalBoxHero = ({ className, src, alt, ...props }) => (
  <div {...props} className={css(styles.aboutModalBoxLogo, className)}>
    <img className={css(styles.aboutModalBoxLogoImage)} src={src} alt={alt} />
  </div>
);

AboutModalBoxHero.propTypes = propTypes;
AboutModalBoxHero.defaultProps = defaultProps;

export default AboutModalBoxHero;

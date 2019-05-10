import React from 'react';
import { css } from '@patternfly/react-styles';
import { c_about_modal_box__hero_sm_BackgroundImage } from '@patternfly/react-tokens'
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';

const propTypes = {
  /** additional classes added to the About Modal Hero */
  className: PropTypes.string,
  /** background image data or file path */
  backgroundImageSrc: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  className: ''
};

const AboutModalBoxHero = ({ className, backgroundImageSrc, ...props }) => {
  const bgStyle = (backgroundImageSrc !== '') ? {
    [c_about_modal_box__hero_sm_BackgroundImage.name]: `url(${backgroundImageSrc})`
  } : {};
  return (
    <div {...props} style={bgStyle} className={css(styles.aboutModalBoxHero, className)} />
  )
};

AboutModalBoxHero.propTypes = propTypes;
AboutModalBoxHero.defaultProps = defaultProps;

export default AboutModalBoxHero;

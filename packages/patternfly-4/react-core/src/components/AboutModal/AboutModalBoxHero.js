import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/AboutModalBox/about-modal-box.css';

const propTypes = {
  /** additional classes added to the About Modal Hero */
  className: PropTypes.string,
  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};

const defaultProps = {
  className: ''
};

const AboutModalBoxHero = ({ className, ...props }) => (
  <div {...props} className={css(styles.aboutModalBoxHero, className)} />
);

AboutModalBoxHero.propTypes = propTypes;
AboutModalBoxHero.defaultProps = defaultProps;

export default AboutModalBoxHero;

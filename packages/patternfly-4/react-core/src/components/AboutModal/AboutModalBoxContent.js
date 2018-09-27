import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/AboutModalBox/about-modal-box.css';

const propTypes = {
  /** content rendered inside the AboutModalBoxContent */
  children: PropTypes.node.isRequired,
  /** additional classes added to the AboutModalBoxContent */
  className: PropTypes.string,
  /** id to use for About Modal Box aria described by */
  id: PropTypes.string.isRequired
};

const defaultProps = {
  className: ''
};

const AboutModalBoxContent = ({ children, className, id, ...props }) => (
  <div {...props} className={css(styles.aboutModalBoxContent, className)} id={id}>
    {children}
  </div>
);

AboutModalBoxContent.propTypes = propTypes;
AboutModalBoxContent.defaultProps = defaultProps;

export default AboutModalBoxContent;

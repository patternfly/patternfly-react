import React from 'react';
import styles from '@patternfly/patternfly-next/components/Avatar/styles.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string.isRequired
};

const defaultProps = {
  /** Additional classes added to the Avatar. */
  className: '',
  /** Attribute that specifies the URL of the image for the Avatar. */
  src: ''
};

const Avatar = ({ className, src, alt, ...props }) => (
  <img {...props} className={css(styles.avatar, className)} src={src} alt={alt} />
);

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;

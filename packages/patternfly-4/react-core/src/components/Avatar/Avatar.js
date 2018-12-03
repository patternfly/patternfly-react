import React from 'react';
import styles from '@patternfly/patternfly-next/components/Avatar/avatar.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Additional classes added to the Avatar. */
  className: PropTypes.string,
  /** Attribute that specifies the URL of the image for the Avatar. */
  src: PropTypes.string,
  /** Attribute that specifies the alt text of the image for the Avatar. */
  alt: PropTypes.string.isRequired
};

const defaultProps = {
  className: '',
  src: ''
};

const Avatar = ({ className, src, alt, ...props }) => (
  <img {...props} className={css(styles.avatar, className)} src={src} alt={alt} />
);

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;

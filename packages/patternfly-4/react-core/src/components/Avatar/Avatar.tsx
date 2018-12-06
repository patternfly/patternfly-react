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

/**
 * Column properties.
 */
export interface IAvatarProps {
  /** Additional classes added to the Avatar. */
  className?: string;
  /** Attribute that specifies the URL of the image for the Avatar. */
  src?: string;
  /** Attribute that specifies the alt text of the image for the Avatar. */
  alt: string
}

const Avatar:React.SFC<IAvatarProps> = (props) => (
  <img {...props} className={css(styles.avatar, props.className)} src={props.src} alt={props.alt} />
);

Avatar.defaultProps = defaultProps;

export default Avatar;

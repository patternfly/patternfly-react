import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import styles from '@patternfly/patternfly-next/components/Avatar/avatar.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const defaultProps = {
  className: '',
  src: ''
};

const propTypes = {
  /** Additional classes added to the Avatar. */
  className: PropTypes.string,
  /** Attribute that specifies the URL of the image for the Avatar. */
  src: PropTypes.string,
  /** Attribute that specifies the alt text of the image for the Avatar. */
  alt: PropTypes.string.isRequired
};

/**
 * Column properties.
 */
export interface AvatarProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>{
  /** Additional classes added to the Avatar. */
  className?: string;
  /** Attribute that specifies the URL of the image for the Avatar. */
  src?: string;
  /** Attribute that specifies the alt text of the image for the Avatar. */
  alt: string;
}

const Avatar:React.SFC<AvatarProps> = (props) => (
  <img {...props} className={css(styles.avatar, props.className)} />
);

Avatar.defaultProps = defaultProps;

export default Avatar;

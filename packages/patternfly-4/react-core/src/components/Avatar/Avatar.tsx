import * as React from 'react';
import * as styles from '@patternfly/patternfly-next/components/Avatar/avatar.css';
import { css } from '@patternfly/react-styles';
import * as PropTypes from 'prop-types';

let _styles: any = styles;

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
  <img {...props} className={css(_styles.avatar, className)} src={src} alt={alt} />
);

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;

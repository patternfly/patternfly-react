import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

const propTypes = {
  /** Additional classes added to the Brand. */
  className: PropTypes.string,
  /** Attribute that specifies the URL of the image for the Brand. */
  src: PropTypes.string,
  /** Attribute that specifies the alt text of the image for the Brand. */
  alt: PropTypes.string.isRequired
};

const defaultProps = {
  className: '',
  src: ''
};

const Brand = ({ className, src, alt, ...props }) => (
  /** the brand component currently contains no styling
   the 'pf-c-brand' string will be used for the className */
  <img {...props} className={css('pf-c-brand', className)} src={src} alt={alt} />
);

Brand.propTypes = propTypes;
Brand.defaultProps = defaultProps;

export default Brand;

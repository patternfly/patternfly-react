import React from 'react';
import PropTypes from 'prop-types';

import { css, StyleSheet } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/BackgroundImage/background-image.css';

/* eslint-disable camelcase */
import {
  c_background_image_BackgroundImage,
  c_background_image_BackgroundImage_2x,
  c_background_image_BackgroundImage_sm,
  c_background_image_BackgroundImage_sm_2x,
  c_background_image_BackgroundImage_lg
} from '@patternfly/react-tokens';

export const BackgroundImageSrc = {
  xs: 'xs',
  xs2x: 'xs2x',
  sm: 'sm',
  sm2x: 'sm2x',
  lg: 'lg',
  filter: 'filter'
};

const variableMap = {
  [BackgroundImageSrc.xs]: c_background_image_BackgroundImage && c_background_image_BackgroundImage.name,
  [BackgroundImageSrc.xs2x]: c_background_image_BackgroundImage_2x && c_background_image_BackgroundImage_2x.name,
  [BackgroundImageSrc.sm]: c_background_image_BackgroundImage_sm && c_background_image_BackgroundImage_sm.name,
  [BackgroundImageSrc.sm2x]: c_background_image_BackgroundImage_sm_2x && c_background_image_BackgroundImage_sm_2x.name,
  [BackgroundImageSrc.lg]: c_background_image_BackgroundImage_lg && c_background_image_BackgroundImage_lg.name
};

export const propTypes = {
  /** Additional classes added to the background. */
  className: PropTypes.string,
  /** Override image styles using a string or BackgroundImageSrc */
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      xs: PropTypes.string,
      xs2x: PropTypes.string,
      sm: PropTypes.string,
      sm2x: PropTypes.string,
      lg: PropTypes.string,
      filter: PropTypes.string
    })
  ]).isRequired
};

export const defaultProps = {
  className: ''
};

const BackgroundImage = ({ className, src, ...props }) => {
  // Default string value to handle all sizes
  const variableOverrides =
    typeof src === 'string'
      ? Object.keys(BackgroundImageSrc).reduce(
          (prev, size) => ({
            ...prev,
            [BackgroundImageSrc[size]]: src
          }),
          {}
        )
      : src;

  const bgStyles = StyleSheet.create({
    bgOverrides: `&.pf-c-background-image {
      ${Object.keys(variableOverrides).reduce(
        (prev, size) => `${prev.length ? prev : ''}${variableMap[size]}: url('${variableOverrides[size]}');`,
        {}
      )}
    }`
    });

  return (
    <div className={css(styles.backgroundImage, bgStyles.bgOverrides, className)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="svg-filter">
        <filter id="image_overlay" width="100%">
          <feColorMatrix type="matrix"
            values="1 0 0 0 0
                  1 0 0 0 0
                  1 0 0 0 0
                  0 0 0 1 0" />
    
        <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
          <feFuncR type="table" tableValues="0.086274509803922 0.43921568627451"></feFuncR>
          <feFuncG type="table" tableValues="0.086274509803922 0.43921568627451"></feFuncG>
          <feFuncB type="table" tableValues="0.086274509803922 0.43921568627451"></feFuncB>
          <feFuncA type="table" tableValues="0 1"></feFuncA>
        </feComponentTransfer> 
      </filter>
    </svg>
    </div>
  );
};

BackgroundImage.propTypes = propTypes;
BackgroundImage.defaultProps = defaultProps;
export default BackgroundImage;

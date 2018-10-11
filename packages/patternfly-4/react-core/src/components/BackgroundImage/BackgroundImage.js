import React from 'react';
import PropTypes from 'prop-types';

import { css, StyleSheet } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly-next/components/BackgroundImage/background-image.css';

/* eslint-disable camelcase */
import {
  c_background_image_BackgroundImage_lg,
  c_background_image_BackgroundImage_md,
  c_background_image_BackgroundImage_md_2x,
  c_background_image_BackgroundImage_sm,
  c_background_image_BackgroundImage_sm_2x,
  c_background_image_BackgroundImage_xl,
  c_background_image_BackgroundImage_xs,
  c_background_image_BackgroundImage_xs_2x,
  c_background_image_Filter
} from '@patternfly/react-tokens';

export const BackgroundImageSrc = {
  lg: 'lg',
  md: 'md',
  md2x: 'md2x',
  sm: 'sm',
  sm2x: 'sm2x',
  xl: 'xl',
  xs: 'xs',
  xs2x: 'xs2x',
  filter: 'filter'
};

const variableMap = {
  [BackgroundImageSrc.lg]: c_background_image_BackgroundImage_lg && c_background_image_BackgroundImage_lg.name,
  [BackgroundImageSrc.md]: c_background_image_BackgroundImage_md && c_background_image_BackgroundImage_md.name,
  [BackgroundImageSrc.md2x]: c_background_image_BackgroundImage_md_2x && c_background_image_BackgroundImage_md_2x.name,
  [BackgroundImageSrc.sm]: c_background_image_BackgroundImage_sm && c_background_image_BackgroundImage_sm.name,
  [BackgroundImageSrc.sm2x]: c_background_image_BackgroundImage_sm_2x && c_background_image_BackgroundImage_sm_2x.name,
  [BackgroundImageSrc.xl]: c_background_image_BackgroundImage_xl && c_background_image_BackgroundImage_xl.name,
  [BackgroundImageSrc.xs]: c_background_image_BackgroundImage_xs && c_background_image_BackgroundImage_xs.name,
  [BackgroundImageSrc.xs2x]: c_background_image_BackgroundImage_xs_2x && c_background_image_BackgroundImage_xs_2x.name,
  [BackgroundImageSrc.filter]: c_background_image_Filter && c_background_image_Filter.name
};

export const propTypes = {
  /** Additional classes added to the background. */
  className: PropTypes.string,
  /** Override image styles using a string or BackgroundImageSrc */
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      lg: PropTypes.string,
      md: PropTypes.string,
      md2x: PropTypes.string,
      sm: PropTypes.string,
      sm2x: PropTypes.string,
      xl: PropTypes.string,
      xs: PropTypes.string,
      xs2x: PropTypes.string,
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

  return <div className={css(styles.backgroundImage, bgStyles.bgOverrides, className)} />;
};

BackgroundImage.propTypes = propTypes;
BackgroundImage.defaultProps = defaultProps;
export default BackgroundImage;

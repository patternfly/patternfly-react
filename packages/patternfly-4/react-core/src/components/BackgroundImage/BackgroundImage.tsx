import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';

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

export enum BackgroundImageSrc {
  xs = 'xs',
  xs2x = 'xs2x',
  sm = 'sm',
  sm2x = 'sm2x',
  lg = 'lg',
  filter = 'filter'
};

const variableMap = {
  [BackgroundImageSrc.xs]: c_background_image_BackgroundImage && c_background_image_BackgroundImage.name,
  [BackgroundImageSrc.xs2x]: c_background_image_BackgroundImage_2x && c_background_image_BackgroundImage_2x.name,
  [BackgroundImageSrc.sm]: c_background_image_BackgroundImage_sm && c_background_image_BackgroundImage_sm.name,
  [BackgroundImageSrc.sm2x]: c_background_image_BackgroundImage_sm_2x && c_background_image_BackgroundImage_sm_2x.name,
  [BackgroundImageSrc.lg]: c_background_image_BackgroundImage_lg && c_background_image_BackgroundImage_lg.name
};

export type BackgroundImageSrcMap = { [K in keyof typeof BackgroundImageSrc]: string };

export interface BackgroundImageProps extends Omit<React.HTMLProps<HTMLDivElement>, 'src'> {
  /** Additional classes added to the background. */
  className?: string; 
  /** Override image styles using a string or BackgroundImageSrc */
  src: string | BackgroundImageSrcMap; 
};

export const BackgroundImage: React.FunctionComponent<BackgroundImageProps> = ({
  className = '', 
  src,
  ...props
}: BackgroundImageProps) => {
   // Default string value to handle all sizes
   const variableOverrides = typeof src === 'string'
     ? Object.keys(BackgroundImageSrc).reduce(
         (prev: any, size: string) => ({
           ...prev,
           [BackgroundImageSrc[size as keyof typeof BackgroundImageSrc]]: src
         }),
         {}
       )
     : src;

  const bgStyles = StyleSheet.create({
    bgOverrides: `&.pf-c-background-image {
      ${Object.keys(variableOverrides).reduce(
        (prev: any, size: string) => `${prev.length ? prev : ''}${variableMap[size as keyof typeof variableMap]}: url('${variableOverrides[size as keyof typeof variableOverrides]}');`,
        {}
      )}
    }`
    });
  return (
    <div className={css(styles.backgroundImage, bgStyles.bgOverrides, className)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="pf-c-background-image__filter" width="0" height="0">
        <filter id="image_overlay" width="">
          <feColorMatrix type="matrix"
            values="1 0 0 0 0
            1 0 0 0 0
            1 0 0 0 0
            0 0 0 1 0" />
          <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
            <feFuncR type="table" tableValues="0.086274509803922 0.43921568627451" />
            <feFuncG type="table" tableValues="0.086274509803922 0.43921568627451" />
            <feFuncB type="table" tableValues="0.086274509803922 0.43921568627451" />
            <feFuncA type="table" tableValues="0 1" />
          </feComponentTransfer>
        </filter>
      </svg>
    </div>
  );
};

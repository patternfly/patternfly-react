import * as React from 'react';
import { Omit } from '../../helpers/typeUtils';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/BackgroundImage/background-image';

export enum BackgroundImageSrc {
  xs = 'xs',
  xs2x = 'xs2x',
  sm = 'sm',
  sm2x = 'sm2x',
  lg = 'lg',
  filter = 'filter'
}

export interface BackgroundImageSrcMap {
  xs: string;
  xs2x: string;
  sm: string;
  sm2x: string;
  lg: string;
  filter?: string;
}

export interface BackgroundImageProps extends Omit<React.HTMLProps<HTMLDivElement>, 'src'> {
  /** Additional classes added to the background. */
  className?: string;
  /** Override image styles using a string or BackgroundImageSrc */
  src: string | BackgroundImageSrcMap;
}

export const BackgroundImage: React.FunctionComponent<BackgroundImageProps> = ({
  className = '',
  ...props
}: BackgroundImageProps) => (
  <div className={css(styles.backgroundImage, className)} {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" className="pf-c-background-image__filter" width="0" height="0">
      <filter id="image_overlay">
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0
          1 0 0 0 0
          1 0 0 0 0
          0 0 0 1 0"
        />
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

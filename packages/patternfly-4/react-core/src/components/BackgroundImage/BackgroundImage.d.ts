import { FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export const BackgroundImageSrc: {
  xs: 'xs';
  xs2x: 'xs2x';
  sm: 'sm';
  sm2x: 'sm2x';
  lg: 'lg';
  filter: 'filter';
};

export type BackgroundImageSrcMap = { [K in keyof typeof BackgroundImageSrc]: string };

export interface BackgroundImageProps extends Omit<HTMLProps<HTMLDivElement>, 'src'> {
  src: string | BackgroundImageSrcMap;
}

declare const BackgroundImage: FunctionComponent<BackgroundImageProps>;

export default BackgroundImage;

import { SFC, HTMLProps, ReactNode } from 'react';

export interface BackgroundImageProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

declare const BackgroundImage: SFC<BackgroundImageProps>;

export default BackgroundImage;

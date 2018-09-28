import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../typeUtils';

export interface BrandProps extends HTMLProps<HTMLImageElement> {
  src?: string;
  alt: string;
}
declare const Brand: SFC<BrandProps>;
export default Brand;

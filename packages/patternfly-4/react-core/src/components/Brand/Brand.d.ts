import { FunctionComponent, HTMLProps } from 'react';

export interface BrandProps extends HTMLProps<HTMLImageElement> {
  src?: string;
  alt: string;
}
declare const Brand: FunctionComponent<BrandProps>;
export default Brand;

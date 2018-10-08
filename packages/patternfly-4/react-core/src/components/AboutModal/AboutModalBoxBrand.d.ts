import { SFC, HTMLProps } from 'react';

export interface AboutMoalBoxBrandProps extends HTMLProps<HTMLImageElement> {
  src?: string;
  alt: string;
}
declare const AboutMoalBoxBrand: SFC<AboutMoalBoxBrandProps>;
export default AboutMoalBoxBrand;

import { SFC, HTMLProps } from 'react';

export interface AboutMoalBoxHeroProps extends HTMLProps<HTMLImageElement> {
  src?: string;
  alt: string;
}
declare const AboutMoalBoxHero: SFC<AboutMoalBoxHeroProps>;
export default AboutMoalBoxHero;

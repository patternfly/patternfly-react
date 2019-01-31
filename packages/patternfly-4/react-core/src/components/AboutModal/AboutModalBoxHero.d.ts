import { FunctionComponent, HTMLProps } from 'react';

export interface AboutMoalBoxHeroProps extends HTMLProps<HTMLImageElement> {
  src?: string;
  alt: string;
}
declare const AboutMoalBoxHero: FunctionComponent<AboutMoalBoxHeroProps>;
export default AboutMoalBoxHero;

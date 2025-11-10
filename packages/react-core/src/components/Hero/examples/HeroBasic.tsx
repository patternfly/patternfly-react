import { Hero, HeroBody } from '@patternfly/react-core';

export const HeroBasic: React.FunctionComponent = () => (
  <Hero gradientLight={{ stop1: '#ff0000', stop2: '#00ff00', stop3: '#0000ff' }}>
    <HeroBody>The (super)hero content.</HeroBody>
  </Hero>
);

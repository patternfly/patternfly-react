import React from 'react';
import { Banner } from '@patternfly/react-core';

export const BannerBasic: React.FunctionComponent = () => (
  <>
    <Banner>Default banner</Banner>
    <br />
    <Banner color="red">Red banner</Banner>
    <br />
    <Banner color="orangered">Orangered banner</Banner>
    <br />
    <Banner color="orange">Orange banner</Banner>
    <br />
    <Banner color="yellow">Yellow banner</Banner>
    <br />
    <Banner color="green">Green banner</Banner>
    <br />
    <Banner color="teal">Teal banner</Banner>
    <br />
    <Banner color="blue">Blue banner</Banner>
    <br />
    <Banner color="purple">Purple banner</Banner>
  </>
);

import React from 'react';
import { Banner } from '@patternfly/react-core';

export const BannerBasic: React.FunctionComponent = () => (
  <>
    <Banner>Default banner</Banner>
    <br />
    <Banner variant="blue">Blue banner</Banner>
    <br />
    <Banner variant="red">Red banner</Banner>
    <br />
    <Banner variant="green">Green banner</Banner>
    <br />
    <Banner variant="gold">Gold banner</Banner>
  </>
);

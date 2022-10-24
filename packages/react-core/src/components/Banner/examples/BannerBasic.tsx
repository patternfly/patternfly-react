import React from 'react';
import { Banner } from '@patternfly/react-core';

export const BannerBasic: React.FunctionComponent = () => (
  <>
    <Banner>Default banner</Banner>
    <br />
    <Banner variant="info">Blue banner</Banner>
    <br />
    <Banner variant="danger">Red banner</Banner>
    <br />
    <Banner variant="success">Green banner</Banner>
    <br />
    <Banner variant="warning">Gold banner</Banner>
  </>
);

import React from 'react';
import { Banner } from '@patternfly/react-core';

export const BannerStatus: React.FunctionComponent = () => (
  <>
    <Banner hasStatusIcon>Default banner</Banner>
    <br />
    <Banner hasStatusIcon variant="info">
      Info banner
    </Banner>
    <br />
    <Banner hasStatusIcon variant="danger">
      Danger banner
    </Banner>
    <br />
    <Banner hasStatusIcon variant="success">
      Success banner
    </Banner>
    <br />
    <Banner hasStatusIcon variant="warning">
      Warning banner
    </Banner>
  </>
);

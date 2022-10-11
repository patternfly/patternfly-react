import React from 'react';
import { Banner } from '@patternfly/react-core';

export const BannerBasic: React.FunctionComponent = () => (
  <>
    <Banner screenReaderText={null}>Default banner</Banner>
    <br />
    <Banner screenReaderText={null} variant="info">
      Blue banner
    </Banner>
    <br />
    <Banner screenReaderText={null} variant="danger">
      Red banner
    </Banner>
    <br />
    <Banner screenReaderText={null} variant="success">
      Green banner
    </Banner>
    <br />
    <Banner screenReaderText={null} variant="warning">
      Gold banner
    </Banner>
  </>
);

import React from 'react';
import { Banner, Flex } from '@patternfly/react-core';

export const BannerBasic: React.FunctionComponent = () => (
  <Flex direction={{ default: 'column' }}>
    <Banner>Default banner</Banner>
    <Banner variant="info">Info banner</Banner>
    <Banner variant="danger">Danger banner</Banner>
    <Banner variant="success">Success banner</Banner>
    <Banner variant="warning">Warning banner</Banner>
  </Flex>
);

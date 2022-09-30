import React from 'react';
import { Title } from '@patternfly/react-core';

export const TitleDefaultSizes: React.FunctionComponent = () => (
  <React.Fragment>
    <Title headingLevel="h1">h1 defaults to 2xl</Title>
    <Title headingLevel="h2">h2 defaults to xl</Title>
    <Title headingLevel="h3">h3 defaults to lg</Title>
    <Title headingLevel="h4">h4 defaults to md</Title>
    <Title headingLevel="h5">h5 defaults to md</Title>
    <Title headingLevel="h6">h6 defaults to md</Title>
  </React.Fragment>
);

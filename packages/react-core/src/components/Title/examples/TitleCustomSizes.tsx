import React from 'react';
import { Title, TitleSizes } from '@patternfly/react-core';

export const TitleCustomSizes: React.FunctionComponent = () => (
  <React.Fragment>
    <Title headingLevel="h1" size={TitleSizes['4xl']}>
      h1 as 4xl
    </Title>
    <Title headingLevel="h2" size="3xl">
      h2 as 3xl
    </Title>
    <Title headingLevel="h3" size={TitleSizes['2xl']}>
      h3 as 2xl
    </Title>
    <Title headingLevel="h4" size="xl">
      h4 as xl
    </Title>
    <Title headingLevel="h5" size={TitleSizes.lg}>
      h5 as lg
    </Title>
    <Title headingLevel="h6" size="md">
      h6 as md Title
    </Title>
  </React.Fragment>
);

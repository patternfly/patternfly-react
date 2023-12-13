import React from 'react';
import { Title, TitleSizes } from '@patternfly/react-core';

export const TitleCustomSizes: React.FunctionComponent = () => (
  <React.Fragment>
    <Title headingLevel="h1" size={TitleSizes['4xl']}>
      4xl title
    </Title>
    <Title headingLevel="h2" size="3xl">
      3xl title
    </Title>
    <Title headingLevel="h3" size={TitleSizes['2xl']}>
      2xl title
    </Title>
    <Title headingLevel="h4" size="xl">
      xl title
    </Title>
    <Title headingLevel="h5" size={TitleSizes.lg}>
      lg title
    </Title>
    <Title headingLevel="h6" size="md">
      md title
    </Title>
  </React.Fragment>
);

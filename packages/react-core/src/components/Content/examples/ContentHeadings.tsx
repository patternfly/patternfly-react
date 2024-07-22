import React from 'react';
import { Content, ContentVariants } from '@patternfly/react-core';

export const ContentHeadings: React.FunctionComponent = () => (
  <>
    <Content component={ContentVariants.h1}>Hello World</Content>
    <Content component={ContentVariants.h2}>Second level</Content>
    <Content component={ContentVariants.h3}>Third level</Content>
    <Content component={ContentVariants.h4}>Fourth level</Content>
    <Content component={ContentVariants.h5}>Fifth level</Content>
    <Content component={ContentVariants.h6}>Sixth level</Content>
  </>
);

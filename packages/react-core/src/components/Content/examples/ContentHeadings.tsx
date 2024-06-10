import React from 'react';
import { Content } from '@patternfly/react-core';

export const ContentHeadings: React.FunctionComponent = () => (
  <>
    <Content component="h1">Hello World</Content>
    <Content component="h2">Second level</Content>
    <Content component="h3">Third level</Content>
    <Content component="h4">Fourth level</Content>
    <Content component="h5">Fifth level</Content>
    <Content component="h6">Sixth level</Content>
  </>
);

import React from 'react';
import { Content, ContentVariants } from '@patternfly/react-core';

export const ContentDescriptionList: React.FunctionComponent = () => (
  <Content component={ContentVariants.dl}>
    <Content component={ContentVariants.dt}>Web</Content>
    <Content component={ContentVariants.dd}>The part of the Internet that contains websites and web pages</Content>
    <Content component={ContentVariants.dt}>HTML</Content>
    <Content component={ContentVariants.dd}>A markup language for creating web pages</Content>
    <Content component={ContentVariants.dt}>CSS</Content>
    <Content component={ContentVariants.dd}>A technology to make HTML look better</Content>
  </Content>
);

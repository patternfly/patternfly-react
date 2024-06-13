import React from 'react';
import { Content } from '@patternfly/react-core';

export const ContentDescriptionList: React.FunctionComponent = () => (
  <Content component="dl">
    <Content component="dt">Web</Content>
    <Content component="dd">The part of the Internet that contains websites and web pages</Content>
    <Content component="dt">HTML</Content>
    <Content component="dd">A markup language for creating web pages</Content>
    <Content component="dt">CSS</Content>
    <Content component="dd">A technology to make HTML look better</Content>
  </Content>
);

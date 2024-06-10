import React from 'react';
import { Content } from '@patternfly/react-core';

export const ContentDescriptionList: React.FunctionComponent = () => (
  <Content component="dl">
    <dt>Web</dt>
    <dd>The part of the Internet that contains websites and web pages</dd>
    <dt>HTML</dt>
    <dd>A markup language for creating web pages</dd>
    <dt>CSS</dt>
    <dd>A technology to make HTML look better</dd>
  </Content>
);

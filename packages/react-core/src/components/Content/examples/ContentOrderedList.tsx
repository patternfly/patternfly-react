import React from 'react';
import { Content, ContentVariants } from '@patternfly/react-core';

export const ContentOrderedList: React.FunctionComponent = () => (
  <Content component={ContentVariants.ol}>
    <Content>Donec blandit a lorem id convallis.</Content>
    <Content>Cras gravida arcu at diam gravida gravida.</Content>
    <Content>Integer in volutpat libero.</Content>
    <Content>Donec a diam tellus.</Content>
    <Content>Aenean nec tortor orci.</Content>
    <Content>Quisque aliquam cursus urna, non bibendum massa viverra eget.</Content>
    <Content>Vivamus maximus ultricies pulvinar.</Content>
  </Content>
);

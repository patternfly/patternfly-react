import React from 'react';
import { Content } from '@patternfly/react-core';

export const ContentOrderedList: React.FunctionComponent = () => (
  <Content component="ol">
    <Content component="li">Donec blandit a lorem id convallis.</Content>
    <Content component="li">Cras gravida arcu at diam gravida gravida.</Content>
    <Content component="li">Integer in volutpat libero.</Content>
    <Content component="li">Donec a diam tellus.</Content>
    <Content component="li">Aenean nec tortor orci.</Content>
    <Content component="li">Quisque aliquam cursus urna, non bibendum massa viverra eget.</Content>
    <Content component="li">Vivamus maximus ultricies pulvinar.</Content>
  </Content>
);

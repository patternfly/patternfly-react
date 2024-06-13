import React from 'react';
import { Content } from '@patternfly/react-core';

export const ContentPlainList: React.FunctionComponent = () => (
  <>
    <Content component="h3">Plain unordered list</Content>
    <Content component="ul" isPlainList>
      <Content component="li">In fermentum leo eu lectus mollis, quis dictum mi aliquet.</Content>
      <Content component="li">Morbi eu nulla lobortis, lobortis est in, fringilla felis.</Content>
      <Content component="li">Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</Content>
      <Content component="li">Ut non enim metus.</Content>
    </Content>
    <Content component="h3">Plain ordered list</Content>
    <Content component="ol" isPlainList>
      <Content component="li">Donec blandit a lorem id convallis.</Content>
      <Content component="li">Cras gravida arcu at diam gravida gravida.</Content>
      <Content component="li">Integer in volutpat libero.</Content>
      <Content component="li">Donec a diam tellus.</Content>
      <Content component="li">Aenean nec tortor orci.</Content>
      <Content component="li">Quisque aliquam cursus urna, non bibendum massa viverra eget.</Content>
      <Content component="li">Vivamus maximus ultricies pulvinar.</Content>
    </Content>
  </>
);

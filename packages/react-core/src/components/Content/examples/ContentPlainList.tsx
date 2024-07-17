import React from 'react';
import { Content, ContentVariants } from '@patternfly/react-core';

export const ContentPlainList: React.FunctionComponent = () => (
  <>
    <Content component={ContentVariants.h3}>Plain unordered list</Content>
    <Content isPlainList>
      <Content>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</Content>
      <Content>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</Content>
      <Content>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</Content>
      <Content>Ut non enim metus.</Content>
    </Content>
    <Content component={ContentVariants.h3}>Plain ordered list</Content>
    <Content component={ContentVariants.ol} isPlainList>
      <Content>Donec blandit a lorem id convallis.</Content>
      <Content>Cras gravida arcu at diam gravida gravida.</Content>
      <Content>Integer in volutpat libero.</Content>
      <Content>Donec a diam tellus.</Content>
      <Content>Aenean nec tortor orci.</Content>
      <Content>Quisque aliquam cursus urna, non bibendum massa viverra eget.</Content>
      <Content>Vivamus maximus ultricies pulvinar.</Content>
    </Content>
  </>
);

import React from 'react';
import { Content, ContentVariants } from '@patternfly/react-core';

export const ContentPlainList: React.FunctionComponent = () => (
  <>
    <Content component={ContentVariants.h3}>Plain unordered list</Content>
    <Content component={ContentVariants.ul} isPlainList>
      <Content component={ContentVariants.li}>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</Content>
      <Content component={ContentVariants.li}>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</Content>
      <Content component={ContentVariants.li}>
        Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
      </Content>
      <Content component={ContentVariants.li}>Ut non enim metus.</Content>
    </Content>
    <Content component={ContentVariants.h3}>Plain ordered list</Content>
    <Content component={ContentVariants.ol} isPlainList>
      <Content component={ContentVariants.li}>Donec blandit a lorem id convallis.</Content>
      <Content component={ContentVariants.li}>
        {' '}
        component={ContentVariants.li}Cras gravida arcu at diam gravida gravida.
      </Content>
      <Content component={ContentVariants.li}>Integer in volutpat libero.</Content>
      <Content component={ContentVariants.li}>Aenean nec tortor orci.</Content>
      <Content component={ContentVariants.li}>Quisque aliquam cursus urna, non bibendum massa viverra eget.</Content>
      <Content component={ContentVariants.li}>Vivamus maximus ultricies pulvinar.</Content>
    </Content>
  </>
);

import React from 'react';
import { Content, ContentVariants } from '@patternfly/react-core';

export const ContentUnorderedList: React.FunctionComponent = () => (
  <Content component={ContentVariants.ul}>
    <Content component={ContentVariants.li}>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</Content>
    <Content component={ContentVariants.li}>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</Content>
    <Content component={ContentVariants.li}>
      Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
      <Content component={ContentVariants.ul}>
        <Content component={ContentVariants.li}>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</Content>
        <Content component={ContentVariants.li}>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</Content>
      </Content>
    </Content>
    <Content component={ContentVariants.li}>Ut non enim metus.</Content>
  </Content>
);

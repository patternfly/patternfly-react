import React from 'react';
import { Content } from '@patternfly/react-core';

export const ContentUnorderedList: React.FunctionComponent = () => (
  <Content component="ul">
    <Content component="li">In fermentum leo eu lectus mollis, quis dictum mi aliquet.</Content>
    <Content component="li">Morbi eu nulla lobortis, lobortis est in, fringilla felis.</Content>
    <Content component="li">
      Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
      <Content component="ul">
        <Content component="li">In fermentum leo eu lectus mollis, quis dictum mi aliquet.</Content>
        <Content component="li">Morbi eu nulla lobortis, lobortis est in, fringilla felis.</Content>
      </Content>
    </Content>
    <Content component="li">Ut non enim metus.</Content>
  </Content>
);

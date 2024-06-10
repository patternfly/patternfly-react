import React from 'react';
import { Content } from '@patternfly/react-core';

export const ContentPlainList: React.FunctionComponent = () => (
  <>
    <Content component="h3">Plain unordered list</Content>
    <Content component="ul" isPlainList>
      <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
      <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
      <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
      <li>Ut non enim metus.</li>
    </Content>
    <Content component="h3">Plain ordered list</Content>
    <Content component="ol" isPlainList>
      <li>Donec blandit a lorem id convallis.</li>
      <li>Cras gravida arcu at diam gravida gravida.</li>
      <li>Integer in volutpat libero.</li>
      <li>Donec a diam tellus.</li>
      <li>Aenean nec tortor orci.</li>
      <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
      <li>Vivamus maximus ultricies pulvinar.</li>
    </Content>
  </>
);

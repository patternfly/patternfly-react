import React from 'react';
import { Content } from '@patternfly/react-core';

export const ContentUnorderedList: React.FunctionComponent = () => (
  <Content component="ul">
    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
    <li>
      Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
      </ul>
    </li>
    <li>Ut non enim metus.</li>
  </Content>
);

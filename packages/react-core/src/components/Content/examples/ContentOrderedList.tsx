import React from 'react';
import { Content } from '@patternfly/react-core';

export const ContentOrderedList: React.FunctionComponent = () => (
  <Content component="ol">
    <li>Donec blandit a lorem id convallis.</li>
    <li>Cras gravida arcu at diam gravida gravida.</li>
    <li>Integer in volutpat libero.</li>
    <li>Donec a diam tellus.</li>
    <li>Aenean nec tortor orci.</li>
    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
    <li>Vivamus maximus ultricies pulvinar.</li>
  </Content>
);

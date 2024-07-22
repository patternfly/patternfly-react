import React from 'react';
import { Content, ContentVariants } from '@patternfly/react-core';

export const ContentOrderedList: React.FunctionComponent = () => (
  <Content component={ContentVariants.ol}>
    <Content component={ContentVariants.li}>Donec blandit a lorem id convallis.</Content>
    <Content component={ContentVariants.li}>Cras gravida arcu at diam gravida gravida.</Content>
    <Content component={ContentVariants.li}>Integer in volutpat libero.</Content>
    <Content component={ContentVariants.li}>Donec a diam tellus.</Content>
    <Content component={ContentVariants.li}>Aenean nec tortor orci.</Content>
    <Content component={ContentVariants.li}>Quisque aliquam cursus urna, non bibendum massa viverra eget.</Content>
    <Content component={ContentVariants.li}>Vivamus maximus ultricies pulvinar.</Content>
  </Content>
);

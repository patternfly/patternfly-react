import React from 'react';
import { Text, TextVariants, TextContent, TextList, TextListVariants, TextListItem } from '@patternfly/react-core';

export const TextPlainList: React.FunctionComponent = () => (
  <TextContent>
    <Text component={TextVariants.h3}>Plain unordered list</Text>
    <TextList isPlain>
      <TextListItem>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</TextListItem>
      <TextListItem>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</TextListItem>
      <TextListItem>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</TextListItem>
      <TextListItem>Ut non enim metus.</TextListItem>
    </TextList>
    <Text component={TextVariants.h3}>Plain ordered list</Text>
    <TextList component={TextListVariants.ol} isPlain>
      <TextListItem>Donec blandit a lorem id convallis.</TextListItem>
      <TextListItem>Cras gravida arcu at diam gravida gravida.</TextListItem>
      <TextListItem>Integer in volutpat libero.</TextListItem>
      <TextListItem>Donec a diam tellus.</TextListItem>
      <TextListItem>Aenean nec tortor orci.</TextListItem>
      <TextListItem>Quisque aliquam cursus urna, non bibendum massa viverra eget.</TextListItem>
      <TextListItem>Vivamus maximus ultricies pulvinar.</TextListItem>
    </TextList>
  </TextContent>
);

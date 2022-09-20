import React from 'react';
import { TextContent, TextList, TextListVariants, TextListItem } from '@patternfly/react-core';

export const TextOrderedList: React.FunctionComponent = () => (
  <TextContent>
    <TextList component={TextListVariants.ol}>
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

import React from 'react';
import { TextContent, TextList, TextListVariants, TextListItem, TextListItemVariants } from '@patternfly/react-core';

export const TextDescriptionList: React.FunctionComponent = () => (
  <TextContent>
    <TextList component={TextListVariants.dl}>
      <TextListItem component={TextListItemVariants.dt}>Web</TextListItem>
      <TextListItem component={TextListItemVariants.dd}>
        The part of the Internet that contains websites and web pages
      </TextListItem>
      <TextListItem component={TextListItemVariants.dt}>HTML</TextListItem>
      <TextListItem component={TextListItemVariants.dd}>A markup language for creating web pages</TextListItem>
      <TextListItem component={TextListItemVariants.dt}>CSS</TextListItem>
      <TextListItem component={TextListItemVariants.dd}>A technology to make HTML look better</TextListItem>
    </TextList>
  </TextContent>
);

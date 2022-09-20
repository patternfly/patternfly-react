import React from 'react';
import { TextContent, Text, TextVariants } from '@patternfly/react-core';

export const TextVisited: React.FunctionComponent = () => (
  <>
    <TextContent>
      <Text component={TextVariants.h3}>Visited link example</Text>
      <Text component={TextVariants.p}>
        <Text component={TextVariants.a} isVisitedLink href="#">
          Visited link
        </Text>
      </Text>
    </TextContent>
    <br />
    <TextContent isVisited>
      <Text component={TextVariants.h3}>Visited content example</Text>
      <Text component={TextVariants.p}>
        <Text component={TextVariants.a} href="#">
          content link 1
        </Text>
      </Text>
      <Text component={TextVariants.p}>
        <Text component={TextVariants.a} href="#">
          content link 2
        </Text>
      </Text>
      <Text component={TextVariants.p}>
        <Text component={TextVariants.a} href="#">
          content link 3
        </Text>
      </Text>
    </TextContent>
  </>
);

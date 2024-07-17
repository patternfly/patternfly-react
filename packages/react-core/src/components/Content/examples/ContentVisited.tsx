import React from 'react';
import { Content, ContentVariants } from '@patternfly/react-core';

export const ContentVisited: React.FunctionComponent = () => (
  <>
    <Content>
      <Content component={ContentVariants.h3}>Link example</Content>
      <Content component={ContentVariants.p}>
        <Content component={ContentVariants.a} isVisitedLink href="#">
          Click to visit link
        </Content>
      </Content>
    </Content>
    <br />
    <Content isVisitedLink>
      <Content component={ContentVariants.h3}>Link content example</Content>
      <Content component={ContentVariants.p}>
        <Content component={ContentVariants.a} href="#">
          content link 1
        </Content>
      </Content>
      <Content component={ContentVariants.p}>
        <Content component={ContentVariants.a} href="#">
          content link 2
        </Content>
      </Content>
      <Content component={ContentVariants.p}>
        <Content component={ContentVariants.a} href="#">
          content link 3
        </Content>
      </Content>
    </Content>
  </>
);

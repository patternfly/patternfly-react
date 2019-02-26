import React from 'react';
import Content from '../../components/content';
import { Title } from '@patternfly/react-core';
import DocsLayout from '../../components/layouts';
import Tokens from '../../components/css-variables';

function GlobalVariables() {
  return (
    <DocsLayout>
      <Content>
        <Title size="4xl" headingLevel="h1">Global CSS Variables</Title>
        <Tokens variables="pf-global" />
      </Content>
    </DocsLayout>
  );
}

export default GlobalVariables;

import React from 'react';
import SidebarLayout from '../../templates/sidebarLayout';
import { CSSVars } from '../../components/componentDocs';
import { Title, PageSection } from '@patternfly/react-core';

const GlobalCSSVars = () => (
  <SidebarLayout>
    <PageSection>
      <Title size="4xl" headingLevel="h1">Global CSS Icons</Title>
      <CSSVars cssPrefix="global" />
    </PageSection>
  </SidebarLayout>
);

export default GlobalCSSVars;

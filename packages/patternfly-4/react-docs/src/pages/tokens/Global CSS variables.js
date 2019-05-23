import React from 'react';
import SidebarLayout from '../../templates/sidebarLayout';
import { CSSVars } from '../../components/componentDocs';
import { Title, PageSection } from '@patternfly-safe/react-core';

const GlobalCSSVars = () => (
  <SidebarLayout>
    <PageSection>
      <Title size="4xl" headingLevel="h1">
        Global CSS variables
      </Title>
      <CSSVars cssPrefix="global" />
    </PageSection>
  </SidebarLayout>
);

export default GlobalCSSVars;

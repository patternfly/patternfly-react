import React from 'react';
import {
  Page,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  PageSection,
  Toolbar,
  ToolbarContent,
  ToolbarItem
} from '@patternfly/react-core';

export const PageHorizontalNav: React.FunctionComponent = () => {
  const headerToolbar = (
    <Toolbar id="horizontal-toolbar">
      <ToolbarContent>
        <ToolbarItem>Navigation</ToolbarItem>
        <ToolbarItem>header-tools</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const header = (
    <Masthead inset={{ default: 'insetXs' }}>
      <MastheadMain>
        <MastheadBrand href="https://patternfly.org" target="_blank">
          Logo
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  return (
    <Page header={header}>
      <PageSection>Section 1</PageSection>
      <PageSection>Section 2</PageSection>
      <PageSection>Section 3</PageSection>
    </Page>
  );
};

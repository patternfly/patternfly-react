import React from 'react';
import {
  Page,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadLogo,
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

  const masthead = (
    <Masthead inset={{ default: 'insetXs' }}>
      <MastheadMain>
        <MastheadBrand>
          <MastheadLogo href="https://patternfly.org" target="_blank">
            Logo
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  return (
    <Page masthead={masthead}>
      <PageSection>Section 1</PageSection>
      <PageSection variant="secondary">Section 2 with secondary variant styling</PageSection>
      <PageSection>Section 3</PageSection>
    </Page>
  );
};

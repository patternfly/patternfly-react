import React from 'react';
import {
  Page,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  PageSidebar,
  PageSection,
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Card,
  CardBody
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';

export const PageCenteredSection: React.FunctionComponent = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(true);

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const headerToolbar = (
    <Toolbar id="centered-toolbar">
      <ToolbarContent>
        <ToolbarItem>header-tools</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const header = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          variant="plain"
          aria-label="Global navigation"
          isNavOpen={isNavOpen}
          onNavToggle={onNavToggle}
          id="centered-nav-toggle"
        >
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand href="https://patternfly.org" target="_blank">
          Logo
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} id="centered-section-sidebar" />;

  return (
    <Page header={header} sidebar={sidebar}>
      <PageSection isWidthLimited isCenterAligned>
        <Card>
          <CardBody>
            When a width limited page section is wider than the value of
            <code>--pf-c-page--section--m-limit-width--MaxWidth</code>, the section will be centered in the main
            section.
            <br />
            <br />
            The content in this example is placed in a card to better illustrate how the section behaves when it is
            centered. A card is not required to center a page section.
          </CardBody>
        </Card>
      </PageSection>
    </Page>
  );
};

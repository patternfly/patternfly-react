import figma from '@figma/code-connect';
import {
  Masthead,
  MastheadBrand,
  MastheadContent,
  MastheadLogo,
  MastheadMain,
  MastheadToggle,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem
} from '@patternfly/react-core';

// Documentation for Page can be found at https://www.patternfly.org/components/page

figma.connect(
  Page,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=25656-311374',
  {
    props: {
      masthead: (
        <Masthead>
          <MastheadMain>
            <MastheadToggle>
              <PageToggleButton
                isHamburgerButton
                aria-label="Global navigation"
                isSidebarOpen={true}
                onSidebarToggle={() => {}}
                id="vertical-nav-toggle"
              />
            </MastheadToggle>
            <MastheadBrand>
              <MastheadLogo href="https://patternfly.org" target="_blank">
                Logo
              </MastheadLogo>
            </MastheadBrand>
          </MastheadMain>
          <MastheadContent>
            <Toolbar id="vertical-toolbar">
              <ToolbarContent>
                <ToolbarItem>header-tools</ToolbarItem>
              </ToolbarContent>
            </Toolbar>
          </MastheadContent>
        </Masthead>
      ),
      sidebar: (
        <PageSidebar isSidebarOpen={true} id="vertical-sidebar">
          <PageSidebarBody>Navigation</PageSidebarBody>
        </PageSidebar>
      )
    },
    example: (props) => (
      <Page masthead={props.masthead} sidebar={props.sidebar}>
        <PageSection aria-labelledby="section-1">
          <h2 id="section-1">Vertical nav example section 1</h2>
        </PageSection>
        <PageSection variant="secondary" aria-labelledby="section-2">
          <h2 id="section-2">Vertical nav example section 2 with secondary variant styling</h2>
        </PageSection>
        <PageSection aria-labelledby="section-3">
          <h2 id="section-3">Vertical nav example section 3</h2>
        </PageSection>
      </Page>
    )
  }
);

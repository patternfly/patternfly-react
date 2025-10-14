import figma from '@figma/code-connect';
import {
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadLogo,
  MastheadContent,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  Toolbar,
  ToolbarContent,
  ToolbarItem
} from '@patternfly/react-core';

// Documentation for Page can be found at https://www.patternfly.org/components/page

figma.connect(Page, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=7620-35193', {
  props: {
    masthead: (
      <Masthead inset={{ default: 'insetXs' }}>
        <MastheadMain>
          <MastheadBrand>
            <MastheadLogo href="https://patternfly.org" target="_blank">
              Logo
            </MastheadLogo>
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent>
          <Toolbar id="horizontal-toolbar">
            <ToolbarContent>
              <ToolbarItem>Navigation</ToolbarItem>
              <ToolbarItem>header-tools</ToolbarItem>
            </ToolbarContent>
          </Toolbar>
        </MastheadContent>
      </Masthead>
    ),
    sidebar: (
      <PageSidebar isSidebarOpen={false} id="vertical-sidebar">
        <PageSidebarBody>Navigation</PageSidebarBody>
      </PageSidebar>
    )
  },
  example: (props) => (
    <Page masthead={props.masthead}>
      <PageSection aria-labelledby="section-1">
        <h2 id="section-1">Horizontal nav example section 1</h2>
      </PageSection>
      <PageSection variant="secondary" aria-labelledby="section-2">
        <h2 id="section-2">Horizontal nav example section 2 with secondary variant styling</h2>
      </PageSection>
      <PageSection aria-labelledby="section-3">
        <h2 id="section-3">Horizontal nav example section 3</h2>
      </PageSection>
    </Page>
  )
});

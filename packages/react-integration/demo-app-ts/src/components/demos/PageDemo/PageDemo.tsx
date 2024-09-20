import { Component } from 'react';
import {
  Page,
  PageSidebar,
  PageSidebarBody,
  PageSection,
  PageToggleButton,
  SkipToContent,
  Masthead,
  MastheadBrand,
  MastheadToggle,
  MastheadMain,
  MastheadContent,
  MastheadLogo,
  Toolbar,
  ToolbarContent,
  ToolbarItem
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
export class PageDemo extends Component {
  static displayName = 'PageDemo';
  state = {
    isNavOpen: true,
    isDropdownOpen: false,
    isKebabDropdownOpen: false
  };

  onNavToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  onDropdownToggle = () => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onDropdownSelect = () => {
    this.setState({
      isDropdownOpen: false
    });
  };

  onKebabDropdownToggle = () => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = () => {
    this.setState({
      isKebabDropdownOpen: false
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { isNavOpen } = this.state;
    const pageRole: string | undefined = undefined;

    const headerToolbar = (
      <Toolbar id="uncontrolled-toolbar">
        <ToolbarContent>
          <ToolbarItem>header-tools | Avatar</ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    );

    const masthead = (
      <Masthead id="page-demo-masthead">
        <MastheadMain>
          <MastheadToggle>
            <PageToggleButton
              variant="plain"
              aria-label="Global navigation"
              isSidebarOpen={isNavOpen}
              onSidebarToggle={this.onNavToggle}
            >
              <BarsIcon />
            </PageToggleButton>
          </MastheadToggle>
          <MastheadBrand>
            <MastheadLogo component="div">Logo that's a div</MastheadLogo>
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent>{headerToolbar}</MastheadContent>
      </Masthead>
    );
    const pageId = 'page-demo-page-id';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>;
    const Sidebar = (
      <PageSidebar id="page-demo-sidebar" isSidebarOpen={isNavOpen}>
        <PageSidebarBody>Navigation</PageSidebarBody>
      </PageSidebar>
    );

    return (
      <Page
        role={pageRole}
        id="page-demo"
        masthead={masthead}
        sidebar={Sidebar}
        mainContainerId={pageId}
        skipToContent={PageSkipToContent}
        mainAriaLabel="page demo"
      >
        <PageSection>Section 1</PageSection>
        <PageSection>Section 2</PageSection>
        <PageSection>Section 3</PageSection>
        <PageSection
          padding={{
            default: 'noPadding',
            md: 'padding',
            lg: 'padding'
          }}
        >
          Section with padding only on medium/large
        </PageSection>
        <PageSection padding={{ md: 'noPadding' }}>Section with no padding on medium</PageSection>
      </Page>
    );
  }
}

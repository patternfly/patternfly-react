import React from 'react';
import {
  Avatar,
  Button,
  Page,
  PageSidebar,
  PageSidebarBody,
  PageSection,
  PageSectionVariants,
  SkipToContent,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle
} from '@patternfly/react-core';
import {
  PageHeader,
  PageHeaderTools,
  PageHeaderToolsItem,
  PageHeaderToolsGroup
} from '@patternfly/react-core/deprecated';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import imgAvatar from '@patternfly/react-integration/demo-app-ts/src/assets/images/imgAvatar.svg';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export class PageDemo extends React.Component {
  static displayName = 'PageDemo';
  state = {
    isNavOpen: true,
    isDropdownOpen: false,
    isKebabDropdownOpen: false
  };

  onNavToggle = (_event: React.MouseEvent) => {
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
    const { isNavOpen, isDropdownOpen, isKebabDropdownOpen } = this.state;
    const headerRole: string | undefined = undefined;
    const pageRole: string | undefined = undefined;
    const logoProps = {
      href: 'https://patternfly.org',
      // eslint-disable-next-line no-console
      onClick: () => console.log('clicked logo'),
      target: '_blank'
    };

    const kebabDropdownItems = [
      <DropdownItem key="group 1 settings">
        <CogIcon /> Settings
      </DropdownItem>,
      <DropdownItem key="group 1 help">
        <HelpIcon /> Help
      </DropdownItem>
    ];

    const userDropdownItems = [
      <DropdownItem key="group 2 profile">My profile</DropdownItem>,
      <DropdownItem key="group 2 user" component="button">
        User management
      </DropdownItem>,
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    ];

    const headerTools = (
      <PageHeaderTools>
        <PageHeaderToolsGroup
          visibility={{
            default: 'hidden',
            lg: 'visible'
          }} /** the settings and help icon buttons are only visible on desktop sizes and replaced by a kebab dropdown for other sizes */
        >
          <PageHeaderToolsItem>
            <Button aria-label="Settings actions" variant="plain">
              <CogIcon />
            </Button>
          </PageHeaderToolsItem>
          <PageHeaderToolsItem>
            <Button aria-label="Help actions" variant="plain">
              <QuestionCircleIcon />
            </Button>
          </PageHeaderToolsItem>
        </PageHeaderToolsGroup>
        <PageHeaderToolsGroup>
          <PageHeaderToolsItem
            visibility={{
              lg: 'hidden'
            }}
            id="kebab-dropdown"
            /** this kebab dropdown replaces the icon buttons and is hidden for desktop sizes */
          >
            <Dropdown
              onSelect={this.onKebabDropdownSelect}
              isOpen={isKebabDropdownOpen}
              onOpenChange={(isOpen) => this.setState({ isKebabDropdownOpen: isOpen })}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef) => (
                <MenuToggle
                  variant="plain"
                  ref={toggleRef}
                  onClick={this.onKebabDropdownToggle}
                  isExpanded={isKebabDropdownOpen}
                >
                  <EllipsisVIcon />
                </MenuToggle>
              )}
            >
              <DropdownList>{kebabDropdownItems}</DropdownList>
            </Dropdown>
          </PageHeaderToolsItem>
          <PageHeaderToolsItem
            id="user-dropdown"
            visibility={{
              default: 'hidden',
              md: 'visible',
              lg: 'visible',
              xl: 'visible',
              '2xl': 'visible'
            }} /** this user dropdown is hidden on mobile sizes */
          >
            <Dropdown
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              onOpenChange={(isOpen) => this.setState({ isDropdownOpen: isOpen })}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef) => (
                <MenuToggle ref={toggleRef} onClick={this.onDropdownToggle} isExpanded={isDropdownOpen}>
                  John Smith
                </MenuToggle>
              )}
            >
              <DropdownList>{userDropdownItems}</DropdownList>
            </Dropdown>
          </PageHeaderToolsItem>
        </PageHeaderToolsGroup>
        <Avatar src={imgAvatar} alt="Avatar image" />
      </PageHeaderTools>
    );

    const Header = (
      <PageHeader
        role={headerRole}
        id="page-demo-header"
        logo="Logo that's a <div>"
        logoProps={logoProps}
        headerTools={headerTools}
        showNavToggle
        isNavOpen={isNavOpen}
        onNavToggle={this.onNavToggle}
        logoComponent={'div'}
      />
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
        header={Header}
        sidebar={Sidebar}
        mainContainerId={pageId}
        skipToContent={PageSkipToContent}
        mainAriaLabel="page demo"
      >
        <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
        <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
        <PageSection variant={PageSectionVariants.light} isWidthLimited>
          Section with light background
        </PageSection>
        <PageSection
          padding={{
            default: 'noPadding',
            md: 'padding',
            lg: 'padding'
          }}
        >
          Section with padding only on medium/large
        </PageSection>
        <PageSection variant={PageSectionVariants.light} padding={{ md: 'noPadding' }}>
          Section with no padding on medium
        </PageSection>
      </Page>
    );
  }
}

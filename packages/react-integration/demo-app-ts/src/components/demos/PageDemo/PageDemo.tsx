import React from 'react';
import {
  Avatar,
  Button,
  Page,
  PageHeader,
  PageHeaderTools,
  PageHeaderToolsGroup,
  PageHeaderToolsItem,
  PageSidebar,
  PageSection,
  PageSectionVariants,
  SkipToContent
} from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  KebabToggle,
  DropdownToggle,
  DropdownGroup as DropdownGroupDeprecated,
  DropdownItem as DropdownItemDeprecated
} from '@patternfly/react-core/deprecated';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import imgAvatar from '@patternfly/react-integration/demo-app-ts/src/assets/images/imgAvatar.svg';

export class PageDemo extends React.Component {
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

  onDropdownToggle = (_event: any, isDropdownOpen: boolean) => {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = (_event: any) => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabDropdownToggle = (_event: any, isKebabDropdownOpen: boolean) => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = (_event: any) => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
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
      <DropdownItemDeprecated key="group 1 settings">
        <CogIcon /> Settings
      </DropdownItemDeprecated>,
      <DropdownItemDeprecated key="group 1 help">
        <HelpIcon /> Help
      </DropdownItemDeprecated>
    ];

    const userDropdownItems = [
      <DropdownGroupDeprecated key="group 2">
        <DropdownItemDeprecated key="group 2 profile">My profile</DropdownItemDeprecated>
        <DropdownItemDeprecated key="group 2 user" component="button">
          User management
        </DropdownItemDeprecated>
        <DropdownItemDeprecated key="group 2 logout">Logout</DropdownItemDeprecated>
      </DropdownGroupDeprecated>
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
            <DropdownDeprecated
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
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
            <DropdownDeprecated
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>John Smith</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
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
    const Sidebar = <PageSidebar id="page-demo-sidebar" nav="Navigation" isNavOpen={isNavOpen} />;

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

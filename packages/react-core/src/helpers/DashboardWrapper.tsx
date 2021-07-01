import React from 'react';
import {
  Avatar,
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownGroup,
  DropdownToggle,
  DropdownItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageSidebar,
  SkipToContent,
  PageHeaderTools,
  PageHeaderToolsGroup,
  PageHeaderToolsItem
} from '../components';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';

export interface DashboardWrapperProps {
  /** Content rendered inside of Page */
  children?: React.ReactNode;
  /** ID of the Page */
  mainContainerId?: string;
  /** Custom breadcrumb of the Page */
  breadcrumb?: React.ReactNode;
  /** Custom header of the Page */
  header?: React.ReactNode;
  /** Custom sidebar of the Page */
  sidebar?: React.ReactNode;
  /** Brand image of the Page Header */
  imgBrand?: string;
  /** Avatar image of the Page Header */
  imgAvatar?: string;
}

export interface DashboardWrapperState {
  isDropdownOpen: boolean;
  isKebabDropdownOpen: boolean;
  activeItem: number;
}

export class DashboardWrapper extends React.Component<DashboardWrapperProps, DashboardWrapperState> {
  static displayName = 'DashboardWrapper';
  static defaultProps = {
    pageId: 'main-content-page-layout-default-nav'
  };

  state = {
    isDropdownOpen: false,
    isKebabDropdownOpen: false,
    activeItem: 0
  };

  onDropdownToggle = (isDropdownOpen: boolean) => {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = () => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabDropdownToggle = (isKebabDropdownOpen: boolean) => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = () => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  onNavSelect = (result: any) => {
    this.setState({
      activeItem: result.itemId
    });
  };

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem } = this.state;
    const { children, mainContainerId, breadcrumb, header, sidebar, imgBrand, imgAvatar } = this.props;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0}>
            System Panel
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1}>
            Policy
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2}>
            Authentication
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3}>
            Network Services
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4}>
            Server
          </NavItem>
        </NavList>
      </Nav>
    );
    const kebabDropdownItems = [
      <DropdownItem key="kebab-1">
        <CogIcon /> Settings
      </DropdownItem>,
      <DropdownItem key="kebab-2">
        <HelpIcon /> Help
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownGroup key="group 2">
        <DropdownItem key="group 2 profile">My profile</DropdownItem>
        <DropdownItem key="group 2 user" component="button">
          User management
        </DropdownItem>
        <DropdownItem key="group 2 logout">Logout</DropdownItem>
      </DropdownGroup>
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
            <Button aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </PageHeaderToolsItem>
          <PageHeaderToolsItem>
            <Button aria-label="Help actions" variant={ButtonVariant.plain}>
              <HelpIcon />
            </Button>
          </PageHeaderToolsItem>
        </PageHeaderToolsGroup>
        <PageHeaderToolsGroup>
          <PageHeaderToolsItem
            visibility={{
              lg: 'hidden'
            }} /** this kebab dropdown replaces the icon buttons and is hidden for desktop sizes */
          >
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </PageHeaderToolsItem>
          <PageHeaderToolsItem
            visibility={{ default: 'hidden', md: 'visible' }} /** this user dropdown is hidden on mobile sizes */
          >
            <Dropdown
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

    const _header = (
      <PageHeader logo={<Brand src={imgBrand} alt="Patternfly Logo" />} headerTools={headerTools} showNavToggle />
    );
    const _sidebar = <PageSidebar nav={PageNav} />;
    const PageSkipToContent = <SkipToContent href={`#${mainContainerId}`}>Skip to content</SkipToContent>;
    const _breadcrumb = (
      <Breadcrumb>
        <BreadcrumbItem>Section home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section landing
        </BreadcrumbItem>
      </Breadcrumb>
    );

    return (
      <Page
        header={header !== undefined ? header : _header}
        sidebar={sidebar !== undefined ? sidebar : _sidebar}
        isManagedSidebar
        skipToContent={PageSkipToContent}
        breadcrumb={breadcrumb !== undefined ? breadcrumb : _breadcrumb}
        mainContainerId={mainContainerId}
      >
        {children}
      </Page>
    );
  }
}

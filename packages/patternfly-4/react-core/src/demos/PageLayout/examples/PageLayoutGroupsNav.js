import React from 'react';
import {
  Avatar,
  BackgroundImage,
  BackgroundImageSrc,
  Brand,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  KebabToggle,
  Nav,
  NavGroup,
  NavItem,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import { global_breakpoint_md as breakpointMd } from '@patternfly/react-tokens';
import accessibleStyles from '@patternfly/patternfly-next/utilities/Accessibility/accessibility.css';
import spacingStyles from '@patternfly/patternfly-next/utilities/Spacing/spacing.css';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import brandImg from './l_pf-reverse-164x11.png';
import avatarImg from './img_avatar.png';

class PageLayoutGroupsNav extends React.Component {
  constructor(props) {
    super(props);
    // Set initial isNavOpen state based on window width
    const isNavOpen = typeof window !== 'undefined' && window.innerWidth >= parseInt(breakpointMd.value, 10);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 'grp-1_itm-1',
      isNavOpen
    };
  }

  onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = event => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  onNavToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem, isNavOpen } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavGroup title="System Panel">
          <NavItem to="#grouped-1" itemId="grp-1_itm-1" isActive={activeItem === 'grp-1_itm-1'}>
            Overview
          </NavItem>
          <NavItem to="#grouped-2" itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'}>
            Resource Usage
          </NavItem>
          <NavItem to="#grouped-3" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'}>
            Hypervisors
          </NavItem>
          <NavItem to="#grouped-4" itemId="grp-1_itm-4" isActive={activeItem === 'grp-1_itm-4'}>
            Instances
          </NavItem>
          <NavItem to="#grouped-5" itemId="grp-1_itm-5" isActive={activeItem === 'grp-1_itm-5'}>
            Volumes
          </NavItem>
          <NavItem to="#grouped-6" itemId="grp-1_itm-6" isActive={activeItem === 'grp-1_itm-6'}>
            Network
          </NavItem>
        </NavGroup>
        <NavGroup title="Policy">
          <NavItem to="#grouped-7" itemId="grp-2_itm-1" isActive={activeItem === 'grp-2_itm-1'}>
            Hosts
          </NavItem>
          <NavItem to="#grouped-8" itemId="grp-2_itm-2" isActive={activeItem === 'grp-2_itm-2'}>
            Virtual Machines
          </NavItem>
          <NavItem to="#grouped-9" itemId="grp-2_itm-3" isActive={activeItem === 'grp-2_itm-3'}>
            Storage
          </NavItem>
        </NavGroup>
      </Nav>
    );
    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.srOnly, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="nav-toggle" aria-label="Overflow actions" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="nav-toggle" aria-label="Overflow actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
            >
              <DropdownItem>
                <BellIcon /> Notifications
              </DropdownItem>
              <DropdownItem>
                <CogIcon /> Settings
              </DropdownItem>
            </Dropdown>
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.srOnly, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>Kyle Baker</DropdownToggle>}
            >
              <DropdownItem>Link</DropdownItem>
              <DropdownItem component="button">Action</DropdownItem>
              <DropdownItem isDisabled>Disabled Link</DropdownItem>
              <DropdownItem isDisabled component="button">
                Disabled Action
              </DropdownItem>
              <DropdownSeparator />
              <DropdownItem>Separated Link</DropdownItem>
              <DropdownItem component="button">Separated Action</DropdownItem>
            </Dropdown>
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
    const bgImages = {
      [BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg',
      [BackgroundImageSrc.md]: '/assets/images/pfbg_992.jpg',
      [BackgroundImageSrc.md2x]: '/assets/images/pfbg_992@2x.jpg',
      [BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',
      [BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',
      [BackgroundImageSrc.xl]: '/assets/images/pfbg_2000.jpg',
      [BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',
      [BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',
      [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg#image_overlay'
    };

    const Header = (
      <PageHeader
        logo={<Brand src={brandImg} alt="Patternfly Logo" />}
        toolbar={PageToolbar}
        avatar={<Avatar src={avatarImg} alt="Avatar image" />}
        showNavToggle
        onNavToggle={this.onNavToggle}
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} isNavOpen={isNavOpen} />;

    return (
      <React.Fragment>
        <BackgroundImage src={bgImages} />
        <Page header={Header} sidebar={Sidebar}>
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main Title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of it’s relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection variant={PageSectionVariants.light}>Light</PageSection>
          <PageSection variant={PageSectionVariants.dark}>Dark</PageSection>
          <PageSection variant={PageSectionVariants.darker}>Darker</PageSection>
          <PageSection>Content</PageSection>
        </Page>
      </React.Fragment>
    );
  }
}

export default PageLayoutGroupsNav;

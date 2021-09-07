import React from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownGroup,
  DropdownToggle,
  DropdownItem,
  KebabToggle,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  PageToggleButton,
  Divider
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import AttentionBellIcon from '@patternfly/react-icons/dist/esm/icons/attention-bell-icon';
import imgBrand from './pfColorLogo.svg';
import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';

export default class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      isFullKebabDropdownOpen: false,
      activeItem: 0
    };

    this.onDropdownToggle = isDropdownOpen => {
      this.setState({
        isDropdownOpen
      });
    };

    this.onDropdownSelect = () => {
      this.setState({
        isDropdownOpen: !this.state.isDropdownOpen
      });
    };

    this.onKebabDropdownToggle = isKebabDropdownOpen => {
      this.setState({
        isKebabDropdownOpen
      });
    };

    this.onKebabDropdownSelect = () => {
      this.setState({
        isKebabDropdownOpen: !this.state.isKebabDropdownOpen
      });
    };

    this.onFullKebabToggle = isFullKebabDropdownOpen => {
      this.setState({
        isFullKebabDropdownOpen
      });
    };

    this.onFullKebabSelect = () => {
      this.setState({
        isFullKebabDropdownOpen: !this.state.isFullKebabDropdownOpen
      });
    };
  }

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, isFullKebabDropdownOpen } = this.state;

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

    const fullKebabItems = [
      <DropdownGroup key="group 2">
        <DropdownItem key="group 2 profile">My profile</DropdownItem>
        <DropdownItem key="group 2 user" component="button">
          User management
        </DropdownItem>
        <DropdownItem key="group 2 logout">Logout</DropdownItem>
      </DropdownGroup>,
      <Divider key="divider" />,
      <DropdownItem key="kebab-1">
        <CogIcon /> Settings
      </DropdownItem>,
      <DropdownItem key="kebab-2">
        <HelpIcon /> Help
      </DropdownItem>
    ];

    const headerToolbar = (
      <Toolbar id="toolbar" isFullHeight isStatic>
        <ToolbarContent>
          <ToolbarGroup
            variant="icon-button-group"
            alignment={{ default: 'alignRight' }}
            spacer={{ default: 'spacerNone', md: 'spacerMd' }}
          >
            <ToolbarItem>
              <Button aria-label="Notifications" variant={ButtonVariant.plain}>
                <AttentionBellIcon />
              </Button>
            </ToolbarItem>
            <ToolbarGroup variant="icon-button-group" visibility={{ default: 'hidden', lg: 'visible' }}>
              <ToolbarItem>
                <Button aria-label="Settings actions" variant={ButtonVariant.plain}>
                  <CogIcon />
                </Button>
              </ToolbarItem>
              <ToolbarItem>
                <Button aria-label="Help actions" variant={ButtonVariant.plain}>
                  <HelpIcon />
                </Button>
              </ToolbarItem>
            </ToolbarGroup>
          </ToolbarGroup>
          <ToolbarItem visibility={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem visibility={{ default: 'visible', md: 'hidden', lg: 'hidden', xl: 'hidden', '2xl': 'hidden' }}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onFullKebabSelect}
              toggle={<KebabToggle onToggle={this.onFullKebabToggle} />}
              isOpen={isFullKebabDropdownOpen}
              dropdownItems={fullKebabItems}
            />
          </ToolbarItem>
          <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
            <Dropdown
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={
                <DropdownToggle icon={<Avatar src={imgAvatar} alt="Avatar" />} onToggle={this.onDropdownToggle}>
                  John Smith
                </DropdownToggle>
              }
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    );

    const masthead = (
      <Masthead>
        <MastheadToggle>
          <PageToggleButton variant="plain" aria-label="Global navigation">
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <MastheadMain>
          <MastheadBrand>
            <Brand src={imgBrand} alt="Patternfly logo" />
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent>{headerToolbar}</MastheadContent>
      </Masthead>
    );

    return masthead;
  }
}

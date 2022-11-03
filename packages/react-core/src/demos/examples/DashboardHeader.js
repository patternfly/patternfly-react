import React from 'react';
import {
  ApplicationLauncher,
  ApplicationLauncherItem,
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Divider,
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
  PageToggleButton
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';
import pfColorLogo from '@patternfly/react-core/src/demos/examples/pfColorLogo.svg';

export default class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      isFullKebabDropdownOpen: false,
      isAppLauncherOpen: false,
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

    this.onAppLauncherToggle = isAppLauncherOpen => {
      this.setState({
        isAppLauncherOpen
      });
    };

    this.onAppLauncherSelect = () => {
      this.setState({
        isAppLauncherOpen: !this.state.isAppLauncherOpen
      });
    };
  }

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, isFullKebabDropdownOpen, isAppLauncherOpen } = this.state;
    const { notificationBadge } = this.props;

    const kebabDropdownItems = [
      <DropdownItem key="settings">
        <CogIcon /> Settings
      </DropdownItem>,
      <DropdownItem key="help">
        <HelpIcon /> Help
      </DropdownItem>
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
      <DropdownItem key="settings">
        <CogIcon /> Settings
      </DropdownItem>,
      <DropdownItem key="help">
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

    const appLauncherItems = [
      <ApplicationLauncherItem key="application_1a" href="#">
        Application 1 (anchor link)
      </ApplicationLauncherItem>,
      <ApplicationLauncherItem key="application_2a" component="button" onClick={() => alert('Clicked item 2')}>
        Application 2 (button with onClick)
      </ApplicationLauncherItem>
    ];

    const headerToolbar = (
      <Toolbar id="toolbar" isFullHeight isStatic>
        <ToolbarContent>
          <ToolbarGroup
            variant="icon-button-group"
            alignment={{ default: 'alignRight' }}
            spacer={{ default: 'spacerNone', md: 'spacerMd' }}
          >
            {notificationBadge ? (
              notificationBadge
            ) : (
              <ToolbarItem>
                <Button
                  aria-label="Notifications"
                  variant={ButtonVariant.plain}
                  icon={<BellIcon />}
                  onClick={() => {}}
                />
              </ToolbarItem>
            )}
            <ToolbarGroup variant="icon-button-group" visibility={{ default: 'hidden', lg: 'visible' }}>
              <ToolbarItem>
                <ApplicationLauncher
                  onSelect={this.onAppLauncherSelect}
                  onToggle={this.onAppLauncherToggle}
                  isOpen={isAppLauncherOpen}
                  items={appLauncherItems}
                />
              </ToolbarItem>
              <ToolbarItem>
                <Button aria-label="Settings" variant={ButtonVariant.plain} icon={<CogIcon />} />
              </ToolbarItem>
              <ToolbarItem>
                <Button aria-label="Help" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
              </ToolbarItem>
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
            <ToolbarItem visibility={{ md: 'hidden' }}>
              <Dropdown
                isPlain
                position="right"
                onSelect={this.onFullKebabSelect}
                toggle={<KebabToggle onToggle={this.onFullKebabToggle} />}
                isOpen={isFullKebabDropdownOpen}
                dropdownItems={fullKebabItems}
              />
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
            <Dropdown
              isFullHeight
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={
                <DropdownToggle icon={<Avatar src={imgAvatar} alt="Avatar" />} onToggle={this.onDropdownToggle}>
                  Ned Username
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
            <Brand
              widths={{ default: '180px', md: '180px', '2xl': '220px' }}
              src={pfColorLogo}
              alt="Fallback patternFly default logo"
            >
              <source media="(min-width: 768px)" srcSet={pfColorLogo} />
              <source srcSet={pfColorLogo} />
            </Brand>
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent>{headerToolbar}</MastheadContent>
      </Masthead>
    );

    return masthead;
  }
}

import React from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Divider,
  Dropdown,
  DropdownGroup,
  DropdownItem,
  DropdownList,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  MenuToggle,
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
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.svg';

export default class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      isFullKebabDropdownOpen: false,
      activeItem: 0
    };

    this.onDropdownToggle = () => {
      this.setState((prevState) => ({
        isDropdownOpen: !prevState.isDropdownOpen
      }));
    };

    this.onDropdownSelect = () => {
      this.setState({
        isDropdownOpen: false
      });
    };

    this.onKebabDropdownToggle = () => {
      this.setState((prevState) => ({
        isKebabDropdownOpen: !prevState.isKebabDropdownOpen
      }));
    };

    this.onKebabDropdownSelect = () => {
      this.setState({
        isKebabDropdownOpen: false
      });
    };

    this.onFullKebabToggle = () => {
      this.setState((prevState) => ({
        isFullKebabDropdownOpen: !prevState.isFullKebabDropdownOpen
      }));
    };

    this.onFullKebabSelect = () => {
      this.setState({
        isFullKebabDropdownOpen: false
      });
    };
  }

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, isFullKebabDropdownOpen } = this.state;
    const { notificationBadge } = this.props;

    const kebabDropdownItems = (
      <>
        <DropdownItem>
          <CogIcon /> Settings
        </DropdownItem>
        <DropdownItem>
          <HelpIcon /> Help
        </DropdownItem>
      </>
    );
    const userDropdownItems = (
      <>
        <DropdownItem key="group 2 profile">My profile</DropdownItem>
        <DropdownItem key="group 2 user">User management</DropdownItem>
        <DropdownItem key="group 2 logout">Logout</DropdownItem>
      </>
    );

    const headerToolbar = (
      <Toolbar id="toolbar" isFullHeight isStatic>
        <ToolbarContent>
          <ToolbarGroup
            variant="icon-button-group"
            align={{ default: 'alignRight' }}
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
                <Button aria-label="Settings" variant={ButtonVariant.plain} icon={<CogIcon />} />
              </ToolbarItem>
              <ToolbarItem>
                <Button aria-label="Help" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
              </ToolbarItem>
            </ToolbarGroup>
            <ToolbarItem visibility={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
              <Dropdown
                isOpen={isKebabDropdownOpen}
                onSelect={this.onKebabDropdownSelect}
                onOpenChange={(isOpen) => this.setState({ isKebabDropdownOpen: isOpen })}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isKebabDropdownOpen}
                    onClick={this.onKebabDropdownToggle}
                    variant="plain"
                    aria-label="Settings and help"
                  >
                    <EllipsisVIcon aria-hidden="true" />
                  </MenuToggle>
                )}
              >
                <DropdownList>{kebabDropdownItems}</DropdownList>
              </Dropdown>
            </ToolbarItem>
            <ToolbarItem visibility={{ md: 'hidden' }}>
              <Dropdown
                isOpen={isFullKebabDropdownOpen}
                onSelect={this.onFullKebabSelect}
                onOpenChange={(isOpen) => this.setState({ isFullKebabDropdownOpen: isOpen })}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isFullKebabDropdownOpen}
                    onClick={this.onFullKebabToggle}
                    variant="plain"
                    aria-label="Toolbar menu"
                  >
                    <EllipsisVIcon aria-hidden="true" />
                  </MenuToggle>
                )}
              >
                <DropdownGroup key="group 2" aria-label="User actions">
                  <DropdownList>{userDropdownItems}</DropdownList>
                </DropdownGroup>
                <Divider />
                <DropdownList>{kebabDropdownItems}</DropdownList>
              </Dropdown>
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
            <Dropdown
              isOpen={isDropdownOpen}
              onSelect={this.onDropdownSelect}
              onOpenChange={(isOpen) => this.setState({ isDropdownOpen: isOpen })}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  isExpanded={isDropdownOpen}
                  onClick={this.onDropdownToggle}
                  icon={<Avatar src={imgAvatar} alt="" />}
                  isFullHeight
                >
                  Ned Username
                </MenuToggle>
              )}
            >
              <DropdownList>{userDropdownItems}</DropdownList>
            </Dropdown>
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
            <Brand src={pfLogo} alt="PatternFly" heights={{ default: '36px' }} />
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent>{headerToolbar}</MastheadContent>
      </Masthead>
    );

    return masthead;
  }
}

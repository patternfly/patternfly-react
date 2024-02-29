import React, { useState } from 'react';
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
import imgAvatar from '@patternfly/react-table/src/demos/assets/avatarImg.svg';
import pfLogo from '@patternfly/react-table/src/demos/assets/pf-logo.svg';

interface DashboardHeaderProps {
  /** Render custom notification badge */
  notificationBadge?: React.ReactNode;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ notificationBadge }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = useState(false);
  const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = useState(false);

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

  const onDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onDropdownSelect = () => {
    setIsDropdownOpen(false);
  };

  const onKebabDropdownToggle = () => {
    setIsKebabDropdownOpen(!isKebabDropdownOpen);
  };

  const onKebabDropdownSelect = () => {
    setIsKebabDropdownOpen(false);
  };

  const onFullKebabToggle = () => {
    setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen);
  };

  const onFullKebabSelect = () => {
    setIsFullKebabDropdownOpen(false);
  };

  return (
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
      <MastheadContent>
        <Toolbar id="toolbar" isFullHeight isStatic>
          <ToolbarContent>
            <ToolbarGroup
              variant="icon-button-group"
              align={{ default: 'alignRight' }}
              spacer={{ default: 'spacerNone', md: 'spacerMd' }}
            >
              {notificationBadge ?? (
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
                  onSelect={onKebabDropdownSelect}
                  onOpenChange={setIsKebabDropdownOpen}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: React.RefObject<any>) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isKebabDropdownOpen}
                      onClick={onKebabDropdownToggle}
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
                  onSelect={onFullKebabSelect}
                  onOpenChange={setIsFullKebabDropdownOpen}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: React.RefObject<any>) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isFullKebabDropdownOpen}
                      onClick={onFullKebabToggle}
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
                onSelect={onDropdownSelect}
                onOpenChange={setIsDropdownOpen}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef: React.RefObject<any>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isDropdownOpen}
                    onClick={onDropdownToggle}
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
      </MastheadContent>
    </Masthead>
  );
};
DashboardHeader.displayName = 'DashboardHeader';

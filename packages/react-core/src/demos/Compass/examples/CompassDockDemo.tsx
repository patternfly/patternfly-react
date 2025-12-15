import { useRef, useState } from 'react';
import {
  Compass,
  CompassContent,
  CompassMainHeader,
  CompassPanel,
  Title,
  NavItem,
  NavList,
  Nav,
  Brand,
  MastheadLogo,
  MastheadBrand,
  MastheadContent,
  MastheadMain,
  Masthead,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  ToolbarGroup,
  Dropdown,
  DropdownList,
  MenuToggle,
  DropdownItem,
  Button,
  ButtonVariant,
  Avatar,
  Tooltip,
  Divider
} from '@patternfly/react-core';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import CloudIcon from '@patternfly/react-icons/dist/esm/icons/cloud-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import pfLogo from '../../assets/PF-IconLogo-color.svg';
import imgAvatar from '../../assets/avatarImg.svg';

interface NavOnSelectProps {
  groupId: number | string;
  itemId: number | string;
  to: string;
}

export const CompassDockDemo: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onNavSelect = (_event: React.FormEvent<HTMLInputElement>, selectedItem: NavOnSelectProps) => {
    typeof selectedItem.itemId === 'number' && setActiveItem(selectedItem.itemId);
  };

  const onDropdownToggle = () => {
    setIsDropdownOpen((prevIsOpen) => !prevIsOpen);
  };

  const onDropdownSelect = () => {
    setIsDropdownOpen(false);
  };

  const userDropdownItems = [
    <>
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user">User management</DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </>
  ];

  const navItem1Ref = useRef<HTMLAnchorElement>(null);
  const navItem2Ref = useRef<HTMLAnchorElement>(null);
  const navItem3Ref = useRef<HTMLAnchorElement>(null);
  const navItem4Ref = useRef<HTMLAnchorElement>(null);
  const settingsRef = useRef<HTMLButtonElement>(null);
  const helpRef = useRef<HTMLButtonElement>(null);
  const userMenuRef = useRef<HTMLButtonElement>(null);

  const dockContent = (
    <Masthead id="icon-router-link" variant="docked">
      <MastheadMain>
        <MastheadBrand>
          <MastheadLogo component={(props) => <a {...props} href="#" />}>
            <Brand src={pfLogo} alt="PatternFly" heights={{ default: '37px' }} />
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <Divider />
      <MastheadContent>
        <Toolbar id="toolbar" isVertical>
          <ToolbarContent>
            <ToolbarItem>
              <Nav onSelect={onNavSelect} variant="docked" aria-label="Icon global" ouiaId="IconNav">
                <NavList>
                  <NavItem
                    key="nav-icon-link1"
                    preventDefault
                    id="nav-icon-link1"
                    to="#nav-icon-link1"
                    itemId={0}
                    isActive={activeItem === 0}
                    icon={<CubeIcon />}
                    anchorRef={navItem1Ref}
                    aria-label="Link 1"
                  />
                  <NavItem
                    key="nav-icon-link2"
                    preventDefault
                    id="nav-icon-link2"
                    to="#nav-icon-link2"
                    itemId={1}
                    isActive={activeItem === 1}
                    icon={<FolderIcon />}
                    anchorRef={navItem2Ref}
                    aria-label="Link 2"
                  />
                  <NavItem
                    key="nav-icon-link3"
                    preventDefault
                    id="nav-icon-link3"
                    to="#nav-icon-link3"
                    itemId={2}
                    isActive={activeItem === 2}
                    icon={<CloudIcon />}
                    anchorRef={navItem3Ref}
                    aria-label="Link 3"
                  />
                  <NavItem
                    key="nav-icon-link4"
                    preventDefault
                    id="nav-icon-link4"
                    to="#nav-icon-link4"
                    itemId={3}
                    isActive={activeItem === 3}
                    icon={<CodeIcon />}
                    anchorRef={navItem4Ref}
                    aria-label="Link 4"
                  />
                </NavList>
              </Nav>
              <Tooltip aria="none" aria-live="off" triggerRef={navItem1Ref} content="Link 1"></Tooltip>
              <Tooltip aria="none" aria-live="off" triggerRef={navItem2Ref} content="Link 2"></Tooltip>
              <Tooltip aria="none" aria-live="off" triggerRef={navItem3Ref} content="Link 3"></Tooltip>
              <Tooltip aria="none" aria-live="off" triggerRef={navItem4Ref} content="Link 4"></Tooltip>
            </ToolbarItem>
            <ToolbarGroup
              variant="action-group-plain"
              align={{ default: 'alignEnd' }}
              gap={{ default: 'gapNone', md: 'gapMd' }}
            >
              <ToolbarGroup variant="action-group-plain" visibility={{ default: 'hidden', lg: 'visible' }}>
                <ToolbarItem>
                  <Tooltip aria="none" aria-live="off" triggerRef={settingsRef} content="Settings">
                    <Button ref={settingsRef} aria-label="Settings" isSettings variant="plain" />
                  </Tooltip>
                </ToolbarItem>
                <ToolbarItem>
                  <Tooltip aria="none" aria-live="off" triggerRef={helpRef} content="Help">
                    <Button
                      ref={helpRef}
                      aria-label="Help"
                      variant={ButtonVariant.plain}
                      icon={<QuestionCircleIcon />}
                    />
                  </Tooltip>
                </ToolbarItem>
              </ToolbarGroup>
            </ToolbarGroup>
            <ToolbarItem>
              <Dropdown
                isOpen={isDropdownOpen}
                shouldFocusToggleOnSelect
                onSelect={onDropdownSelect}
                onOpenChange={(isOpen: boolean) => setIsDropdownOpen(isOpen)}
                toggle={{
                  toggleNode: (
                    <Tooltip content="User menu" aria="none" aria-live="off" triggerRef={userMenuRef}>
                      <MenuToggle
                        ref={userMenuRef}
                        onClick={onDropdownToggle}
                        isExpanded={isDropdownOpen}
                        icon={<Avatar src={imgAvatar} alt="" size="sm" />}
                        variant="plain"
                        aria-label="User menu"
                      />
                    </Tooltip>
                  ),
                  toggleRef: userMenuRef
                }}
              >
                <DropdownList>{userDropdownItems}</DropdownList>
              </Dropdown>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </MastheadContent>
    </Masthead>
  );

  const mainContent = (
    <>
      <CompassMainHeader title={<Title headingLevel="h1">Content title</Title>} />
      <CompassContent>
        <CompassPanel>Content</CompassPanel>
      </CompassContent>
    </>
  );

  return (
    <Compass
      dock={dockContent}
      main={mainContent}
      backgroundSrcDark="/assets/images/pf-background.svg"
      backgroundSrcLight="/assets/images/pf-background.svg"
    />
  );
};

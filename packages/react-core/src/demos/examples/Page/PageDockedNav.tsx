import { useRef, useState } from 'react';
import {
  Avatar,
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  Content,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownList,
  Gallery,
  GalleryItem,
  Masthead,
  MastheadMain,
  MastheadLogo,
  MastheadContent,
  MastheadBrand,
  MenuToggle,
  MenuToggleElement,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  SkipToContent,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Tooltip
} from '@patternfly/react-core';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import CloudIcon from '@patternfly/react-icons/dist/esm/icons/cloud-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import pfIconLogo from '@patternfly/react-core/src/demos/assets/PF-IconLogo-color.svg';

interface NavOnSelectProps {
  groupId: number | string;
  itemId: number | string;
  to: string;
}

export const PageDockedNav: React.FunctionComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1);

  const onNavSelect = (_event: React.FormEvent<HTMLInputElement>, selectedItem: NavOnSelectProps) => {
    typeof selectedItem.itemId === 'number' && setActiveItem(selectedItem.itemId);
  };

  const onDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onDropdownSelect = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dashboardBreadcrumb = (
    <Breadcrumb>
      <BreadcrumbItem>Section home</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>
        Section landing
      </BreadcrumbItem>
    </Breadcrumb>
  );

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

  const masthead = (
    <Masthead id="icon-router-link" variant="docked">
      <MastheadMain>
        <MastheadBrand>
          <MastheadLogo component={(props) => <a {...props} href="#" />}>
            <Brand src={pfIconLogo} alt="PatternFly" heights={{ default: '36px' }} />
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
                    preventDefault
                    id="nav-icon-link1"
                    to="#nav-icon-link1"
                    itemId={0}
                    isActive={activeItem === 0}
                    icon={<CubeIcon />}
                    ref={navItem1Ref}
                    aria-label="Link 1"
                  />
                  <NavItem
                    preventDefault
                    id="nav-icon-link2"
                    to="#nav-icon-link2"
                    itemId={1}
                    isActive={activeItem === 1}
                    icon={<FolderIcon />}
                    ref={navItem2Ref}
                    aria-label="Link 2"
                  />
                  <NavItem
                    preventDefault
                    id="nav-icon-link3"
                    to="#nav-icon-link3"
                    itemId={2}
                    isActive={activeItem === 2}
                    icon={<CloudIcon />}
                    ref={navItem3Ref}
                    aria-label="Link 3"
                  />
                  <NavItem
                    preventDefault
                    id="nav-icon-link4"
                    to="#nav-icon-link4"
                    itemId={0}
                    isActive={activeItem === 3}
                    icon={<CodeIcon />}
                    ref={navItem4Ref}
                    aria-label="Link 4"
                  />
                </NavList>
              </Nav>
              <Tooltip triggerRef={navItem1Ref} content="Link 1"></Tooltip>
              <Tooltip triggerRef={navItem2Ref} content="Link 2"></Tooltip>
              <Tooltip triggerRef={navItem3Ref} content="Link 3"></Tooltip>
              <Tooltip triggerRef={navItem4Ref} content="Link 4"></Tooltip>
            </ToolbarItem>
            <ToolbarGroup
              variant="action-group-plain"
              align={{ default: 'alignEnd' }}
              gap={{ default: 'gapNone', md: 'gapMd' }}
            >
              <ToolbarGroup variant="action-group-plain" visibility={{ default: 'hidden', lg: 'visible' }}>
                <ToolbarItem>
                  <Button aria-label="Settings" isSettings variant="plain" />
                </ToolbarItem>
                <ToolbarItem>
                  <Button aria-label="Help" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
                </ToolbarItem>
              </ToolbarGroup>
            </ToolbarGroup>
            <ToolbarItem>
              <Dropdown
                isOpen={isDropdownOpen}
                onSelect={onDropdownSelect}
                onOpenChange={(isOpen: boolean) => setIsDropdownOpen(isOpen)}
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    onClick={onDropdownToggle}
                    isExpanded={isDropdownOpen}
                    icon={<Avatar src={imgAvatar} alt="" size="sm" />}
                    variant="plain"
                    aria-label="User menu"
                  ></MenuToggle>
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

  const mainContainerId = 'main-content-page-layout-tertiary-nav';

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const mainContentElement = document.getElementById(mainContainerId);
    if (mainContentElement) {
      mainContentElement.focus();
    }
  };

  const pageSkipToContent = (
    <SkipToContent onClick={handleClick} href={`#${mainContainerId}`}>
      Skip to content
    </SkipToContent>
  );

  return (
    <Page
      variant="docked"
      masthead={masthead}
      skipToContent={pageSkipToContent}
      breadcrumb={dashboardBreadcrumb}
      mainContainerId={mainContainerId}
      isHorizontalSubnavWidthLimited
      isBreadcrumbWidthLimited
      isBreadcrumbGrouped
      additionalGroupedContent={
        <PageSection aria-labelledby="main-title">
          <Content>
            <h1 id="main-title">Main title</h1>
            <p>This is a full page demo.</p>
          </Content>
        </PageSection>
      }
    >
      <PageSection aria-label="Card gallery">
        <Gallery hasGutter>
          {Array.from({ length: 10 }).map((_value, index) => (
            <GalleryItem key={index}>
              <Card>
                <CardBody>This is a card</CardBody>
              </Card>
            </GalleryItem>
          ))}
        </Gallery>
      </PageSection>
    </Page>
  );
};

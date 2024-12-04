import React from 'react';
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
  DropdownGroup,
  DropdownItem,
  DropdownList,
  Gallery,
  GalleryItem,
  Masthead,
  MastheadMain,
  MastheadLogo,
  MastheadContent,
  MastheadBrand,
  MastheadToggle,
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  MenuToggle,
  MenuToggleElement,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
  Popper,
  SkipToContent,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  MenuGroup,
  MenuSearchInput,
  SearchInput,
  Tooltip
} from '@patternfly/react-core';
import { Link } from '@reach/router';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import pfIcon from '@patternfly/react-core/src/demos/assets/pf-logo-small.svg';
import pfLogo from '@patternfly/react-core/src/demos/assets/PF-HorizontalLogo-Color.svg';

interface NavOnSelectProps {
  groupId: number | string;
  itemId: number | string;
  to: string;
}

export const MastheadWithUtilitiesAndUserDropdownMenu: React.FunctionComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);
  const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(1);

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [refFullOptions, setRefFullOptions] = React.useState<Element[]>();
  const [favorites, setFavorites] = React.useState<string[]>([]);
  const [filteredIds, setFilteredIds] = React.useState<string[]>(['*']);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const toggleRef = React.useRef<HTMLButtonElement>(null);

  const onNavSelect = (_event: React.FormEvent<HTMLInputElement>, selectedItem: NavOnSelectProps) => {
    typeof selectedItem.itemId === 'number' && setActiveItem(selectedItem.itemId);
  };

  const onDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onDropdownSelect = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onKebabDropdownToggle = () => {
    setIsKebabDropdownOpen(!isKebabDropdownOpen);
  };

  const onKebabDropdownSelect = () => {
    setIsKebabDropdownOpen(!isKebabDropdownOpen);
  };

  const onFullKebabDropdownToggle = () => {
    setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen);
  };

  const onFullKebabDropdownSelect = () => {
    setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen);
  };

  const handleMenuKeys = (event: KeyboardEvent) => {
    if (!isOpen) {
      return;
    }
    if (menuRef.current?.contains(event.target as Node) || toggleRef.current?.contains(event.target as Node)) {
      if (event.key === 'Escape') {
        setIsOpen(!isOpen);
        toggleRef.current?.focus();
      }
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (isOpen && !menuRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const onToggleClick = (ev: React.MouseEvent) => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      if (menuRef.current) {
        const firstElement = menuRef.current.querySelector(
          'li > button:not(:disabled), li > a:not(:disabled), input:not(:disabled)'
        );
        firstElement && (firstElement as HTMLElement).focus();
        setRefFullOptions(Array.from(menuRef.current.querySelectorAll('li:not(li[role=separator])>*:first-child')));
      }
    }, 0);
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, menuRef]);

  const toggle = (
    <MenuToggle
      aria-label="Toggle"
      ref={toggleRef}
      variant="plain"
      onClick={onToggleClick}
      isExpanded={isOpen}
      style={{ width: 'auto' }}
      icon={<ThIcon />}
    />
  );

  const menuItems = [
    <MenuGroup key="group1" label="Group 1">
      <MenuList>
        <MenuItem itemId="0" id="0" isFavorited={favorites.includes('0')}>
          Application 1
        </MenuItem>
        <MenuItem
          itemId="1"
          id="1"
          isFavorited={favorites.includes('1')}
          to="#default-link2"
          onClick={(ev) => ev.preventDefault()}
        >
          Application 2
        </MenuItem>
      </MenuList>
    </MenuGroup>,
    <Divider key="group1-divider" />,
    <MenuGroup key="group2" label="Group 2">
      <MenuList>
        <MenuItem
          itemId="2"
          id="2"
          isFavorited={favorites.includes('2')}
          component={(props) => <Link {...props} to="#router-link" />}
        >
          @reach/router Link
        </MenuItem>
        <MenuItem
          itemId="3"
          id="3"
          isFavorited={favorites.includes('3')}
          isExternalLink
          icon={<img src={pfIcon} />}
          component={(props) => <Link {...props} to="#router-link2" />}
        >
          @reach/router Link with icon
        </MenuItem>
      </MenuList>
    </MenuGroup>,
    <Divider key="group2-divider" />,
    <MenuList key="other-items">
      <MenuItem key="tooltip-app" isFavorited={favorites.includes('4')} itemId="4" id="4">
        <Tooltip content={<div>Launch Application 3</div>} position="right">
          <span>Application 3 with tooltip</span>
        </Tooltip>
      </MenuItem>
      <MenuItem key="disabled-app" itemId="5" id="5" isDisabled>
        Unavailable Application
      </MenuItem>
    </MenuList>
  ];

  const createFavorites = (favIds: string[]) => {
    const favorites: unknown[] = [];

    menuItems.forEach((item) => {
      if (item.type === MenuList) {
        item.props.children.filter((child) => {
          if (favIds.includes(child.props.itemId)) {
            favorites.push(child);
          }
        });
      } else if (item.type === MenuGroup) {
        item.props.children.props.children.filter((child) => {
          if (favIds.includes(child.props.itemId)) {
            favorites.push(child);
          }
        });
      } else {
        if (favIds.includes(item.props.itemId)) {
          favorites.push(item);
        }
      }
    });

    return favorites;
  };

  const filterItems = (items: any[], filteredIds: string[]) => {
    if (filteredIds.length === 1 && filteredIds[0] === '*') {
      return items;
    }
    let keepDivider = false;
    const filteredCopy = items
      .map((group) => {
        if (group.type === MenuGroup) {
          const filteredGroup = React.cloneElement(group, {
            children: React.cloneElement(group.props.children, {
              children: group.props.children.props.children.filter((child) => {
                if (filteredIds.includes(child.props.itemId)) {
                  return child;
                }
              })
            })
          });
          const filteredList = filteredGroup.props.children;
          if (filteredList.props.children.length > 0) {
            keepDivider = true;
            return filteredGroup;
          } else {
            keepDivider = false;
          }
        } else if (group.type === MenuList) {
          const filteredGroup = React.cloneElement(group, {
            children: group.props.children.filter((child) => {
              if (filteredIds.includes(child.props.itemId)) {
                return child;
              }
            })
          });
          if (filteredGroup.props.children.length > 0) {
            keepDivider = true;
            return filteredGroup;
          } else {
            keepDivider = false;
          }
        } else {
          if ((keepDivider && group.type === Divider) || filteredIds.includes(group.props.itemId)) {
            return group;
          }
        }
      })
      .filter((newGroup) => newGroup);

    if (filteredCopy.length > 0) {
      const lastGroup = filteredCopy.pop();
      if (lastGroup.type !== Divider) {
        filteredCopy.push(lastGroup);
      }
    }

    return filteredCopy;
  };

  const onTextChange = (textValue: string) => {
    if (textValue === '') {
      setFilteredIds(['*']);
      return;
    }

    const filteredIds =
      refFullOptions
        ?.filter((item) => (item as HTMLElement).innerText.toLowerCase().includes(textValue.toString().toLowerCase()))
        .map((item) => item.id) || [];
    setFilteredIds(filteredIds);
  };

  const onFavorite = (event: any, itemId: string, actionId: string) => {
    event.stopPropagation();
    if (actionId === 'fav') {
      const isFavorite = favorites.includes(itemId);
      if (isFavorite) {
        setFavorites(favorites.filter((fav) => fav !== itemId));
      } else {
        setFavorites([...favorites, itemId]);
      }
    }
  };

  const filteredFavorites = filterItems(createFavorites(favorites), filteredIds);
  const filteredItems = filterItems(menuItems, filteredIds);
  if (filteredItems.length === 0) {
    filteredItems.push(<MenuItem key="no-items">No results found</MenuItem>);
  }

  const menu = (
    // eslint-disable-next-line no-console
    <Menu ref={menuRef} onActionClick={onFavorite} onSelect={(_ev, itemId) => console.log('selected', itemId)}>
      <MenuSearchInput>
        <SearchInput aria-label="Filter menu items" onChange={(_event, value) => onTextChange(value)} />
      </MenuSearchInput>
      <Divider />
      <MenuContent>
        {filteredFavorites.length > 0 && (
          <React.Fragment>
            <MenuGroup key="favorites-group" label="Favorites">
              <MenuList>{filteredFavorites}</MenuList>
            </MenuGroup>
            <Divider key="favorites-divider" />
          </React.Fragment>
        )}
        {filteredItems}
      </MenuContent>
    </Menu>
  );

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

  const kebabDropdownItems = (
    <>
      <DropdownItem key="settings">
        <CogIcon /> Settings
      </DropdownItem>
      <DropdownItem key="help">
        <HelpIcon /> Help
      </DropdownItem>
    </>
  );
  const userDropdownItems = [
    <>
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user">User management</DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </>
  ];

  const headerToolbar = (
    <Toolbar id="toolbar" isStatic>
      <ToolbarContent>
        <ToolbarGroup
          variant="action-group-plain"
          align={{ default: 'alignEnd' }}
          gap={{ default: 'gapNone', md: 'gapMd' }}
        >
          <ToolbarItem>
            <Button aria-label="Notifications" variant={ButtonVariant.plain} icon={<BellIcon />} />
          </ToolbarItem>
          <ToolbarGroup variant="action-group-plain" visibility={{ default: 'hidden', lg: 'visible' }}>
            <ToolbarItem visibility={{ default: 'hidden', md: 'hidden', lg: 'visible' }}>
              <Popper trigger={toggle} triggerRef={toggleRef} popper={menu} popperRef={menuRef} isVisible={isOpen} />
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
              isOpen={isKebabDropdownOpen}
              onSelect={onKebabDropdownSelect}
              onOpenChange={(isOpen: boolean) => setIsKebabDropdownOpen(isOpen)}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={onKebabDropdownToggle}
                  isExpanded={isKebabDropdownOpen}
                  variant="plain"
                  aria-label="Settings and help"
                  icon={<EllipsisVIcon aria-hidden="true" />}
                />
              )}
            >
              <DropdownList>{kebabDropdownItems}</DropdownList>
            </Dropdown>
          </ToolbarItem>
          <ToolbarItem visibility={{ md: 'hidden' }}>
            <Dropdown
              isOpen={isFullKebabDropdownOpen}
              onSelect={onFullKebabDropdownSelect}
              onOpenChange={(isOpen: boolean) => setIsFullKebabDropdownOpen(isOpen)}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={onFullKebabDropdownToggle}
                  isExpanded={isFullKebabDropdownOpen}
                  variant="plain"
                  aria-label="Toolbar menu"
                  icon={<EllipsisVIcon aria-hidden="true" />}
                />
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
            onOpenChange={(isOpen: boolean) => setIsDropdownOpen(isOpen)}
            popperProps={{ position: 'right' }}
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={onDropdownToggle}
                isExpanded={isDropdownOpen}
                icon={<Avatar src={imgAvatar} alt="" size="sm" />}
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
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton variant="plain" aria-label="Global navigation">
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <MastheadBrand>
          <MastheadLogo>
            <Brand src={pfLogo} alt="PatternFly" heights={{ default: '36px' }} />
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const pageNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav">
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0} to="#system-panel">
          System panel
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1} to="#policy">
          Policy
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2} to="#auth">
          Authentication
        </NavItem>
        <NavItem itemId={3} isActive={activeItem === 3} to="#network">
          Network services
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4} to="#server">
          Server
        </NavItem>
      </NavList>
    </Nav>
  );

  const sidebar = (
    <PageSidebar>
      <PageSidebarBody>{pageNav}</PageSidebarBody>
    </PageSidebar>
  );

  const mainContainerId = 'main-content-page-layout-tertiary-nav';

  const handleClick = (event) => {
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
      masthead={masthead}
      sidebar={sidebar}
      isManagedSidebar
      skipToContent={pageSkipToContent}
      breadcrumb={dashboardBreadcrumb}
      mainContainerId={mainContainerId}
      isHorizontalSubnavWidthLimited
      isBreadcrumbWidthLimited
      isBreadcrumbGrouped
      additionalGroupedContent={
        <PageSection>
          <Content>
            <h1>Main title</h1>
            <p>This is a full page demo.</p>
          </Content>
        </PageSection>
      }
    >
      <PageSection>
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

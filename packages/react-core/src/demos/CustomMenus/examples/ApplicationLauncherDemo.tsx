import React from 'react';
import {
  MenuToggle,
  MenuSearch,
  MenuSearchInput,
  Tooltip,
  Divider,
  SearchInput,
  Dropdown,
  DropdownGroup,
  DropdownList,
  DropdownItem
} from '@patternfly/react-core';
import ThIcon from '@patternfly/react-icons/dist/js/icons/th-icon';
import brandImg from '@patternfly/react-core/src/demos/assets/PF-IconLogo.svg';

const MockLink: React.FunctionComponent = ({ to, ...props }: any) => <a href={to} {...props}></a>;

export const ApplicationLauncherDemo: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [refFullOptions, setRefFullOptions] = React.useState<Element[]>();
  const [favorites, setFavorites] = React.useState<string[]>([]);
  const [filteredIds, setFilteredIds] = React.useState<string[]>(['*']);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const onToggleClick = () => {
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

  const menuItems = [
    <DropdownGroup key="group1" label="Group 1">
      <DropdownList>
        <DropdownItem value="0" id="0" isFavorited={favorites.includes('0')}>
          Application 1
        </DropdownItem>
        <DropdownItem
          value="1"
          id="1"
          isFavorited={favorites.includes('1')}
          to="#default-link2"
          onClick={(ev) => ev.preventDefault()}
        >
          Application 2
        </DropdownItem>
      </DropdownList>
    </DropdownGroup>,
    <Divider key="group1-divider" />,
    <DropdownGroup key="group2" label="Group 2">
      <DropdownList>
        <DropdownItem
          value="2"
          id="2"
          isFavorited={favorites.includes('2')}
          component={(props) => <MockLink {...props} to="#router-link" />}
        >
          Custom component (such as @reach/router Link)
        </DropdownItem>
        <DropdownItem
          value="3"
          id="3"
          isFavorited={favorites.includes('3')}
          isExternalLink
          icon={<img src={brandImg} alt="" width={25} height={25} />}
          component={(props) => <MockLink {...props} to="#router-link2" />}
        >
          Custom component with icon
        </DropdownItem>
      </DropdownList>
    </DropdownGroup>,
    <Divider key="group2-divider" />,
    <DropdownList key="other-items">
      <DropdownItem key="tooltip-app" isFavorited={favorites.includes('4')} value="4" id="4">
        <Tooltip content={<div>Launch Application 3</div>} position="right">
          <span>Application 3 with tooltip</span>
        </Tooltip>
      </DropdownItem>
      <DropdownItem key="disabled-app" value="5" id="5" isDisabled>
        Unavailable Application
      </DropdownItem>
    </DropdownList>
  ];

  const createFavorites = (favIds: string[]) => {
    const favorites: unknown[] = [];

    menuItems.forEach((item) => {
      if (item.type === DropdownList) {
        item.props.children.filter((child) => {
          if (favIds.includes(child.props.value)) {
            favorites.push(child);
          }
        });
      } else if (item.type === DropdownGroup) {
        item.props.children.props.children.filter((child) => {
          if (favIds.includes(child.props.value)) {
            favorites.push(child);
          }
        });
      } else {
        if (favIds.includes(item.props.value)) {
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
        if (group.type === DropdownGroup) {
          const filteredGroup = React.cloneElement(group, {
            children: React.cloneElement(group.props.children, {
              children: group.props.children.props.children.filter((child) => {
                if (filteredIds.includes(child.props.value)) {
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
        } else if (group.type === DropdownList) {
          const filteredGroup = React.cloneElement(group, {
            children: group.props.children.filter((child) => {
              if (filteredIds.includes(child.props.value)) {
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
          if ((keepDivider && group.type === Divider) || filteredIds.includes(group.props.value)) {
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

  const onFavorite = (event: any, value: string, actionId: string) => {
    event.stopPropagation();
    if (actionId === 'fav') {
      const isFavorite = favorites.includes(value);
      if (isFavorite) {
        setFavorites(favorites.filter((fav) => fav !== value));
      } else {
        setFavorites([...favorites, value]);
      }
    }
  };

  const filteredFavorites = filterItems(createFavorites(favorites), filteredIds);
  const filteredItems = filterItems(menuItems, filteredIds);
  if (filteredItems.length === 0) {
    filteredItems.push(<DropdownItem key="no-items">No results found</DropdownItem>);
  }

  return (
    <Dropdown
      isOpen={isOpen}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      onOpenChangeKeys={['Escape']}
      toggle={(toggleRef) => (
        <MenuToggle
          aria-label="Toggle"
          ref={toggleRef}
          variant="plain"
          onClick={onToggleClick}
          isExpanded={isOpen}
          style={{ width: 'auto' }}
          icon={<ThIcon />}
        />
      )}
      ref={menuRef}
      onActionClick={onFavorite}
      // eslint-disable-next-line no-console
      onSelect={(_ev, value) => console.log('selected', value)}
    >
      <MenuSearch>
        <MenuSearchInput>
          <SearchInput aria-label="Filter menu items" onChange={(_event, value) => onTextChange(value)} />
        </MenuSearchInput>
      </MenuSearch>
      <Divider />
      {filteredFavorites.length > 0 && (
        <React.Fragment>
          <DropdownGroup key="favorites-group" label="Favorites">
            <DropdownList>{filteredFavorites}</DropdownList>
          </DropdownGroup>
          <Divider key="favorites-divider" />
        </React.Fragment>
      )}
      {filteredItems}
    </Dropdown>
  );
};

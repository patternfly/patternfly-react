import React from 'react';
import { MenuToggle, Divider, Dropdown, DropdownGroup, DropdownList, DropdownItem } from '@patternfly/react-core';

export const FavoritesDemo: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [favorites, setFavorites] = React.useState<string[]>([]);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const onToggleClick = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    setTimeout(() => {
      if (menuRef.current) {
        const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
        firstElement && (firstElement as HTMLElement).focus();
      }
    }, 0);
    setIsOpen(!isOpen);
  };

  const menuItems = [
    <DropdownGroup key="group1" label="Group 1">
      <DropdownList>
        <DropdownItem itemId="0" id="0" isFavorited={favorites.includes('0')}>
          Item 1
        </DropdownItem>
        <DropdownItem itemId="1" id="1" isFavorited={favorites.includes('1')}>
          Item 2
        </DropdownItem>
        <DropdownItem itemId="2" id="2" isFavorited={favorites.includes('2')}>
          Item 3
        </DropdownItem>
        <DropdownItem itemId="3" id="3" isFavorited={favorites.includes('3')}>
          Item 4
        </DropdownItem>
      </DropdownList>
    </DropdownGroup>,
    <Divider key="group1-divider" />,
    <DropdownGroup key="group2" label="Group 2">
      <DropdownList>
        <DropdownItem itemId="4" id="4" isFavorited={favorites.includes('4')}>
          Item 5
        </DropdownItem>
        <DropdownItem itemId="5" id="5" isFavorited={favorites.includes('5')}>
          Item 6
        </DropdownItem>
        <DropdownItem itemId="6" id="6" isFavorited={favorites.includes('6')}>
          Item 7
        </DropdownItem>
        <DropdownItem itemId="7" id="7" isFavorited={favorites.includes('7')}>
          Item 8
        </DropdownItem>
      </DropdownList>
    </DropdownGroup>
  ];

  const createFavorites = (favIds: string[]) => {
    const favorites: JSX.Element[] = [];

    menuItems.forEach((item) => {
      if (item.type === DropdownList) {
        item.props.children.filter((child) => {
          if (favIds.includes(child.props.itemId)) {
            favorites.push(child);
          }
        });
      } else if (item.type === DropdownGroup) {
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

  React.useEffect(() => {
    if (favorites.length === 0) {
      const firstElement = menuRef?.current?.querySelector('li > button:not(:disabled)');
      firstElement && (firstElement as HTMLElement).focus();
    }
  }, [favorites]);

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

  return (
    // eslint-disable-next-line no-console
    <Dropdown
      isOpen={isOpen}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      toggle={(toggleRef) => (
        <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
          {isOpen ? 'Expanded' : 'Collapsed'}
        </MenuToggle>
      )}
      ref={menuRef}
      onActionClick={onFavorite}
      // eslint-disable-next-line no-console
      onSelect={(_ev, itemId) => console.log('selected', itemId)}
    >
      {favorites.length > 0 && (
        <React.Fragment>
          <DropdownGroup key="favorites-group" label="Favorites">
            <DropdownList>{createFavorites(favorites)}</DropdownList>
          </DropdownGroup>
          <Divider key="favorites-divider" />
        </React.Fragment>
      )}
      {menuItems}
    </Dropdown>
  );
};

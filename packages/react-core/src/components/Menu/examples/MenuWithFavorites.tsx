import React from 'react';
import { Menu, MenuContent, MenuItem, MenuItemAction, MenuGroup, MenuList, Divider } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

export const MenuWithFavorites: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  const [favorites, setFavorites] = React.useState<string[]>([]);

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: number | string | undefined) => {
    const item = itemId as number; // eslint-disable-next-line no-console
    console.log(`clicked ${item}`);
    setActiveItem(item);
  };

  const onFavorite = (event, itemId: string, actionId: string) => {
    // eslint-disable-next-line no-console
    console.log(`clicked ${itemId} - ${actionId}`);
    if (actionId === 'fav') {
      const isFavorite = favorites.includes(itemId);
      if (isFavorite) {
        setFavorites(favorites.filter(fav => fav !== itemId));
      } else {
        setFavorites([...favorites, itemId]);
      }
    }
  };

  const items = [
    {
      text: 'Item 1',
      description: 'Description 1',
      itemId: 'item-1',
      action: <BarsIcon aria-hidden />,
      actionId: 'bars'
    },
    {
      text: 'Item 2',
      description: 'Description 2',
      itemId: 'item-2',
      action: <ClipboardIcon aria-hidden />,
      actionId: 'clipboard'
    },
    {
      text: 'Item 3',
      description: 'Description 3',
      itemId: 'item-3',
      action: <BellIcon aria-hidden />,
      actionId: 'bell'
    }
  ];

  return (
    <Menu onSelect={onSelect} onActionClick={onFavorite} activeItemId={activeItem}>
      <MenuContent>
        {favorites.length > 0 && (
          <React.Fragment>
            <MenuGroup label="Favorites" labelHeadingLevel="h3">
              <MenuList>
                {items
                  .filter(item => favorites.includes(item.itemId))
                  .map(item => {
                    const { text, description, itemId, action, actionId } = item;
                    return (
                      <MenuItem
                        key={`fav-${itemId}`}
                        isFavorited
                        description={description}
                        itemId={itemId}
                        actions={<MenuItemAction actionId={actionId} icon={action} aria-label={actionId} />}
                      >
                        {text}
                      </MenuItem>
                    );
                  })}
              </MenuList>
            </MenuGroup>
            <Divider />
          </React.Fragment>
        )}
        <MenuGroup label="All actions" labelHeadingLevel="h3">
          <MenuList>
            {items.map(item => {
              const { text, description, itemId, action, actionId } = item;
              const isFavorited = favorites.includes(item.itemId);
              return (
                <MenuItem
                  key={itemId}
                  isFavorited={isFavorited}
                  description={description}
                  itemId={itemId}
                  actions={<MenuItemAction actionId={actionId} icon={action} aria-label={actionId} />}
                >
                  {text}
                </MenuItem>
              );
            })}
          </MenuList>
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};

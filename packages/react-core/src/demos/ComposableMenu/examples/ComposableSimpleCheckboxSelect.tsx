import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuList, MenuItem, Popper, Badge } from '@patternfly/react-core';

export const ComposableSimpleCheckboxSelect: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);
  const toggleRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const handleMenuKeys = React.useCallback(
    event => {
      if (menuRef.current) {
        if (isOpen && menuRef.current.contains(event.target as Node)) {
          if (event.key === 'Escape' || event.key === 'Tab') {
            setIsOpen(!isOpen);
            toggleRef?.current?.focus();
          }
        }
      }
    },
    [isOpen]
  );

  const handleClickOutside = React.useCallback(
    event => {
      if (isOpen && !menuRef?.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside, handleMenuKeys]);

  const onToggleClick = (ev: React.MouseEvent) => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      if (menuRef.current) {
        const firstElement = menuRef.current.querySelector('li > button:not(:disabled), li > a:not(:disabled)');
        firstElement && (firstElement as HTMLElement).focus();
      }
    }, 0);
    setIsOpen(!isOpen);
  };

  const onSelect = (event: React.MouseEvent | undefined, itemId: string | number | undefined) => {
    if (typeof itemId === 'string' || typeof itemId === 'undefined') {
      return;
    }

    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const toggle = (
    <MenuToggle
      ref={toggleRef}
      {...(selectedItems.length > 0 && { badge: <Badge isRead>{selectedItems.length}</Badge> })}
      onClick={onToggleClick}
      isExpanded={isOpen}
      style={
        {
          width: '220px'
        } as React.CSSProperties
      }
    >
      Filter by status
    </MenuToggle>
  );
  const menu = (
    <Menu ref={menuRef} id="select-menu" onSelect={onSelect} selected={selectedItems}>
      <MenuContent>
        <MenuList>
          <MenuItem hasCheck itemId={0} isSelected={selectedItems.includes(0)}>
            Debug
          </MenuItem>
          <MenuItem hasCheck itemId={1} isSelected={selectedItems.includes(1)}>
            Info
          </MenuItem>
          <MenuItem hasCheck itemId={2} isSelected={selectedItems.includes(2)}>
            Warn
          </MenuItem>
          <MenuItem hasCheck isDisabled itemId={4} isSelected={selectedItems.includes(4)}>
            Error
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
  return <Popper appendTo={toggleRef.current || undefined} trigger={toggle} popper={menu} isVisible={isOpen} />;
};

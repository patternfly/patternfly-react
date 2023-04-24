import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuList, MenuItem, Popper, MenuFooter } from '@patternfly/react-core';

export const MenuWithFooter: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string>('Select a value');
  const toggleRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const handleMenuKeys = (event: KeyboardEvent) => {
    if (isOpen && menuRef.current?.contains(event.target as Node)) {
      if (event.key === 'Escape') {
        // Tab should not close the menu to enable keyboard access to the footer element
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

  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, menuRef]);

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

  const toggle = (
    <MenuToggle
      ref={toggleRef}
      onClick={onToggleClick}
      isExpanded={isOpen}
      style={
        {
          width: '200px'
        } as React.CSSProperties
      }
    >
      {selected}
    </MenuToggle>
  );

  function onSelect(event: React.MouseEvent | undefined, itemId: string | number | undefined) {
    if (typeof itemId === 'undefined') {
      return;
    }

    setSelected(itemId.toString());
  }

  const menu = (
    <Menu ref={menuRef} id="menu-with-footer" onSelect={onSelect} selected={selected}>
      <MenuContent>
        <MenuList>
          <MenuItem itemId="Option 1">Option 1</MenuItem>
          <MenuItem itemId="Option 2">Option 2</MenuItem>
          <MenuItem itemId="Option 3">Option 3</MenuItem>
        </MenuList>
      </MenuContent>
      <MenuFooter></MenuFooter>
    </Menu>
  );
  return <Popper trigger={toggle} triggerRef={toggleRef} popper={menu} popperRef={menuRef} isVisible={isOpen} />;
};

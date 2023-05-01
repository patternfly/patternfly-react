import React from 'react';
import {
  MenuToggle,
  MenuItemAction,
  Dropdown,
  DropdownGroup,
  DropdownList,
  DropdownItem
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

export const ActionsMenuDemo: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const onSelect = (event: React.MouseEvent | undefined, itemId: string | number | undefined) => {
    if (typeof itemId === 'string' || typeof itemId === 'undefined') {
      return;
    }

    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const onToggleClick = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    setTimeout(() => {
      if (menuRef.current) {
        const firstElement = menuRef.current.querySelector('li > button:not(:disabled), li > a:not(:disabled)');
        firstElement && (firstElement as HTMLElement).focus();
      }
    }, 0);
    setIsOpen(!isOpen);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      ref={menuRef}
      toggle={(toggleRef) => (
        <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
          {isOpen ? 'Expanded' : 'Collapsed'}
        </MenuToggle>
      )}
      // eslint-disable-next-line no-console
      onActionClick={(event, itemId, actionId) => console.log(`clicked on ${itemId} - ${actionId}`)}
      onSelect={onSelect}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
    >
      <DropdownGroup label="Actions">
        <DropdownList>
          <DropdownItem
            isSelected={selectedItems.includes(0)}
            actions={
              <MenuItemAction
                icon={<CodeBranchIcon aria-hidden />}
                actionId="code"
                // eslint-disable-next-line no-console
                onClick={() => console.log('clicked on code icon')}
                aria-label="Code"
              />
            }
            description="This is a description"
            itemId={0}
          >
            Item 1
          </DropdownItem>
          <DropdownItem
            isDisabled
            isSelected={selectedItems.includes(1)}
            actions={<MenuItemAction icon={<BellIcon aria-hidden />} actionId="alert" aria-label="Alert" />}
            description="This is a description"
            itemId={1}
          >
            Item 2
          </DropdownItem>
          <DropdownItem
            isSelected={selectedItems.includes(2)}
            actions={<MenuItemAction icon={<ClipboardIcon aria-hidden />} actionId="copy" aria-label="Copy" />}
            itemId={2}
          >
            Item 3
          </DropdownItem>
          <DropdownItem
            isSelected={selectedItems.includes(3)}
            actions={<MenuItemAction icon={<BarsIcon aria-hidden />} actionId="expand" aria-label="Expand" />}
            description="This is a description"
            itemId={3}
          >
            Item 4
          </DropdownItem>
        </DropdownList>
      </DropdownGroup>
    </Dropdown>
  );
};

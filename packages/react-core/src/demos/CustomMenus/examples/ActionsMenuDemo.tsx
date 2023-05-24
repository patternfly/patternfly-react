import React from 'react';
import { MenuToggle, MenuItemAction, Select, SelectGroup, SelectList, SelectOption } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

export const ActionsMenuDemo: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const onSelect = (event: React.MouseEvent | undefined, value: string | number | undefined) => {
    if (typeof value === 'string' || typeof value === 'undefined') {
      return;
    }

    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((id) => id !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Select
      isOpen={isOpen}
      ref={menuRef}
      toggle={(toggleRef) => (
        <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
          {isOpen ? 'Expanded' : 'Collapsed'}
        </MenuToggle>
      )}
      // eslint-disable-next-line no-console
      onActionClick={(event, value, actionId) => console.log(`clicked on ${value} - ${actionId}`)}
      onSelect={onSelect}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
    >
      <SelectGroup label="Actions">
        <SelectList>
          <SelectOption
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
            value={0}
          >
            Item 1
          </SelectOption>
          <SelectOption
            isDisabled
            isSelected={selectedItems.includes(1)}
            actions={<MenuItemAction icon={<BellIcon aria-hidden />} actionId="alert" aria-label="Alert" />}
            description="This is a description"
            value={1}
          >
            Item 2
          </SelectOption>
          <SelectOption
            isSelected={selectedItems.includes(2)}
            actions={<MenuItemAction icon={<ClipboardIcon aria-hidden />} actionId="copy" aria-label="Copy" />}
            value={2}
          >
            Item 3
          </SelectOption>
          <SelectOption
            isSelected={selectedItems.includes(3)}
            actions={<MenuItemAction icon={<BarsIcon aria-hidden />} actionId="expand" aria-label="Expand" />}
            description="This is a description"
            value={3}
          >
            Item 4
          </SelectOption>
        </SelectList>
      </SelectGroup>
    </Select>
  );
};

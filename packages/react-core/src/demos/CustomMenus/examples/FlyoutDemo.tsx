import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuList, MenuItem, MenuContainer } from '@patternfly/react-core';

/* eslint-disable no-console */
const onSelect = (event: React.MouseEvent | undefined, itemId: string | number | undefined) =>
  console.log('selected', itemId);
/* eslint-enable no-console */
interface FlyoutMenuProps {
  children?: React.ReactElement;
  depth: number;
}

const FlyoutMenu: React.FunctionComponent<FlyoutMenuProps> = ({ depth, children }: FlyoutMenuProps) => (
  <Menu key={depth} containsFlyout id={`menu-${depth}`} onSelect={onSelect}>
    <MenuContent>
      <MenuList>
        <MenuItem flyoutMenu={children} itemId={`next-menu-${depth}`}>
          Next menu
        </MenuItem>
        {Array.from(new Array(15 - depth), (x, i) => i + 1).map((j) => (
          <MenuItem key={`${depth}-${j}`} itemId={`${depth}-${j}`}>
            Menu {depth} item {j}
          </MenuItem>
        ))}
        <MenuItem flyoutMenu={children} itemId={`next-menu-2-${depth}`}>
          Next menu
        </MenuItem>
      </MenuList>
    </MenuContent>
  </Menu>
);

export const FlyoutDemo: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const toggleRef = React.useRef<HTMLButtonElement>(null);

  let curFlyout = <FlyoutMenu depth={1} />;
  for (let i = 2; i < 14; i++) {
    curFlyout = <FlyoutMenu depth={i}>{curFlyout}</FlyoutMenu>;
  }

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
      {isOpen ? 'Expanded' : 'Collapsed'}
    </MenuToggle>
  );

  const menu = (
    <Menu ref={menuRef} containsFlyout onSelect={onSelect}>
      <MenuContent>
        <MenuList>
          <MenuItem itemId="start">Start rollout</MenuItem>
          <MenuItem itemId="pause">Pause rollouts</MenuItem>
          <MenuItem itemId="storage">Add storage</MenuItem>
          <MenuItem description="Description" flyoutMenu={curFlyout} itemId="next-menu-root">
            Edit
          </MenuItem>
          <MenuItem itemId="delete">Delete deployment config</MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );

  return (
    <MenuContainer
      isOpen={isOpen}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      menu={menu}
      menuRef={menuRef}
      toggle={toggle}
      toggleRef={toggleRef}
    />
  );
};

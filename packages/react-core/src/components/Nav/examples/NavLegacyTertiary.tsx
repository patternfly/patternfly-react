import React from 'react';
import { Nav, NavItem, NavList } from '@patternfly/react-core';

export const NavLegacyTertiary: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (result: { itemId: number | string }) => {
    setActiveItem(result.itemId as number);
  };

  return (
    <Nav onSelect={onSelect} variant="tertiary" aria-label="Tertiary global nav">
      <NavList>
        {Array.apply(0, Array(10)).map(function(_item, index: number) {
          const num = index + 1;
          return (
            <NavItem
              preventDefault
              key={num}
              itemId={num}
              isActive={activeItem === num}
              id={`legacy-tertiary-${num}`}
              to={`#legacy-tertiary-${num}`}
            >
              Tertiary nav item {num}
            </NavItem>
          );
        })}
      </NavList>
    </Nav>
  );
};

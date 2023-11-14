import React from 'react';
import { Nav, NavItem, NavList } from '@patternfly/react-core';

export const NavHorizontalSubNav: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (_event: React.FormEvent<HTMLInputElement>, result: { itemId: number | string }) => {
    setActiveItem(result.itemId as number);
  };

  return (
    <Nav onSelect={onSelect} variant="horizontal-subnav" aria-label="Horizontal subnav local">
      <NavList>
        {Array.from({ length: 10 }).map((_value, index) => {
          const num = index + 1;
          return (
            <NavItem
              preventDefault
              key={num}
              itemId={num}
              isActive={activeItem === num}
              id={`horizontal-subnav-${num}`}
              to={`#horizontal-subnav-${num}`}
            >
              Horizontal subnav item {num}
            </NavItem>
          );
        })}
      </NavList>
    </Nav>
  );
};

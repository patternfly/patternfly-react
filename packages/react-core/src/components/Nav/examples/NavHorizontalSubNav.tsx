import React from 'react';
import { Nav, NavItem, NavList } from '@patternfly/react-core';

export const NavHorizontalSubNav: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (result: { itemId: number | string }) => {
    setActiveItem(result.itemId as number);
  };

  return (
    <Nav onSelect={onSelect} variant="horizontal-subnav" aria-label="Horizontal subnav global nav">
      <NavList>
        {Array.apply(0, Array(10)).map(function(_item, index: number) {
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

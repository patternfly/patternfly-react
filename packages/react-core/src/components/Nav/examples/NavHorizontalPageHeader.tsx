import React from 'react';
import { Nav, NavItem, NavList, PageHeader } from '@patternfly/react-core';

export const NavHorizontalPageHeader: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (result: { itemId: number | string }) => {
    setActiveItem(result.itemId as number);
  };

  const nav = (
    <Nav onSelect={onSelect} variant="horizontal" aria-label="Horizontal global nav">
      <NavList>
        {Array.apply(0, Array(10)).map(function(_item, index: number) {
          const num = index + 1;
          return (
            <NavItem
              preventDefault
              key={num}
              itemId={num}
              isActive={activeItem === num}
              id={`horizontal-pageHeader-${num}`}
              to={`#horizontal-pageHeader-${num}`}
            >
              Horizontal nav item {num}
            </NavItem>
          );
        })}
      </NavList>
    </Nav>
  );

  return <PageHeader topNav={nav} />;
};

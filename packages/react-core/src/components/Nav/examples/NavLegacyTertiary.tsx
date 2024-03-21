import { FunctionComponent, FormEvent, useState } from 'react';
import { Nav, NavItem, NavList } from '@patternfly/react-core';

export const NavLegacyTertiary: FunctionComponent = () => {
  const [activeItem, setActiveItem] = useState(0);

  const onSelect = (_event: FormEvent<HTMLInputElement>, result: { itemId: number | string }) => {
    setActiveItem(result.itemId as number);
  };

  return (
    <Nav onSelect={onSelect} variant="tertiary" aria-label="Tertiary local">
      <NavList>
        {Array.from({ length: 10 }).map(function (_value, index) {
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

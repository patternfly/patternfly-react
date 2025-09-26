import figma from '@figma/code-connect';
import {
  Button,
  Masthead,
  MastheadContent,
  MastheadMain,
  MastheadToggle,
  Menu,
  MenuSearch,
  MenuSearchInput,
  SearchInput,
  Divider,
  MenuContent,
  MenuList,
  MenuItem,
  Nav,
  NavItem,
  NavList
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import { useState } from 'react';

// TODO: DESIGN: Create masthead main section MastheadMain MastheadContent
// TODO: DESIGN: Move Context Switcher, Horizontal Nav, etc to MastheadContent
// TODO: DESIGN: Create necessary wrappers for MastheadToggle, MastheadBrand, MastheadContent
// Documentation for Masthead can be found at https://www.patternfly.org/components/masthead

const sharedProps = {
  mastheadContent: figma.enum('Masthead content', {
    'Context switcher': (
      <Menu onSelect={() => {}} activeItemId={0}>
        <MenuSearch>
          <MenuSearchInput>
            <SearchInput value={''} aria-label="Filter menu items" onChange={() => {}} />
          </MenuSearchInput>
        </MenuSearch>
        <Divider />
        <MenuContent>
          <MenuList>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
          </MenuList>
        </MenuContent>
      </Menu>
    ),
    'Horizontal navigation': (
      <Nav onSelect={() => {}} variant="horizontal" aria-label="Horizontal nav local">
        <NavList>
          {Array.from({ length: 10 }).map((_value, index) => {
            const num = index + 1;
            return (
              <NavItem
                preventDefault
                key={num}
                itemId={num}
                isActive={activeItem === num}
                id={`horizontal-nav-${num}`}
                to={`#horizontal-nav-${num}`}
              >
                Horizontal navigation item {num}
              </NavItem>
            );
          })}
        </NavList>
      </Nav>
    )
  })
};

figma.connect(
  Masthead,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-6642',
  {
    props: {
      ...sharedProps,
      mastheadBrand: figma.children('Masthead logo'),
      mastheadToggle: figma.boolean('Left Menu Toggle', {
        true: (
          <MastheadToggle>
            <Button variant="plain" onClick={() => {}} aria-label="Global navigation" icon={<BarsIcon />} />
          </MastheadToggle>
        ),
        false: undefined
      })
    },
    example: (props) => {
      /* eslint-disable */
      const [activeItem, setActiveItem] = useState(0);
      /* eslint-enable */

      return (
        <Masthead id="basic-example">
          <MastheadMain>
            {props.mastheadToggle}
            {props.mastheadBrand}
          </MastheadMain>
          <MastheadContent>
            <span>{props.mastheadContent}</span>
          </MastheadContent>
        </Masthead>
      );
    }
  }
);

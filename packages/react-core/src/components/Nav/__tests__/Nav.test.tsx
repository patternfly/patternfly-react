import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Nav, NavContext } from '../Nav';
import { NavList } from '../NavList';
import { NavGroup } from '../NavGroup';
import { NavItem } from '../NavItem';
import { NavExpandable } from '../NavExpandable';

const props = {
  items: [
    { to: '#link1', label: 'Link 1' },
    { to: '#link2', label: 'Link 2' },
    { to: '#link3', label: 'Link 3' },
    { to: '#link4', label: 'Link 4' }
  ]
};

// eslint-disable-next-line no-undef
beforeEach(() => {
  window.location.hash = '#link1';
});

const renderNav = (ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>) =>
  render(<NavContext.Provider value={{ onSelect: jest.fn(), onToggle: jest.fn() }}>{ui}</NavContext.Provider>);

describe('Nav', () => {
  test('Default Nav List', () => {
    renderNav(
      <Nav className="test-nav-class">
        <NavList className="test-nav-list-class">
          {props.items.map(item => (
            <NavItem to={item.to} key={item.to} className="test-nav-item-class">
              {item.label}
            </NavItem>
          ))}
        </NavList>
      </Nav>
    );
    expect(screen.getByRole('navigation').outerHTML).toMatchSnapshot();
  });

  test('Dark Nav List', () => {
    renderNav(
      <Nav className="test=nav-class" theme="dark">
        <NavList className="test-nav-list-class">
          {props.items.map(item => (
            <NavItem to={item.to} key={item.to} className="test-nav-item-class">
              {item.label}
            </NavItem>
          ))}
        </NavList>
      </Nav>
    );
    expect(screen.getByRole('navigation').outerHTML).toMatchSnapshot();
  });

  test('Default Nav List - Trigger item active update', () => {
    renderNav(
      <Nav>
        <NavList>
          {props.items.map(item => (
            <NavItem to={item.to} key={item.to}>
              {item.label}
            </NavItem>
          ))}
        </NavList>
      </Nav>
    );

    userEvent.click(screen.getByText('Link 2'));
    expect(screen.getByRole('navigation').outerHTML).toMatchSnapshot();
  });

  test('Expandable Nav List', () => {
    renderNav(
      <Nav>
        <NavList>
          <NavExpandable id="grp-1" title="Section 1">
            {props.items.map(item => (
              <NavItem to={item.to} key={item.to}>
                {item.label}
              </NavItem>
            ))}
          </NavExpandable>
        </NavList>
      </Nav>
    );
    expect(screen.getByRole('navigation').outerHTML).toMatchSnapshot();
  });

  test('Expandable Nav verify onExpand', () => {
    const onExpand = jest.fn();

    renderNav(
      <Nav>
        <NavList>
          <NavExpandable id="grp-1" title="Section 1" onExpand={onExpand}>
            {props.items.map(item => (
              <NavItem to={item.to} key={item.to}>
                {item.label}
              </NavItem>
            ))}
          </NavExpandable>
        </NavList>
      </Nav>
    );

    userEvent.click(screen.getByRole('button'));
    expect(onExpand).toBeCalled();
  });

  test('Expandable Nav List - Trigger toggle', () => {
    window.location.hash = '#link2';
    renderNav(
      <Nav>
        <NavList>
          <NavExpandable id="grp-1" title="Section 1" className="expandable-group" isExpanded>
            {props.items.map(item => (
              <NavItem to={item.to} key={item.to}>
                {item.label}
              </NavItem>
            ))}
          </NavExpandable>
        </NavList>
      </Nav>
    );

    userEvent.click(screen.getByText('Section 1'));
    expect(screen.getByRole('navigation').outerHTML).toMatchSnapshot();
  });

  test('Expandable Nav List with aria label', () => {
    renderNav(
      <Nav aria-label="Test">
        <NavList>
          <NavExpandable id="grp-1" title="Section 1" srText="Section 1 - Example sub-navigation">
            {props.items.map(item => (
              <NavItem to={item.to} key={item.to}>
                {item.label}
              </NavItem>
            ))}
          </NavExpandable>
        </NavList>
      </Nav>
    );
    expect(screen.getByRole('navigation').outerHTML).toMatchSnapshot();
  });

  test('Nav Grouped List', () => {
    renderNav(
      <Nav>
        <NavGroup id="grp-1" title="Section 1">
          <NavList>
            {props.items.map(item => (
              <NavItem to={item.to} key={`section1_${item.to}`}>
                {item.label}
              </NavItem>
            ))}
          </NavList>
        </NavGroup>
        <NavGroup id="grp-2" title="Section 2">
          <NavList>
            {props.items.map(item => (
              <NavItem to={item.to} key={`section2_${item.to}`}>
                {item.label}
              </NavItem>
            ))}
          </NavList>
        </NavGroup>
      </Nav>
    );
    expect(screen.getByRole('navigation').outerHTML).toMatchSnapshot();
  });

  test('Horizontal Nav List', () => {
    renderNav(
      <Nav variant="horizontal">
        <NavList>
          {props.items.map(item => (
            <NavItem to={item.to} key={item.to}>
              {item.label}
            </NavItem>
          ))}
        </NavList>
      </Nav>
    );
    expect(screen.getByRole('navigation').outerHTML).toMatchSnapshot();
  });

  test('Horizontal SubNav List', () => {
    renderNav(
      <Nav variant="horizontal-subnav">
        <NavList>
          {props.items.map(item => (
            <NavItem to={item.to} key={item.to}>
              {item.label}
            </NavItem>
          ))}
        </NavList>
      </Nav>
    );
    expect(screen.getByRole('navigation').outerHTML).toMatchSnapshot();
  });

  test('Tertiary Nav List', () => {
    renderNav(
      <Nav variant="tertiary">
        <NavList>
          {props.items.map(item => (
            <NavItem to={item.to} key={item.to}>
              {item.label}
            </NavItem>
          ))}
        </NavList>
      </Nav>
    );
    expect(screen.getByRole('navigation').outerHTML).toMatchSnapshot();
  });

  test('Nav List with custom item nodes', () => {
    renderNav(
      <Nav variant="tertiary">
        <NavList>
          <NavItem to="/components/nav#link1" className="test-nav-item-class">
            <div className="my-custom-node">My custom node</div>
          </NavItem>
        </NavList>
      </Nav>
    );
    expect(screen.getByRole('navigation').outerHTML).toMatchSnapshot();
  });
});

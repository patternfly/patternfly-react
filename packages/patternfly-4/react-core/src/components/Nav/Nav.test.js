import React from 'react';
import { mount } from 'enzyme';
import Nav from './Nav';
import NavList from './NavList';
import NavGroup from './NavGroup';
import NavItem from './NavItem';
import NavExpandable from './NavExpandable';

const props = {
  items: [
    { to: '#link1', label: 'Link 1' },
    { to: '#link2', label: 'Link 2' },
    { to: '#link3', label: 'Link 3' },
    { to: '#link4', label: 'Link 4' }
  ]
};

beforeEach(() => {
  window.location.hash = '#link1';
});

const context = {
  onSelect: () => undefined,
  onToggle: () => undefined
};

test('Default Nav List', () => {
  const view = mount(
    <Nav aria-label="Test">
      <NavList>
        {props.items.map(item => (
          <NavItem to={item.to} key={item.to}>
            {item.label}
          </NavItem>
        ))}
      </NavList>
    </Nav>,
    { context }
  );
  expect(view).toMatchSnapshot();
});

test('Default Nav List - Trigger item active update', () => {
  window.location.hash = '#link2';
  const view = mount(
    <Nav aria-label="Test">
      <NavList>
        {props.items.map(item => (
          <NavItem to={item.to} key={item.to}>
            {item.label}
          </NavItem>
        ))}
      </NavList>
    </Nav>,
    { context }
  );
  view
    .find({ href: '#link2' })
    .first()
    .simulate('click');
  expect(view).toMatchSnapshot();
});

test('Simple Nav List', () => {
  const view = mount(
    <Nav aria-label="Test">
      <NavList variant="simple">
        {props.items.map(item => (
          <NavItem to={item.to} key={item.to}>
            {item.label}
          </NavItem>
        ))}
      </NavList>
    </Nav>,
    { context }
  );
  expect(view).toMatchSnapshot();
});

test('Expandable Nav List', () => {
  const view = mount(
    <Nav aria-label="Test">
      <NavList>
        <NavExpandable id="grp-1" title="Section 1">
          {props.items.map(item => (
            <NavItem to={item.to} key={item.to}>
              {item.label}
            </NavItem>
          ))}
        </NavExpandable>
      </NavList>
    </Nav>,
    { context }
  );
  expect(view).toMatchSnapshot();
});

test('Expandable Nav List - Trigger toggle', () => {
  window.location.hash = '#link2';
  const view = mount(
    <Nav aria-label="Test">
      <NavList>
        <NavExpandable id="grp-1" title="Section 1" className="expandable-group" isExpanded>
          {props.items.map(item => (
            <NavItem to={item.to} key={item.to}>
              {item.label}
            </NavItem>
          ))}
        </NavExpandable>
      </NavList>
    </Nav>,
    { context }
  );
  view
    .find('li.expandable-group')
    .first()
    .simulate('click');
  expect(view).toMatchSnapshot();
});

test('Expandable Nav List with aria label', () => {
  const view = mount(
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
    </Nav>,
    { context }
  );
  expect(view).toMatchSnapshot();
});

test('Nav Grouped List', () => {
  const view = mount(
    <Nav aria-label="Test">
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
    </Nav>,
    { context }
  );
  expect(view).toMatchSnapshot();
});

test('Horizontal Nav List', () => {
  const view = mount(
    <Nav aria-label="Test">
      <NavList variant="horizontal">
        {props.items.map(item => (
          <NavItem to={item.to} key={item.to}>
            {item.label}
          </NavItem>
        ))}
      </NavList>
    </Nav>,
    { context }
  );
  expect(view).toMatchSnapshot();
});

test('Tertiary Nav List', () => {
  const view = mount(
    <Nav aria-label="Test">
      <NavList variant="tertiary">
        {props.items.map(item => (
          <NavItem to={item.to} key={item.to}>
            {item.label}
          </NavItem>
        ))}
      </NavList>
    </Nav>,
    { context }
  );
  expect(view).toMatchSnapshot();
});

test('Nav List with custom item nodes', () => {
  const CustomNode = () => <div>My custom node</div>;
  const view = mount(
    <Nav aria-label="Test">
      <NavList variant="tertiary">
        <NavItem to="/components/nav#link1">
          <CustomNode />
        </NavItem>
      </NavList>
    </Nav>,
    { context }
  );
  expect(view).toMatchSnapshot();
});

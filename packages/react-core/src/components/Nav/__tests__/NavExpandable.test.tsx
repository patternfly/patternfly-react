import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { NavExpandable } from '../NavExpandable';
import { NavItem } from '../NavItem';
import { Nav, NavContext } from '../Nav';
import { NavList } from '../NavList';

const props = {
  items: [
    { to: '#link1', label: 'Link 1' },
    { to: '#link2', label: 'Link 2' },
    { to: '#link3', label: 'Link 3' }
  ]
};

describe('NavExpandable', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('check that inert is on the section element by default', () => {
    render(
      <Nav onSelect={jest.fn()} onToggle={jest.fn()}>
        <NavList>
          <NavExpandable id="grp-1" title="Expandable group" data-testid="test-id">
            {props.items.map((item) => (
              <NavItem to={item.to} key={item.to}>
                {item.label}
              </NavItem>
            ))}
          </NavExpandable>
        </NavList>
      </Nav>
    );
    const wrapper = screen.getByTestId('test-id');
    const section = wrapper.querySelector('.pf-v6-c-nav__subnav');
    expect(section).toHaveAttribute('inert', '');
  });

  test('check that inert is NOT on the section when isExpanded is true', () => {
    render(
      <Nav onSelect={jest.fn()} onToggle={jest.fn()}>
        <NavList>
          <NavExpandable id="grp-1" title="Expandable group" isExpanded={true} data-testid="test-id">
            {props.items.map((item) => (
              <NavItem to={item.to} key={item.to}>
                {item.label}
              </NavItem>
            ))}
          </NavExpandable>
        </NavList>
      </Nav>
    );

    const wrapper = screen.getByTestId('test-id');
    const section = wrapper.querySelector('.pf-v6-c-nav__subnav');
    expect(section).not.toHaveAttribute('inert', '');
  });
});

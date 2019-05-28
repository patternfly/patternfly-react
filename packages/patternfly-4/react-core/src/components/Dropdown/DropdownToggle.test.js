import React from 'react';
import { mount } from 'enzyme';
import DropdownToggle from './DropdownToggle';

describe('API', () => {
  test('click on closed', () => {
    const mockToggle = jest.fn();
    const view = mount(
      <DropdownToggle onToggle={mockToggle} parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );

    view
      .find('button')
      .first()
      .simulate('click');
    expect(mockToggle.mock.calls[0][0]).toBe(true);
  });

  test('click on opened', () => {
    const mockToggle = jest.fn();
    const view = mount(
      <DropdownToggle id="Dropdown Toggle" onToggle={mockToggle} isOpen parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );

    view
      .find('button')
      .first()
      .simulate('click');
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });

  test('click on document', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const mockToggle = jest.fn();
    mount(
      <DropdownToggle id="Dropdown Toggle" onToggle={mockToggle} isOpen parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );

    map.mousedown({ target: document });
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });

  test('touch on document', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const mockToggle = jest.fn();
    mount(
      <DropdownToggle id="Dropdown Toggle" onToggle={mockToggle} isOpen parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );

    map.touchstart({ target: document });
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });

  test('on click outside has been removed', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    document.removeEventListener = jest.fn((event, cb) => {
      if (map[event] === cb) map[event] = () => {};
    });
    const mockToggle = jest.fn();
    const view = mount(
      <DropdownToggle id="Dropdown Toggle" onToggle={mockToggle} isOpen parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    view.unmount();
    map.mousedown({ target: document });
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(document.removeEventListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
  });

  test('on touch outside has been removed', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    document.removeEventListener = jest.fn((event, cb) => {
      if (map[event] === cb) map[event] = () => {};
    });
    const mockToggle = jest.fn();
    const view = mount(
      <DropdownToggle id="Dropdown Toggle" onToggle={mockToggle} isOpen parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    view.unmount();
    map.touchstart({ target: document });
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(document.removeEventListener).toHaveBeenCalledWith('touchstart', expect.any(Function));
  });
});

describe('state', () => {
  test('hover', () => {
    const view = mount(
      <DropdownToggle id="Dropdown Toggle" isHovered parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    expect(view).toMatchSnapshot();
  });

  test('active', () => {
    const view = mount(
      <DropdownToggle id="Dropdown Toggle" isActive parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    expect(view).toMatchSnapshot();
  });

  test('focus', () => {
    const view = mount(
      <DropdownToggle id="Dropdown Toggle" isFocused parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    expect(view).toMatchSnapshot();
  });
});

import React from 'react';
import { mount } from 'enzyme';
import DropdownToggle from './DropdownToggle';

describe('API', () => {
  test('click on closed', () => {
    const mockToggle = jest.fn();
    const view = mount(
      <DropdownToggle
        onToggle={mockToggle}
        parentRef={document.createElement('div')}
        focusedItemRef={document.createElement('div')}
      >
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
      <DropdownToggle
        onToggle={mockToggle}
        isOpen
        parentRef={document.createElement('div')}
        focusedItemRef={document.createElement('div')}
      >
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
      <DropdownToggle onToggle={mockToggle} isOpen parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );

    map.mousedown({ target: document });
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });

  test('on click outside has been removed', () => {
    const map = {};
    document.removeEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const mockToggle = jest.fn();
    const view = mount(
      <DropdownToggle onToggle={mockToggle} isOpen parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    view.unmount();
    setTimeout(() => {
      map.mousedown({ target: document });
      expect(mockToggle.mock.calls).toHaveLength(0);
      expect(document.removeEventListener.mock.calls).toHaveLength(1);
    });
  });
});

test('esc keypress fires onToggle callback if dropdown contains focus', () => {
  const map = {};
  const mockToggle = jest.fn();
  const element = document.createElement('div');
  document.addEventListener = jest.fn((event, cb) => {
    map[event] = cb;
  });
  const view = mount(
    <DropdownToggle onToggle={mockToggle} parentRef={element} focusedItemRef={element}>
      Dropdown
    </DropdownToggle>
  );

  map.keydown({ keyCode: 27 });
  expect(mockToggle).toHaveBeenCalled();
  view.unmount();
});

test('fires onToggle if keyboard user refocuses dropdown after having tabbed away', () => {
  const mockToggle = jest.fn();
  const element = document.createElement('div');
  const view = mount(
    <DropdownToggle onToggle={mockToggle} parentRef={element} focusOnReentry={element}>
      Dropdown
    </DropdownToggle>
  );

  view.find(DropdownToggle).simulate('focus');
  expect(mockToggle).toHaveBeenCalledWith(true);
});

describe('state', () => {
  test('hover', () => {
    const view = mount(
      <DropdownToggle isHovered parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    expect(view).toMatchSnapshot();
  });

  test('active', () => {
    const view = mount(
      <DropdownToggle isActive parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    expect(view).toMatchSnapshot();
  });

  test('focus', () => {
    const view = mount(
      <DropdownToggle isFocused parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    expect(view).toMatchSnapshot();
  });
});

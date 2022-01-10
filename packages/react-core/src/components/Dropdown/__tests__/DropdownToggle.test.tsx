import * as React from 'react';
import { mount } from 'enzyme';
import { DropdownToggle } from '../DropdownToggle';
import { DropdownContext } from '../dropdownConstants';

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

  test('on click outside has been removed', () => {
    let mousedown: EventListenerOrEventListenerObject = () => {};
    document.addEventListener = jest.fn((event, cb) => {
      mousedown = cb;
    });
    document.removeEventListener = jest.fn((event, cb) => {
      if (mousedown === cb) {
        mousedown = () => {};
      }
    });
    const mockToggle = jest.fn();
    const view = mount(
      <DropdownToggle id="Dropdown Toggle" onToggle={mockToggle} isOpen parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    view.unmount();
    mousedown({ target: document } as any);
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(document.removeEventListener).toHaveBeenCalledWith('click', expect.any(Function));
  });

  test('on touch outside has been removed', () => {
    let touchstart: EventListenerOrEventListenerObject = () => {};
    document.addEventListener = jest.fn((event, cb) => {
      touchstart = cb;
    });
    document.removeEventListener = jest.fn((event, cb) => {
      if (touchstart === cb) {
        touchstart = () => {};
      }
    });
    const mockToggle = jest.fn();
    const view = mount(
      <DropdownToggle id="Dropdown Toggle" onToggle={mockToggle} isOpen parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    view.unmount();
    touchstart({ target: document } as any);
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(document.removeEventListener).toHaveBeenCalledWith('touchstart', expect.any(Function));
  });
});

describe('state', () => {
  test('hover', () => {
    const view = mount(
      <DropdownToggle id="Dropdown Toggle" parentRef={document.createElement('div')}>
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
      <DropdownToggle id="Dropdown Toggle" parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    expect(view).toMatchSnapshot();
  });

  test('button variant - primary', () => {
    const view = mount(
      <DropdownToggle id="Dropdown Toggle" toggleVariant="primary" parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    expect(view.find('button').prop('className')).toMatch(/m-primary/);
    expect(view).toMatchSnapshot();
  });

  test('button variant - secondary', () => {
    const view = mount(
      <DropdownToggle id="Dropdown Toggle" toggleVariant="secondary" parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    expect(view.find('button').prop('className')).toMatch(/m-secondary/);
    expect(view).toMatchSnapshot();
  });

  test('button variant - secondary', () => {
    const view = mount(
      <DropdownToggle id="Dropdown Toggle" isText isPlain parentRef={document.createElement('div')}>
        Dropdown
      </DropdownToggle>
    );
    expect(view.find('button').prop('className')).toMatch(/m-text/);
    expect(view.find('button').prop('className')).toMatch(/m-plain/);
    expect(view).toMatchSnapshot();
  });

  test('action split button - renders primary variant', () => {
    const view = mount(
      <DropdownToggle
        id="Dropdown Toggle"
        toggleVariant="primary"
        splitButtonItems={[<div key="1">test</div>]}
        splitButtonVariant="action"
        parentRef={document.createElement('div')}
      >
        Dropdown
      </DropdownToggle>
    );
    expect(view.find('.pf-c-dropdown__toggle').prop('className')).toMatch(/m-primary/);
    expect(view).toMatchSnapshot();
  });

  test('split button - does not render primary variant', () => {
    const view = mount(
      <DropdownToggle
        id="Dropdown Toggle"
        toggleVariant="primary"
        splitButtonItems={[<div key="0">test</div>]}
        parentRef={document.createElement('div')}
      >
        Dropdown
      </DropdownToggle>
    );
    expect(view.find('.pf-c-dropdown__toggle').prop('className')).not.toMatch(/m-primary/);
    expect(view).toMatchSnapshot();
  });

  test('class changes', () => {
    const view = mount(
      <DropdownContext.Provider
        value={{
          toggleTextClass: 'some-test-class',
          toggleIndicatorClass: 'another-test-class'
        }}
      >
        <DropdownToggle id="Dropdown Toggle" parentRef={document.createElement('div')}>
          Dropdown
        </DropdownToggle>
      </DropdownContext.Provider>
    );
    expect(view).toMatchSnapshot();
  });

  test('class changes', () => {
    const view = mount(
      <DropdownContext.Provider
        value={{
          toggleTextClass: 'some-test-class',
          toggleIndicatorClass: 'another-test-class'
        }}
      >
        <DropdownToggle id="Dropdown Toggle" parentRef={document.createElement('div')}>
          Dropdown
        </DropdownToggle>
      </DropdownContext.Provider>
    );
    expect(view).toMatchSnapshot();
  });
});

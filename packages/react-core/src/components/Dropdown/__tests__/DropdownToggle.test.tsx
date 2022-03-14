import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DropdownToggle } from '../DropdownToggle';
import { DropdownContext } from '../dropdownConstants';

describe('DropdownToggleCheckbox', () => {
  describe('API', () => {
    test('click on closed', () => {
      const mockToggle = jest.fn();

      render(
        <DropdownToggle onToggle={mockToggle} parentRef={document.createElement('div')}>
          Dropdown
        </DropdownToggle>
      );

      userEvent.click(screen.getByRole('button'));
      expect(mockToggle.mock.calls[0][0]).toBe(true);
    });

    test('click on opened', () => {
      const mockToggle = jest.fn();

      render(
        <DropdownToggle id="Dropdown Toggle" onToggle={mockToggle} isOpen parentRef={document.createElement('div')}>
          Dropdown
        </DropdownToggle>
      );

      userEvent.click(screen.getByRole('button'));
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
      const view = render(
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
      const view = render(
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
      const view = render(
        <DropdownToggle id="Dropdown Toggle" parentRef={document.createElement('div')}>
          Dropdown
        </DropdownToggle>
      );
      expect(view.container.outerHTML).toMatchSnapshot();
    });

    test('active', () => {
      const view = render(
        <DropdownToggle id="Dropdown Toggle" isActive parentRef={document.createElement('div')}>
          Dropdown
        </DropdownToggle>
      );
      expect(view.container.outerHTML).toMatchSnapshot();
    });

    test('focus', () => {
      const view = render(
        <DropdownToggle id="Dropdown Toggle" parentRef={document.createElement('div')}>
          Dropdown
        </DropdownToggle>
      );
      expect(view.container.outerHTML).toMatchSnapshot();
    });

    test('button variant - primary', () => {
      render(
        <DropdownToggle id="Dropdown Toggle" toggleVariant="primary" parentRef={document.createElement('div')}>
          Dropdown
        </DropdownToggle>
      );

      const button = screen.getByRole('button');

      expect(button.className).toContain('primary');
      expect(button.outerHTML).toMatchSnapshot();
    });

    test('button variant - secondary', () => {
      render(
        <DropdownToggle id="Dropdown Toggle" toggleVariant="secondary" parentRef={document.createElement('div')}>
          Dropdown
        </DropdownToggle>
      );

      const button = screen.getByRole('button');

      expect(button.className).toContain('secondary');
      expect(button.outerHTML).toMatchSnapshot();
    });

    test('button variant - secondary', () => {
      render(
        <DropdownToggle id="Dropdown Toggle" isText isPlain parentRef={document.createElement('div')}>
          Dropdown
        </DropdownToggle>
      );

      const button = screen.getByRole('button');

      expect(button.className).toContain('text');
      expect(button.className).toContain('plain');
      expect(button.outerHTML).toMatchSnapshot();
    });

    test('action split button - renders primary variant', () => {
      render(
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

      const button = screen.getByRole('button');

      expect(button.className).toContain('primary');
      expect(button.outerHTML).toMatchSnapshot();
    });

    test('split button - does not render primary variant', () => {
      render(
        <DropdownToggle
          id="Dropdown Toggle"
          toggleVariant="primary"
          splitButtonItems={[<div key="0">test</div>]}
          parentRef={document.createElement('div')}
        >
          Dropdown
        </DropdownToggle>
      );

      const button = screen.getByRole('button');

      expect(button.className).toContain('primary');
      expect(button.outerHTML).toMatchSnapshot();
    });

    test('class changes', () => {
      const view = render(
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
      expect(view.container.outerHTML).toMatchSnapshot();
    });

    test('class changes', () => {
      const view = render(
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
      expect(view.container.outerHTML).toMatchSnapshot();
    });
  });
});

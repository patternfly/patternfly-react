import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { SelectToggle } from '../SelectToggle';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('SelectToggle should match snapshot (auto-generated)', () => {
  const view = shallow(
    <SelectToggle
      id={"string"}
			children={<div>ReactNode</div>}
			className={"''"}
			isExpanded={false}
			onToggle={() => {}}
			onEnter={() => {}}
			onClose={() => {}}
			handleTypeaheadKeys={(position: string) => undefined as void}
			parentRef={{ current: document.createElement('div') }}
			isFocused={false}
			isHovered={false}
			isActive={false}
			isPlain={false}
			isDisabled={false}
			type={'button'}
			ariaLabelledBy={"''"}
			ariaLabelToggle={"''"}
			variant={'single'}
    />);
  expect(view).toMatchSnapshot();
});

describe('API', () => {
  test('click on closed', () => {
    const mockToggle = jest.fn();
    const view = mount(
      <SelectToggle id="Select Toggle" onToggle={mockToggle} parentRef={{ current: document.createElement('div') }}>
        Select
      </SelectToggle>
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
      <SelectToggle
        id="Select Toggle"
        onToggle={mockToggle}
        isExpanded
        parentRef={{ current: document.createElement('div') }}
      >
        Select
      </SelectToggle>
    );

    view
      .find('button')
      .first()
      .simulate('click');
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });

  test('click on document', () => {
    const map = {} as any;
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const mockToggle = jest.fn();
    mount(
      <SelectToggle
        id="Select Toggle"
        onToggle={mockToggle}
        isExpanded
        parentRef={{ current: document.createElement('div') }}
      >
        Select
      </SelectToggle>
    );

    map.mousedown({ target: document });
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });

  test('touch on document', () => {
    const map = {} as any;
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const mockToggle = jest.fn();
    mount(
      <SelectToggle
        id="Select Toggle"
        onToggle={mockToggle}
        isExpanded
        parentRef={{ current: document.createElement('div') }}
      >
        Select
      </SelectToggle>
    );

    map.touchstart({ target: document });
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });

  test('on click outside has been removed', () => {
    const map = {} as any;
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    document.removeEventListener = jest.fn((event, cb) => {
      if (map[event] === cb) {
        map[event] = () => {};
      }
    });
    const mockToggle = jest.fn();
    const view = mount(
      <SelectToggle
        id="Select Toggle"
        onToggle={mockToggle}
        isExpanded
        parentRef={{ current: document.createElement('div') }}
      >
        Select
      </SelectToggle>
    );
    view.unmount();
    map.mousedown({ target: document });
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(document.removeEventListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
  });

  test('on touch outside has been removed', () => {
    const map = {} as any;
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    document.removeEventListener = jest.fn((event, cb) => {
      if (map[event] === cb) {
        map[event] = () => {};
      }
    });
    const mockToggle = jest.fn();
    const view = mount(
      <SelectToggle
        id="Select Toggle"
        onToggle={mockToggle}
        isExpanded
        parentRef={{ current: document.createElement('div') }}
      >
        Select
      </SelectToggle>
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
      <SelectToggle id="Select Toggle" isHovered parentRef={{ current: document.createElement('div') }}>
        Select
      </SelectToggle>
    );
    expect(view).toMatchSnapshot();
  });

  test('active', () => {
    const view = mount(
      <SelectToggle id="Select Toggle" isActive parentRef={{ current: document.createElement('div') }}>
        Select
      </SelectToggle>
    );
    expect(view).toMatchSnapshot();
  });

  test('focus', () => {
    const view = mount(
      <SelectToggle id="Select Toggle" isFocused parentRef={{ current: document.createElement('div') }}>
        Select
      </SelectToggle>
    );
    expect(view).toMatchSnapshot();
  });
});

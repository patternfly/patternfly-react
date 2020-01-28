import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { DropdownToggle } from '../DropdownToggle';
import { DropdownContext } from '../dropdownConstants';

it('DropdownToggle should match snapshot (auto-generated)', () => {
  const view = shallow(
    <DropdownToggle
      id={"''"}
			children={<>ReactNode</>}
			className={"''"}
			isOpen={false}
			onToggle={(_isOpen: boolean) => undefined as any}
			parentRef={null}
			isFocused={false}
			isHovered={false}
			isActive={false}
			isPlain={false}
			isDisabled={false}
			isPrimary={false}
			iconComponent={() => <p>ReactElementType</p>}
			splitButtonItems={[]}
			splitButtonVariant={'checkbox'}
			aria-label={"string"}
			ariaHasPopup={true}
			type={'button'}
			onEnter={(event?: React.MouseEvent<HTMLButtonElement>) => undefined as void}
    />);
  expect(view).toMatchSnapshot();
});

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
    expect(document.removeEventListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
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

  test('class changes', () => {
    const view = mount(
      <DropdownContext.Provider
        value={{
          toggleTextClass: 'some-test-class',
          toggleIconClass: 'another-test-class'
        }}
      >
        <DropdownToggle id="Dropdown Toggle" isFocused parentRef={document.createElement('div')}>
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
          toggleIconClass: 'another-test-class'
        }}
      >
        <DropdownToggle id="Dropdown Toggle" isFocused parentRef={document.createElement('div')}>
          Dropdown
        </DropdownToggle>
      </DropdownContext.Provider>
    );
    expect(view).toMatchSnapshot();
  });
});

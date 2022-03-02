import * as React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { Dropdown } from '../Dropdown';
import { DropdownPosition, DropdownDirection } from '../dropdownConstants';
import { InternalDropdownItem } from '../InternalDropdownItem';
import { DropdownSeparator } from '../DropdownSeparator';
import { DropdownToggle } from '../DropdownToggle';
import { KebabToggle } from '../KebabToggle';

const dropdownItems = [
  <InternalDropdownItem key="link">Link</InternalDropdownItem>,
  <InternalDropdownItem key="action" component="button">
    Action
  </InternalDropdownItem>,
  <InternalDropdownItem key="disabled link" isDisabled>
    Disabled Link
  </InternalDropdownItem>,
  <InternalDropdownItem key="disabled action" isDisabled component="button">
    Disabled Action
  </InternalDropdownItem>,
  <DropdownSeparator key="separator" />,
  <InternalDropdownItem key="separated link">Separated Link</InternalDropdownItem>,
  <InternalDropdownItem key="separated action" component="button">
    Separated Action
  </InternalDropdownItem>
];

describe('dropdown', () => {
  test('regular', () => {
    const view = render(
      <Dropdown dropdownItems={dropdownItems} toggle={<DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle>} />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('right aligned', () => {
    const view = render(
      <Dropdown
        dropdownItems={dropdownItems}
        position={DropdownPosition.right}
        toggle={<DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle>}
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('alignment breakpoints', () => {
    const view = render(
      <Dropdown
        dropdownItems={dropdownItems}
        alignments={{
          sm: 'left',
          md: 'right',
          lg: 'left',
          xl: 'right',
          '2xl': 'left'
        }}
        toggle={<DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle>}
        isOpen
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('dropup', () => {
    const view = render(
      <Dropdown
        dropdownItems={dropdownItems}
        direction={DropdownDirection.up}
        toggle={<DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle>}
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('dropup + right aligned', () => {
    const view = render(
      <Dropdown
        dropdownItems={dropdownItems}
        direction={DropdownDirection.up}
        position={DropdownPosition.right}
        toggle={<DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle>}
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('expanded', () => {
    const view = render(
      <Dropdown
        dropdownItems={dropdownItems}
        isOpen
        toggle={<DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle>}
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('primary', () => {
    const view = render(
      <Dropdown
        dropdownItems={dropdownItems}
        toggle={
          <DropdownToggle id="Dropdown Toggle" isPrimary>
            Dropdown
          </DropdownToggle>
        }
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('basic', () => {
    const view = render(
      <Dropdown isOpen toggle={<DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle>}>
        <div>BASIC</div>
      </Dropdown>
    );
    expect(view.container).toMatchSnapshot();
  });
});

describe('KebabToggle', () => {
  test('regular', () => {
    const view = render(<Dropdown dropdownItems={dropdownItems} toggle={<KebabToggle id="Dropdown Toggle" />} />);
    expect(view.container).toMatchSnapshot();
  });

  test('right aligned', () => {
    const view = render(
      <Dropdown
        dropdownItems={dropdownItems}
        position={DropdownPosition.right}
        toggle={<KebabToggle id="Dropdown Toggle" />}
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('dropup', () => {
    const view = render(
      <Dropdown
        dropdownItems={dropdownItems}
        direction={DropdownDirection.up}
        toggle={<KebabToggle id="Dropdown Toggle" />}
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('dropup + right aligned', () => {
    const view = render(
      <Dropdown
        dropdownItems={dropdownItems}
        direction={DropdownDirection.up}
        position={DropdownPosition.right}
        toggle={<KebabToggle id="Dropdown Toggle" />}
      />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('expanded', () => {
    const view = render(
      <Dropdown dropdownItems={dropdownItems} isOpen toggle={<KebabToggle id="Dropdown Toggle" />} />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('plain', () => {
    const view = render(
      <Dropdown dropdownItems={dropdownItems} isPlain toggle={<KebabToggle id="Dropdown Toggle" />} />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('basic', () => {
    const view = render(
      <Dropdown isOpen toggle={<KebabToggle id="Dropdown Toggle" />}>
        <div>BASIC</div>
      </Dropdown>
    );
    expect(view.container).toMatchSnapshot();
  });
});

describe('API', () => {
  test('click on item', () => {
    const mockToggle = jest.fn();
    const mockSelect = jest.fn();
    const view = mount(
      <Dropdown
        dropdownItems={dropdownItems}
        onSelect={mockSelect}
        isOpen
        toggle={<DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle>}
      />
    );
    view
      .find('a')
      .first()
      .simulate('click');
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(mockSelect.mock.calls).toHaveLength(1);
  });

  test('dropdownItems and children console error ', () => {
    const myMock = jest.fn();
    global.console = { error: myMock } as any;
    render(
      <Dropdown
        dropdownItems={dropdownItems}
        isOpen
        toggle={<DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle>}
      >
        <div>Children items</div>
      </Dropdown>
    );
    expect(myMock).toBeCalledWith(
      'Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered'
    );
  });

  test('dropdownItems only, no console error ', () => {
    const myMock = jest.fn();
    global.console = { error: myMock } as any;
    render(
      <Dropdown
        dropdownItems={dropdownItems}
        isOpen
        toggle={<DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle>}
      />
    );
    expect(myMock).not.toBeCalled();
  });

  test('children only, no console ', () => {
    const myMock = jest.fn();
    global.console = { error: myMock } as any;
    render(
      <Dropdown isOpen toggle={<DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle>}>
        <div>Children items</div>
      </Dropdown>
    );
    expect(myMock).not.toBeCalled();
  });
});

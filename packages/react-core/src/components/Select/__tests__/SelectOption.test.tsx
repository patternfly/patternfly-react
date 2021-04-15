import React from 'react';
import { shallow, mount } from 'enzyme';
import { SelectOption, SelectOptionObject } from '../SelectOption';
import { SelectProvider } from '../selectConstants';

class User implements SelectOptionObject {
  private firstName: string;
  private lastName: string;
  private title: string;

  constructor(title: string, firstName: string, lastName: string) {
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  toString = (): string => `${this.title}: ${this.firstName} ${this.lastName}`;
}

describe('select options', () => {
  test('renders with value parameter successfully', () => {
    const view = mount(
      <SelectProvider value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}>
        <SelectOption id="option-1" value="test" sendRef={jest.fn()} />
      </SelectProvider>
    );
    expect(view.instance().props).toHaveProperty('value', 'test');
    expect(view).toMatchSnapshot();
  });

  test('renders with description successfully', () => {
    const view = mount(
      <SelectProvider value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}>
        <SelectOption id="option-1" value="test" description="This is a description" sendRef={jest.fn()} />
      </SelectProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders with item count successfully', () => {
    const view = mount(
      <SelectProvider value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}>
        <SelectOption id="option-1" value="test" itemCount={3} sendRef={jest.fn()} />
      </SelectProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders with custom display successfully', () => {
    const view = mount(
      <SelectProvider value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}>
        <SelectOption id="option-1" value="test" sendRef={jest.fn()}>
          <div>test display</div>
        </SelectOption>
      </SelectProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders with custom user object successfully', () => {
    const view = mount(
      <SelectProvider value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}>
        <SelectOption id="option-1" value={new User('Mr.', 'Test', 'User')} sendRef={jest.fn()} />
      </SelectProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders with custom display and custom user object successfully', () => {
    const view = mount(
      <SelectProvider value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}>
        <SelectOption id="option-1" value={new User('Mr.', 'Test', 'User')} sendRef={jest.fn()}>
          <div>test display</div>
        </SelectOption>
      </SelectProvider>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders custom component', () => {
    const view = mount(
      <SelectProvider value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}>
        <SelectOption id="option-1" value={new User('Mr.', 'Test', 'User')} sendRef={jest.fn()} component="div">
          <div>test display</div>
        </SelectOption>
      </SelectProvider>
    );
    expect(view).toMatchSnapshot();
  });

  describe('disabled', () => {
    test('renders disabled successfully', () => {
      const view = mount(
        <SelectProvider value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}>
          <SelectOption id="option-1" isDisabled value="test" sendRef={jest.fn()} />
        </SelectProvider>
      );
      expect(view.find('button').hasClass('pf-m-disabled')).toBe(true);
      expect(view).toMatchSnapshot();
    });
  });

  describe('is selected', () => {
    test('renders selected successfully', () => {
      const view = shallow(<SelectOption id="option-1" isSelected value="test" sendRef={jest.fn()} />);
      expect(view).toMatchSnapshot();
    });
  });

  describe('checked', () => {
    test('renders with checked successfully', () => {
      const view = shallow(<SelectOption id="option-1" isChecked value="test" sendRef={jest.fn()} />);
      expect(view).toMatchSnapshot();
    });
  });

  describe('favorites warning', () => {
    test('generates warning when id is undefined and isFavorites is set', () => {
      const myMock = jest.fn() as any;
      global.console = { error: myMock } as any;
      mount(
        <SelectProvider value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}>
          <SelectOption isFavorite value="test" sendRef={jest.fn()} />
        </SelectProvider>
      );
      expect(myMock).toBeCalled()
    });
  });
});

import React from 'react';

import { render, screen } from '@testing-library/react';

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

describe('SelectOption', () => {
  test('renders with value parameter successfully', () => {
    render(
      <SelectProvider
        value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}
      >
        <SelectOption id="option-1" value="test" sendRef={jest.fn()} data-testid="test-id" />
      </SelectProvider>
    );
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('renders with description successfully', () => {
    render(
      <SelectProvider
        value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}
      >
        <SelectOption
          id="option-1"
          value="test"
          description="This is a description"
          sendRef={jest.fn()}
          data-testid="test-id"
        />
      </SelectProvider>
    );
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('renders with item count successfully', () => {
    render(
      <SelectProvider
        value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}
      >
        <SelectOption id="option-1" value="test" itemCount={3} sendRef={jest.fn()} data-testid="test-id" />
      </SelectProvider>
    );
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('renders with custom display successfully', () => {
    render(
      <SelectProvider
        value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}
      >
        <SelectOption id="option-1" value="test" sendRef={jest.fn()}>
          <div>test display</div>
        </SelectOption>
      </SelectProvider>
    );
    expect(screen.getByText('test display').outerHTML).toMatchSnapshot();
  });

  test('renders with custom user object successfully', () => {
    render(
      <SelectProvider
        value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}
      >
        <SelectOption id="option-1" value={new User('Mr.', 'Test', 'User')} sendRef={jest.fn()} data-testid="test-id" />
      </SelectProvider>
    );
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('renders with custom display and custom user object successfully', () => {
    render(
      <SelectProvider
        value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}
      >
        <SelectOption id="option-1" value={new User('Mr.', 'Test', 'User')} sendRef={jest.fn()}>
          <div>test display</div>
        </SelectOption>
      </SelectProvider>
    );
    expect(screen.getByText('test display').outerHTML).toMatchSnapshot();
  });

  test('renders custom component', () => {
    render(
      <SelectProvider
        value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}
      >
        <SelectOption id="option-1" value={new User('Mr.', 'Test', 'User')} sendRef={jest.fn()} component="div">
          <div>test display</div>
        </SelectOption>
      </SelectProvider>
    );
    expect(screen.getByText('test display').outerHTML).toMatchSnapshot();
  });

  describe('disabled', () => {
    test('renders disabled successfully', () => {
      render(
        <SelectProvider
          value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}
        >
          <SelectOption id="option-1" isDisabled value="test" sendRef={jest.fn()} data-testid="test-id" />
        </SelectProvider>
      );

      expect(screen.getByText('test').className).toContain('pf-m-disabled');
      expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
    });
  });

  describe('is selected', () => {
    test('renders selected successfully', () => {
      render(
        <SelectProvider
          value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}
        >
          <SelectOption id="option-1" isSelected value="test" sendRef={jest.fn()} data-testid="test-id" />
        </SelectProvider>
      );
      expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
    });
  });

  describe('checked', () => {
    test('renders with checked successfully', () => {
      render(
        <SelectProvider
          value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}
        >
          <SelectOption id="option-1" isChecked value="test" sendRef={jest.fn()} data-testid="test-id" />
        </SelectProvider>
      );
      expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
    });
  });

  describe('favorites warning', () => {
    test('generates warning when id is undefined and isFavorites is set', () => {
      const myMock = jest.fn() as any;
      global.console = { error: myMock } as any;

      render(
        <SelectProvider
          value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}
        >
          <SelectOption isFavorite value="test" sendRef={jest.fn()} />
        </SelectProvider>
      );

      expect(myMock).toBeCalled();
    });
  });
});

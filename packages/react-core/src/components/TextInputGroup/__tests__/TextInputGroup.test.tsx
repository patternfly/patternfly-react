import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextInputGroup, TextInputGroupContext } from '../TextInputGroup';
import { TextInputGroupMain } from '../TextInputGroupMain';
import { TextInputGroupUtilities } from '../TextInputGroupUtilities';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

describe('TextInputGroup', () => {
  test('renders content', () => {
    render(
      <TextInputGroup data-testid="group-test-id">
        <TextInputGroupMain>Foo</TextInputGroupMain>
        <TextInputGroupUtilities />
      </TextInputGroup>
    );
    expect(screen.getByTestId('group-test-id').outerHTML).toMatchSnapshot();
  });

  test('gets custom class and id', () => {
    render(
      <TextInputGroup className="custom-class" id="test-id" data-testid="group-test-id">
        <TextInputGroupMain>Foo</TextInputGroupMain>
        <TextInputGroupUtilities />
      </TextInputGroup>
    );
    expect(screen.getByTestId('group-test-id').outerHTML).toMatchSnapshot();
  });

  test('renders with the proper stying when disabled', () => {
    render(
      <TextInputGroup isDisabled data-testid="group-test-id">
        <TextInputGroupMain>Foo</TextInputGroupMain>
        <TextInputGroupUtilities />
      </TextInputGroup>
    );
    expect(screen.getByTestId('group-test-id').outerHTML).toMatchSnapshot();
  });

  test('passes isDisabled=false to children via a context when isDisabled prop is not passed', () => {
    const TestComponent: React.FunctionComponent = () => {
      const context = React.useContext(TextInputGroupContext);

      return <div>{context.isDisabled ? 'is disabled' : 'not disabled'}</div>;
    };

    render(
      <TextInputGroup>
        <TestComponent />
      </TextInputGroup>
    );

    expect(screen.queryByText('is disabled')).toBeNull();
  });

  test('passes isDisabled=true to children via a context when isDisabled prop is passed', () => {
    const TestComponent: React.FunctionComponent = () => {
      const context = React.useContext(TextInputGroupContext);

      return <div>{context.isDisabled ? 'is disabled' : 'not disabled'}</div>;
    };

    render(
      <TextInputGroup isDisabled>
        <TestComponent />
      </TextInputGroup>
    );

    expect(screen.queryByText('not disabled')).toBeNull();
  });
});

describe('TextInputGroupMain', () => {
  test('renders content', () => {
    render(<TextInputGroupMain>Foo</TextInputGroupMain>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });

  test('renders given input icon props', () => {
    render(<TextInputGroupMain icon={<SearchIcon />}>Foo</TextInputGroupMain>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });

  test('renders the input with custom aria label when given', () => {
    render(<TextInputGroupMain aria-label="Foo">Foo</TextInputGroupMain>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });

  test('does not call onChange callback when the input does not change', () => {
    const onChangeMock = jest.fn();

    render(<TextInputGroupMain onChange={onChangeMock}>Foo</TextInputGroupMain>);
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  test('calls the onChange callback when the input changes', () => {
    const onChangeMock = jest.fn();

    render(<TextInputGroupMain onChange={onChangeMock}>Foo</TextInputGroupMain>);

    userEvent.type(screen.getByText('Foo').querySelector('input'), 'Foo');
    expect(onChangeMock).toHaveBeenCalled();
  });

  test('does not call onFocus callback when the input does not get focus', () => {
    const onFocusMock = jest.fn();

    render(<TextInputGroupMain onFocus={onFocusMock}>Foo</TextInputGroupMain>);
    expect(onFocusMock).not.toHaveBeenCalled();
  });

  test('calls the onFocus callback when the input is focused', () => {
    const onFocusMock = jest.fn();

    render(<TextInputGroupMain onFocus={onFocusMock}>Foo</TextInputGroupMain>);
    userEvent.click(screen.getByText('Foo').querySelector('input'));
    expect(onFocusMock).toHaveBeenCalledTimes(1);
  });

  test('does not call onBlur callback when the input does not lose focus', () => {
    const onBlurMock = jest.fn();

    render(<TextInputGroupMain onBlur={onBlurMock}>Foo</TextInputGroupMain>);

    userEvent.type(screen.getByText('Foo').querySelector('input'), 'Foo');
    expect(onBlurMock).not.toHaveBeenCalled();
  });

  test('calls the onFocus callback when the input loses focus', () => {
    const onBlurMock = jest.fn();

    render(
      <>
        <div>Other element</div>
        <TextInputGroupMain onBlur={onBlurMock}>Foo</TextInputGroupMain>
      </>
    );

    userEvent.type(screen.getByText('Foo').querySelector('input'), 'Foo');
    userEvent.click(screen.getByText('Other element'));

    expect(onBlurMock).toHaveBeenCalled();
  });

  test('input type defaults to text', () => {
    render(<TextInputGroupMain>Foo</TextInputGroupMain>);
    expect(
      screen
        .getByText('Foo')
        .querySelector('input')
        .getAttribute('type')
    ).toEqual('text');
  });

  test('input type is updated when a different type is passed', () => {
    render(<TextInputGroupMain type="search">Foo</TextInputGroupMain>);
    expect(
      screen
        .getByText('Foo')
        .querySelector('input')
        .getAttribute('type')
    ).toEqual('search');
  });

  test('input is not disabled when TextInputGroupContext isDisabled is false', () => {
    render(
      <TextInputGroupContext.Provider value={{ isDisabled: false }}>
        <TextInputGroupMain data-testid="test-id" />
      </TextInputGroupContext.Provider>
    );

    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('input is disabled when TextInputGroupContext isDisabled is true', () => {
    render(
      <TextInputGroupContext.Provider value={{ isDisabled: true }}>
        <TextInputGroupMain data-testid="test-id" />
      </TextInputGroupContext.Provider>
    );
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });
});

describe('TextInputGroupUtilities', () => {
  test('renders the content', () => {
    render(<TextInputGroupUtilities data-testid="test-id">{<button>Foo</button>}</TextInputGroupUtilities>);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });
});

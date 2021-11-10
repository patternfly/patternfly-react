import React from 'react';
import { mount } from 'enzyme';
import { TextInputGroup, TextInputGroupContext } from '../TextInputGroup';
import { TextInputGroupMain } from '../TextInputGroupMain';
import { TextInputGroupUtilities } from '../TextInputGroupUtilities';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

describe('TextInputGroup', () => {
  test('renders content', () => {
    const view = mount(
      <TextInputGroup>
        <TextInputGroupMain>Foo</TextInputGroupMain>
        <TextInputGroupUtilities />
      </TextInputGroup>
    );
    expect(view).toMatchSnapshot();
  });

  test('gets custom class and id', () => {
    const view = mount(
      <TextInputGroup className="custom-class" id="test-id">
        <TextInputGroupMain>Foo</TextInputGroupMain>
        <TextInputGroupUtilities />
      </TextInputGroup>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders with the proper stying when disabled', () => {
    const view = mount(
      <TextInputGroup isDisabled>
        <TextInputGroupMain>Foo</TextInputGroupMain>
        <TextInputGroupUtilities />
      </TextInputGroup>
    );
    expect(view).toMatchSnapshot();
  });

  test('passes isDisabled=false to children via a context when isDisabled prop is not passed', () => {
    const TestComponent: React.FunctionComponent = () => {
      const context = React.useContext(TextInputGroupContext);

      return <div>{context.isDisabled ? 'is disabled' : 'not disabled'}</div>;
    };

    const view = mount(
      <TextInputGroup>
        <TestComponent />
      </TextInputGroup>
    );
    expect(view.text()).toBe('not disabled');
  });

  test('passes isDisabled=true to children via a context when isDisabled prop is passed', () => {
    const TestComponent: React.FunctionComponent = () => {
      const context = React.useContext(TextInputGroupContext);

      return <div>{context.isDisabled ? 'is disabled' : 'not disabled'}</div>;
    };

    const view = mount(
      <TextInputGroup isDisabled>
        <TestComponent />
      </TextInputGroup>
    );
    expect(view.text()).toBe('is disabled');
  });
});

describe('TextInputGroupMain', () => {
  test('renders content', () => {
    const view = mount(<TextInputGroupMain>Foo</TextInputGroupMain>);
    expect(view).toMatchSnapshot();
  });

  test('renders given input icon props', () => {
    const view = mount(<TextInputGroupMain icon={<SearchIcon />}>Foo</TextInputGroupMain>);
    expect(view).toMatchSnapshot();
  });

  test('renders the input with custom aria label when given', () => {
    const view = mount(<TextInputGroupMain aria-label="Foo">Foo</TextInputGroupMain>);
    expect(view).toMatchSnapshot();
  });

  test('does not call onChange callback when the input does not change', () => {
    const onChangeMock = jest.fn();

    const view = mount(<TextInputGroupMain onChange={onChangeMock}>Foo</TextInputGroupMain>);
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  test('calls the onChange callback when the input changes', () => {
    const onChangeMock = jest.fn();

    const view = mount(<TextInputGroupMain onChange={onChangeMock}>Foo</TextInputGroupMain>);
    view.find('input').simulate('change', { target: { value: 'Foo' } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  test('does not call onFocus callback when the input does not get focus', () => {
    const onFocusMock = jest.fn();

    const view = mount(<TextInputGroupMain onFocus={onFocusMock}>Foo</TextInputGroupMain>);
    expect(onFocusMock).not.toHaveBeenCalled();
  });

  test('calls the onFocus callback when the input is focused', () => {
    const onFocusMock = jest.fn();

    const view = mount(<TextInputGroupMain onFocus={onFocusMock}>Foo</TextInputGroupMain>);
    view.find('input').simulate('focus');
    expect(onFocusMock).toHaveBeenCalledTimes(1);
  });

  test('does not call onBlur callback when the input does not lose focus', () => {
    const onBlurMock = jest.fn();

    const view = mount(<TextInputGroupMain onBlur={onBlurMock}>Foo</TextInputGroupMain>);
    expect(onBlurMock).not.toHaveBeenCalled();
  });

  test('calls the onFocus callback when the input loses focus', () => {
    const onBlurMock = jest.fn();

    const view = mount(<TextInputGroupMain onBlur={onBlurMock}>Foo</TextInputGroupMain>);
    view.find('input').simulate('blur');
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });

  test('input type defaults to text', () => {
    const view = mount(<TextInputGroupMain>Foo</TextInputGroupMain>);
    expect(view.find('input').props()['type']).toBe('text');
  });

  test('input type is updated when a different type is passed', () => {
    const view = mount(<TextInputGroupMain type="search">Foo</TextInputGroupMain>);
    expect(view.find('input').props()['type']).toBe('search');
  });

  test('input is not disabled when TextInputGroupContext isDisabled is false', () => {
    const view = mount(
      <TextInputGroupContext.Provider value={{ isDisabled: false }}>
        <TextInputGroupMain />
      </TextInputGroupContext.Provider>
    );
    expect(view.find('input').props()['disabled']).toBe(false);
  });

  test('input is disabled when TextInputGroupContext isDisabled is true', () => {
    const view = mount(
      <TextInputGroupContext.Provider value={{ isDisabled: true }}>
        <TextInputGroupMain />
      </TextInputGroupContext.Provider>
    );
    expect(view.find('input').props()['disabled']).toBe(true);
  });
});

describe('TextInputGroupUtilities', () => {
  test('renders the content', () => {
    const view = mount(<TextInputGroupUtilities>{<button>Foo</button>}</TextInputGroupUtilities>);
    expect(view).toMatchSnapshot();
  });
});

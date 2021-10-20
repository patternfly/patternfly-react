import React from 'react';
import { mount } from 'enzyme';
import { TextInputGroup } from '../TextInputGroup';
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

  test('renders with the proper stying for an icon on the left side of the component', () => {
    const view = mount(
      <TextInputGroup hasLeftIcon>
        <TextInputGroupMain>Foo</TextInputGroupMain>
        <TextInputGroupUtilities />
      </TextInputGroup>
    );
    expect(view).toMatchSnapshot();
  });
});

describe('TextInputGroupMain', () => {
  test('renders content', () => {
    const view = mount(<TextInputGroupMain>Foo</TextInputGroupMain>);
    expect(view).toMatchSnapshot();
  });

  test('renders given input icon props', () => {
    const view = mount(<TextInputGroupMain inputIcon={<SearchIcon />}>Foo</TextInputGroupMain>);
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
});

describe('TextInputGroupUtilities', () => {
  test('renders the content', () => {
    const view = mount(<TextInputGroupUtilities />);
    expect(view).toMatchSnapshot();
  });

  test('renders the clear button', () => {
    const view = mount(<TextInputGroupUtilities clearSelection={() => {}} />);
    expect(view).toMatchSnapshot();
  });

  test('renders the clear button with custom aria label when given', () => {
    const view = mount(<TextInputGroupUtilities clearSelection={() => {}} aria-label="Foo"/>);
    expect(view).toMatchSnapshot();
  });

  test('does not fire the clearSelection callback when the clear button is not clicked', () => {
    const clearSelectionMock = jest.fn();

    const view = mount(<TextInputGroupUtilities clearSelection={clearSelectionMock} />);
    expect(clearSelectionMock).not.toHaveBeenCalled();
  });

  test('fires the clearSelection callback when the clear button is clicked', () => {
    const clearSelectionMock = jest.fn();

    const view = mount(<TextInputGroupUtilities clearSelection={clearSelectionMock} />);
    view.find('button').simulate('click');
    expect(clearSelectionMock).toHaveBeenCalledTimes(1);
  });
});

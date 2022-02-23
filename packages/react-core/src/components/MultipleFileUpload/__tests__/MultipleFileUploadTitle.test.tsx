import React from 'react';
import { mount } from 'enzyme';
import { MultipleFileUploadTitle } from '../MultipleFileUploadTitle';

describe('MultipleFileUploadTitle', () => {
  test('renders with expected class names', () => {
    const view = mount(<MultipleFileUploadTitle />);
    expect(view).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const view = mount(<MultipleFileUploadTitle className="test" />);
    expect(view).toMatchSnapshot();
  });

  test('renders with title icon', () => {
    const view = mount(<MultipleFileUploadTitle icon="icon" />);
    expect(view).toMatchSnapshot();
  });

  test('renders with title text', () => {
    const view = mount(<MultipleFileUploadTitle text="text" />);
    expect(view).toMatchSnapshot();
  });

  test('renders with title text separator', () => {
    const view = mount(<MultipleFileUploadTitle text="text" textSeparator="text separator" />);
    expect(view).toMatchSnapshot();
  });
});

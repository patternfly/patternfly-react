import React from 'react';
import { mount } from 'enzyme';
import { MultipleFileUploadTitle } from '../MultipleFileUploadTitle';

describe('MultipleFileUploadTitle', () => {
  test('renders with expected class names', () => {
    const view = mount(<MultipleFileUploadTitle>Foo</MultipleFileUploadTitle>);
    expect(view).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const view = mount(<MultipleFileUploadTitle className="test">Foo</MultipleFileUploadTitle>);
    expect(view).toMatchSnapshot();
  });
});

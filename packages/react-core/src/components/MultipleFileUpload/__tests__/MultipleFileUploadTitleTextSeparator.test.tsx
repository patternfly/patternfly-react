import React from 'react';
import { mount } from 'enzyme';
import { MultipleFileUploadTitleTextSeparator } from '../MultipleFileUploadTitleTextSeparator';

describe('MultipleFileUploadTitleTextSeparator', () => {
  test('renders with expected class names', () => {
    const view = mount(<MultipleFileUploadTitleTextSeparator>Foo</MultipleFileUploadTitleTextSeparator>);
    expect(view).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const view = mount(<MultipleFileUploadTitleTextSeparator className="test">Foo</MultipleFileUploadTitleTextSeparator>);
    expect(view).toMatchSnapshot();
  });
});

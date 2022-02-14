import React from 'react';
import { mount } from 'enzyme';
import { MultipleFileUploadTitleText } from '../MultipleFileUploadTitleText';

describe('MultipleFileUploadTitleText', () => {
  test('renders with expected class names', () => {
    const view = mount(<MultipleFileUploadTitleText>Foo</MultipleFileUploadTitleText>);
    expect(view).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const view = mount(<MultipleFileUploadTitleText className="test">Foo</MultipleFileUploadTitleText>);
    expect(view).toMatchSnapshot();
  });
});

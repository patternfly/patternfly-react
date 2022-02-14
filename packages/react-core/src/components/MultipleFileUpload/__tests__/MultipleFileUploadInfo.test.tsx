import React from 'react';
import { mount } from 'enzyme';
import { MultipleFileUploadInfo } from '../MultipleFileUploadInfo';

describe('MultipleFileUploadInfo', () => {
  test('renders with expected class names', () => {
    const view = mount(<MultipleFileUploadInfo>Foo</MultipleFileUploadInfo>);
    expect(view).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const view = mount(<MultipleFileUploadInfo className="test">Foo</MultipleFileUploadInfo>);
    expect(view).toMatchSnapshot();
  });
});

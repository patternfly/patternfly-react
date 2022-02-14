import React from 'react';
import { mount } from 'enzyme';
import { MultipleFileUploadMain } from '../MultipleFileUploadMain';

describe('MultipleFileUploadMain', () => {
  test('renders with expected class names', () => {
    const view = mount(<MultipleFileUploadMain>Foo</MultipleFileUploadMain>);
    expect(view).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const view = mount(<MultipleFileUploadMain className="test">Foo</MultipleFileUploadMain>);
    expect(view).toMatchSnapshot();
  });
});

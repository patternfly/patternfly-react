import React from 'react';
import { mount } from 'enzyme';
import { MultipleFileUploadTitleIcon } from '../MultipleFileUploadTitleIcon';

describe('MultipleFileUploadTitleIcon', () => {
  test('renders with expected class names', () => {
    const view = mount(<MultipleFileUploadTitleIcon>Foo</MultipleFileUploadTitleIcon>);
    expect(view).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const view = mount(<MultipleFileUploadTitleIcon className="test" />);
    expect(view).toMatchSnapshot();
  });
});

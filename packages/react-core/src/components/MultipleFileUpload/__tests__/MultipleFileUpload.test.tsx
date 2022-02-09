import React from 'react';
import { mount } from 'enzyme';
import { MultipleFileUpload } from '../MultipleFileUpload';

describe('MultipleFileUpload', () => {
  test('renders with expected class names when not horizontal', () => {
    const view = mount(<MultipleFileUpload>Foo</MultipleFileUpload>);
    expect(view).toMatchSnapshot();
  });

  test('renders with expected class names when horizontal', () => {
    const view = mount(<MultipleFileUpload isHorizontal>Foo</MultipleFileUpload>);
    expect(view).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const view = mount(<MultipleFileUpload className='test'>Foo</MultipleFileUpload>);
    expect(view).toMatchSnapshot();
  });
})
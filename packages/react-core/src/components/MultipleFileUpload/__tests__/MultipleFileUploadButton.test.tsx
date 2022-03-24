import React from 'react';
import { mount } from 'enzyme';
import { MultipleFileUploadButton } from '../MultipleFileUploadButton';

describe('MultipleFileUploadButton', () => {
  test('renders with expected class names', () => {
    const view = mount(<MultipleFileUploadButton>Foo</MultipleFileUploadButton>);
    expect(view).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const view = mount(<MultipleFileUploadButton className="test">Foo</MultipleFileUploadButton>);
    expect(view).toMatchSnapshot();
  });

  test('renders with aria-label applied to the button', () => {
    const view = mount(<MultipleFileUploadButton aria-label="test">Foo</MultipleFileUploadButton>);
    expect(view).toMatchSnapshot();
  });
});

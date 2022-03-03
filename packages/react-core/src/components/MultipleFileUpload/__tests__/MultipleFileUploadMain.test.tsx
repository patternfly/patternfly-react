import React from 'react';
import { mount } from 'enzyme';
import { MultipleFileUploadMain } from '../MultipleFileUploadMain';

describe('MultipleFileUploadMain', () => {
  test('renders with expected class names', () => {
    const view = mount(<MultipleFileUploadMain />);
    expect(view).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const view = mount(<MultipleFileUploadMain className="test" />);
    expect(view).toMatchSnapshot();
  });

  test('passes props to the title as expected', () => {
    const view = mount(
      <MultipleFileUploadMain titleIcon="icon" titleText="title text" titleTextSeparator="title test separator" />
    );
    expect(view).toMatchSnapshot();
  });

  test('renders without the button when expected', () => {
    const view = mount(<MultipleFileUploadMain isUploadButtonHidden />);
    expect(view).toMatchSnapshot();
  });

  test('passes props to the info component as expected', () => {
    const view = mount(<MultipleFileUploadMain infoText="info text" />);
    expect(view).toMatchSnapshot();
  });
});

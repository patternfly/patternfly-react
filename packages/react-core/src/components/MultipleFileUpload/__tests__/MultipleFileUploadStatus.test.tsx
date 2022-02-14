import React from 'react';
import { mount } from 'enzyme';
import { MultipleFileUploadStatus } from '../MultipleFileUploadStatus';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';

describe('MultipleFileUploadStatus', () => {
  test('renders with expected class names', () => {
    const view = mount(<MultipleFileUploadStatus>Foo</MultipleFileUploadStatus>);
    expect(view).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const view = mount(<MultipleFileUploadStatus className="test">Foo</MultipleFileUploadStatus>);
    expect(view).toMatchSnapshot();
  });

  test('renders status toggle text', () => {
    const view = mount(<MultipleFileUploadStatus statusToggleText='test'>Foo</MultipleFileUploadStatus>);
    expect(view).toMatchSnapshot();
  });

  test('renders status toggle icon', () => {
    const view = mount(<MultipleFileUploadStatus statusToggleIcon={<InProgressIcon />}>Foo</MultipleFileUploadStatus>);
    expect(view).toMatchSnapshot();
  });
});

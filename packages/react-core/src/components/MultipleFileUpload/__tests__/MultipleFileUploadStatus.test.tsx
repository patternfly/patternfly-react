import React from 'react';
import { render, screen } from '@testing-library/react';
import { MultipleFileUploadStatus } from '../MultipleFileUploadStatus';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';

describe('MultipleFileUploadStatus', () => {
  test('renders with expected class names', () => {
    render(<MultipleFileUploadStatus>Foo</MultipleFileUploadStatus>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    render(<MultipleFileUploadStatus className="test">Foo</MultipleFileUploadStatus>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });

  test('renders status toggle text', () => {
    render(<MultipleFileUploadStatus statusToggleText="test">Foo</MultipleFileUploadStatus>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });

  test('renders status toggle icon', () => {
    render(<MultipleFileUploadStatus statusToggleIcon={<InProgressIcon />}>Foo</MultipleFileUploadStatus>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });
});

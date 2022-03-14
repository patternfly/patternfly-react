import React from 'react';
import { render, screen } from '@testing-library/react';
import { MultipleFileUploadTitleTextSeparator } from '../MultipleFileUploadTitleTextSeparator';

describe('MultipleFileUploadTitleTextSeparator', () => {
  test('renders with expected class names', () => {
    render(<MultipleFileUploadTitleTextSeparator>Foo</MultipleFileUploadTitleTextSeparator>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    render(<MultipleFileUploadTitleTextSeparator className="test">Foo</MultipleFileUploadTitleTextSeparator>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });
});

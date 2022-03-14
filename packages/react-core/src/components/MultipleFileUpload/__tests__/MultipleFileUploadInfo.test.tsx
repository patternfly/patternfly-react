import React from 'react';
import { render, screen } from '@testing-library/react';
import { MultipleFileUploadInfo } from '../MultipleFileUploadInfo';

describe('MultipleFileUploadInfo', () => {
  test('renders with expected class names', () => {
    render(<MultipleFileUploadInfo>Foo</MultipleFileUploadInfo>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    render(<MultipleFileUploadInfo className="test">Foo</MultipleFileUploadInfo>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });
});

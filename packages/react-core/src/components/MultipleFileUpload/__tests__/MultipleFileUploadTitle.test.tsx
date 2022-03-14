import React from 'react';
import { render, screen } from '@testing-library/react';
import { MultipleFileUploadTitle } from '../MultipleFileUploadTitle';

describe('MultipleFileUploadTitle', () => {
  test('renders with expected class names', () => {
    render(<MultipleFileUploadTitle>Foo</MultipleFileUploadTitle>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    render(<MultipleFileUploadTitle className="test">Foo</MultipleFileUploadTitle>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });
});

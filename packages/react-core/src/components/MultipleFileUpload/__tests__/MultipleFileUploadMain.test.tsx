import React from 'react';
import { render, screen } from '@testing-library/react';
import { MultipleFileUploadMain } from '../MultipleFileUploadMain';

describe('MultipleFileUploadMain', () => {
  test('renders with expected class names', () => {
    render(<MultipleFileUploadMain>Foo</MultipleFileUploadMain>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    render(<MultipleFileUploadMain className="test">Foo</MultipleFileUploadMain>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });
});

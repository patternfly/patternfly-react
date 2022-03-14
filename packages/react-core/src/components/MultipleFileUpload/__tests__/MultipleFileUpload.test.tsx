import React from 'react';
import { render, screen } from '@testing-library/react';
import { MultipleFileUpload } from '../MultipleFileUpload';

describe('MultipleFileUpload', () => {
  test('renders with expected class names when not horizontal', () => {
    render(<MultipleFileUpload>Foo</MultipleFileUpload>);
    console.log(screen.getByText('Foo').outerHTML);
  });

  test('renders with expected class names when horizontal', () => {
    render(<MultipleFileUpload isHorizontal>Foo</MultipleFileUpload>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    render(<MultipleFileUpload className="test">Foo</MultipleFileUpload>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });
});

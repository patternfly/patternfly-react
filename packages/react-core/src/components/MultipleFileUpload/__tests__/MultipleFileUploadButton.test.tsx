import React from 'react';
import { render, screen } from '@testing-library/react';
import { MultipleFileUploadButton } from '../MultipleFileUploadButton';

describe('MultipleFileUploadButton', () => {
  test('renders with expected class names', () => {
    render(<MultipleFileUploadButton>Foo</MultipleFileUploadButton>);
    expect(screen.getByRole('button', { name: 'Upload' }).outerHTML).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    render(<MultipleFileUploadButton className="test">Foo</MultipleFileUploadButton>);
    expect(screen.getByRole('button', { name: 'Upload' }).outerHTML).toMatchSnapshot();
  });

  test('renders with aria-label applied to the button', () => {
    render(<MultipleFileUploadButton aria-label="test">Foo</MultipleFileUploadButton>);
    expect(screen.getByLabelText('test').outerHTML).toMatchSnapshot();
  });
});

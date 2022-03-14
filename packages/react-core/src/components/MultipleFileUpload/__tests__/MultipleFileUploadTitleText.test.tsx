import React from 'react';
import { render, screen } from '@testing-library/react';
import { MultipleFileUploadTitleText } from '../MultipleFileUploadTitleText';

describe('MultipleFileUploadTitleText', () => {
  test('renders with expected class names', () => {
    render(<MultipleFileUploadTitleText>Foo</MultipleFileUploadTitleText>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    render(<MultipleFileUploadTitleText className="test">Foo</MultipleFileUploadTitleText>);
    expect(screen.getByText('Foo').outerHTML).toMatchSnapshot();
  });
});

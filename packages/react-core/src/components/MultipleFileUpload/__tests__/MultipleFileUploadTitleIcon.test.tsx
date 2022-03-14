import React from 'react';
import { render, screen } from '@testing-library/react';
import { MultipleFileUploadTitleIcon } from '../MultipleFileUploadTitleIcon';

describe('MultipleFileUploadTitleIcon', () => {
  test('renders with expected class names', () => {
    render(<MultipleFileUploadTitleIcon data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    render(<MultipleFileUploadTitleIcon className="test" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });
});

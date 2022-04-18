import React from 'react';
import { render, screen } from '@testing-library/react';
import { MultipleFileUploadTitleIcon } from '../MultipleFileUploadTitleIcon';

describe('MultipleFileUploadTitleIcon', () => {
  test('renders with expected class names', () => {
    const { asFragment } = render(<MultipleFileUploadTitleIcon data-testid="test-id" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders custom class names', () => {
    const { asFragment } = render(<MultipleFileUploadTitleIcon className="test" data-testid="test-id" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

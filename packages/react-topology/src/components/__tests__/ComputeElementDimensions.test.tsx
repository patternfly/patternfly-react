import React from 'react';
import { render, screen } from '@testing-library/react';
import ComputeElementDimensions from '../ComputeElementDimensions';

describe('ComputeElementDimensions', () => {
  it('should render invisible group', () => {
    render(
      <svg data-testid="wrapper-test-id">
        <ComputeElementDimensions element={{ isDimensionsInitialized: jest.fn().mockReturnValue(true) } as any} />
      </svg>
    );

    expect(
      screen
        .getByTestId('wrapper-test-id')
        .querySelector('g')
    ).toHaveAttribute('style', 'visibility: hidden;');
  });
});

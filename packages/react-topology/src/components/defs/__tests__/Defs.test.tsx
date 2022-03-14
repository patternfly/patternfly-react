import React from 'react';
import { render, screen } from '@testing-library/react';
import { Defs } from '../Defs';

describe('Defs', () => {
  it('should render initially empty', () => {
    render(
      <div data-testid="wrapper-test-id">
        <Defs />
      </div>
    );
    expect(screen.getByTestId('wrapper-test-id').querySelector('defs')).toBeNull();
  });
});

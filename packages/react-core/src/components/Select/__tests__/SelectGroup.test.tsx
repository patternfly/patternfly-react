import React from 'react';

import { render, screen } from '@testing-library/react';

import { SelectGroup } from '../SelectGroup';
import { SelectProvider } from '../selectConstants';

describe('SelectGroup', () => {
  test('renders with children successfully', () => {
    render(
      <SelectProvider
        value={{ onSelect: () => {}, onFavorite: () => {}, onClose: () => {}, variant: 'single', inputIdPrefix: '' }}
      >
        <SelectGroup label="test" data-testid="test-id">
          <div>child</div>
        </SelectGroup>
      </SelectProvider>
    );
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });
});

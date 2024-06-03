import React from 'react';
import { PaginationOptionsMenu } from '../PaginationOptionsMenu';
import { render, screen } from '@testing-library/react';

jest.mock('../../../helpers/Popper/Popper');

test('renders pagination options menu', () => {
  render(
    <div data-testid="options-menu">
      <PaginationOptionsMenu toggleTemplate="Test" />
    </div>
  );

  expect(screen.getByTestId('options-menu').children[0]).toBeVisible();
});

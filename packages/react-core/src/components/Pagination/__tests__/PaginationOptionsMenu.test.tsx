import React from 'react';
import { PaginationOptionsMenu } from '../PaginationOptionsMenu';
import { render, screen } from '@testing-library/react';
import styles from '@patternfly/react-styles/css/components/Menu/menu';

jest.mock('../../../helpers/Popper/Popper');

test('renders pagination options menu', () => {
  render(
    <div data-testid="options-menu">
      <PaginationOptionsMenu toggleTemplate="Test" />
    </div>
  );

  expect(screen.getByTestId('options-menu').children[0]).toBeVisible();
});

test(`renders with class ${styles.menu} by default`, () => {
  render(<PaginationOptionsMenu toggleTemplate="Test" />);

  // Mocked Popper is rendered with data-testid="mock-wrapper"
  expect(screen.getByTestId('mock-wrapper').parentElement).toHaveClass(styles.menu);
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';

import { TextInputGroupUtilities } from '../TextInputGroupUtilities';

describe('TextInputGroupUtilities', () => {
  it('renders without children', () => {
    render(<TextInputGroupUtilities data-testid="TextInputGroupUtilities" />);

    expect(screen.getByTestId('TextInputGroupUtilities')).toBeVisible();
  });

  it('renders the children', () => {
    render(<TextInputGroupUtilities>{<button>Test</button>}</TextInputGroupUtilities>);

    expect(screen.getByRole('button', { name: 'Test' })).toBeVisible();
  });

  it(`renders with class ${styles.textInputGroupUtilities}`, () => {
    render(<TextInputGroupUtilities>Test</TextInputGroupUtilities>);

    const utilities = screen.getByText('Test');

    expect(utilities).toHaveClass(styles.textInputGroupUtilities);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<TextInputGroupUtilities>{<button>Test</button>}</TextInputGroupUtilities>);

    expect(asFragment()).toMatchSnapshot();
  });
});

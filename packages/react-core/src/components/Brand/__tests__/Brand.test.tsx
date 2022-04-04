import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Brand } from '../Brand';
import '@testing-library/jest-dom';

describe('Brand', () => {
  test('simple brand', () => {
    const view = render(<Brand alt="brand" />);
    expect(view.container).toMatchSnapshot();
  });
  test('passing children creates picture brand', () => {
    const view = render(
      <Brand>
        <div>test</div>
      </Brand>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});

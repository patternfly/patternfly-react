import React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../Form';

describe('Form component', () => {
  test('should render default form variant', () => {
    const view = render(<Form />);
    expect(view.container).toMatchSnapshot();
  });

  test('should render horizontal form variant', () => {
    const view = render(<Form isHorizontal />);
    expect(view.container).toMatchSnapshot();
  });

  test('should render form with limited width', () => {
    const view = render(<Form isWidthLimited />);
    expect(view.container).toMatchSnapshot();
  });
});

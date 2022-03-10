import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginMainFooterBandItem } from '../LoginMainFooterBandItem';

describe('LoginMainFooterBandItem', () => {
  test('renders with PatternFly Core styles', () => {
    render(<LoginMainFooterBandItem data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<LoginMainFooterBandItem className="extra-class">test</LoginMainFooterBandItem>);
    expect(screen.getByText('test').outerHTML).toMatchSnapshot();
  });

  test('with custom node', () => {
    const CustomNode = () => <div>My custom node</div>;

    render(
      <LoginMainFooterBandItem>
        <CustomNode />
      </LoginMainFooterBandItem>
    );
    expect(screen.getByText('My custom node').outerHTML).toMatchSnapshot();
  });
});

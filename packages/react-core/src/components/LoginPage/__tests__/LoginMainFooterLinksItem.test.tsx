import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginMainFooterLinksItem } from '../LoginMainFooterLinksItem';

describe('LoginMainFooterLinksItem', () => {
  test('renders with PatternFly Core styles', () => {
    render(<LoginMainFooterLinksItem href="#" target="" />);
    expect(screen.getByRole('listitem').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<LoginMainFooterLinksItem className="extra-class" />);
    expect(screen.getByRole('listitem').outerHTML).toMatchSnapshot();
  });

  test('with custom node', () => {
    const CustomNode = () => <div>My custom node</div>;

    render(
      <LoginMainFooterLinksItem>
        <CustomNode />
      </LoginMainFooterLinksItem>
    );

    expect(screen.getByRole('listitem').outerHTML).toMatchSnapshot();
  });
});

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginFooterItem } from '../LoginFooterItem';

describe('LoginFooterItem', () => {
  test('renders with PatternFly Core styles', () => {
    render(<LoginFooterItem target="_self" href="#" />);
    expect(screen.getByRole('link').outerHTML).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    render(<LoginFooterItem className="extra-class" />);
    expect(screen.getByRole('link').outerHTML).toMatchSnapshot();
  });

  test('with custom node', () => {
    const CustomNode = () => <div>My custom node</div>;

    render(
      <LoginFooterItem>
        <CustomNode />
      </LoginFooterItem>
    );
    expect(screen.getByText('My custom node').outerHTML).toMatchSnapshot();
  });
});

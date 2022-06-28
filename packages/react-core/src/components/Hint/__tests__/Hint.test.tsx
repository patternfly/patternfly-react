import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Hint } from '../Hint';
import { HintBody } from '../HintBody';
import { HintTitle } from '../HintTitle';
import { HintFooter } from '../HintFooter';

describe('Hint', () => {
  it('renders without children', () => {
    render(<Hint data-testid='Hint' />);

    expect(screen.getByTestId('Hint')).toBeVisible();
  });

  it('renders children', () => {
    render(<Hint>Test</Hint>);

    expect(screen.getByText('Test')).toBeVisible();
  });

  it('renders with class pf-c-hint', () => {
    render(<Hint>Test</Hint>);

    const hint = screen.getByText('Test');

    expect(hint).toHaveClass('pf-c-hint');
  });

  it('renders with custom class names provided via prop', () => {
    render(<Hint className='custom-classname'>Test</Hint>);

    const hint = screen.getByText('Test');

    expect(hint).toHaveClass('custom-classname');
  });

  it('does not render actions options when not passed', () => {
    render(<Hint>Test</Hint>);

    const actions = screen.queryByText('actions');

    expect(actions).not.toBeInTheDocument();
  });

  it('renders actions options', () => {
    render(<Hint actions="actions">Test</Hint>);

    const actions = screen.getByText("actions");

    expect(actions).toBeVisible();
  });

  it('renders hint with body, title, and footer', () => {
    const { asFragment } = render(
      <Hint>
        <HintTitle>Title</HintTitle>
        <HintBody>Body</HintBody>
        <HintFooter>Footer</HintFooter>
      </Hint>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

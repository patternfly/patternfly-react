import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BackToTop } from '../BackToTop';
import userEvent from '@testing-library/user-event';

test('Renders with the default class', () => {
  render(
    <div data-testid="backtotop">
      <BackToTop />
    </div>
  );

  expect(screen.getByTestId('backtotop').firstChild).toHaveClass('pf-c-back-to-top');
});

test('BackToTop is not yet visible', () => {
  render(
    <div data-testid="backtotop">
      <BackToTop />
    </div>
  );

  expect(screen.getByTestId('backtotop').firstChild).toHaveClass('pf-m-hidden');
});

test('BackToTop is visible after scrolling', () => {
  render(
    <div data-testid="backtotop">
      <BackToTop />
    </div>
  );

  fireEvent.scroll(window, { target: { scrollY: 401 } });
  expect(screen.getByTestId('backtotop').firstChild).not.toHaveClass('pf-m-hidden');
});

test('ScrollTo event is fired after clicking BackToTop', () => {
  render(
    <div data-testid="backtotop">
      <BackToTop />
    </div>
  );

  fireEvent.scroll(window, { target: { scrollY: 401 } });
  global.scrollTo = jest.fn();

  userEvent.click(screen.getByTestId('backtotop').firstChild as Element);
  expect(global.scrollTo).toHaveBeenCalled();
});

test('Renders backToTop when isAlwaysVisible prop is set', () => {
  render(
    <div data-testid="backtotop">
      <BackToTop isAlwaysVisible />
    </div>
  );

  expect(screen.getByTestId('backtotop').firstChild).toBeVisible();
  expect(screen.getByTestId('backtotop').firstChild).not.toHaveClass('pf-m-hidden');
});

test('Renders with custom className prop passed', () => {
  render(
    <div data-testid="backtotop">
      <BackToTop className="test-class" />
    </div>
  );
  expect(screen.getByTestId('backtotop').firstChild).toHaveClass('test-class');
});

test('Renders with custom title prop passed', () => {
  render(
    <div data-testid="backtotop">
      <BackToTop title="Back to the Future" />
    </div>
  );
  expect(screen.getByTestId('backtotop').firstChild).toHaveTextContent('Back to the Future');
});

test('Renders with passed aria-label', () => {
  render(
    <div data-testid="backtotop">
      <BackToTop aria-label="Back to top test" />
    </div>
  );
  expect(screen.getByTestId('backtotop').firstChild).toHaveAccessibleName('Back to top test');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<BackToTop />);

  expect(asFragment()).toMatchSnapshot();
});

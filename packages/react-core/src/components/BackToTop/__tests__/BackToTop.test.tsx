import React, { RefObject } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BackToTop } from '../BackToTop';
import userEvent from '@testing-library/user-event';
test('Renders BackToTop', () => {
  render(
    <div data-testid="backtotop">
      <BackToTop />
    </div>
  );

  expect(screen.getByTestId('backtotop').firstChild).toBeTruthy();
});

test('Renders with the default class', () => {
  render(<BackToTop />);

  expect(screen.getByRole(`button`).parentElement).toHaveClass('pf-c-back-to-top');
});

test('BackToTop is not yet visible', () => {
  render(<BackToTop />);

  expect(screen.getByRole(`button`).parentElement).toHaveClass('pf-m-hidden');
});

test('BackToTop is visible after scrolling', () => {
  render(<BackToTop />);

  fireEvent.scroll(window, { target: { scrollY: 401 } });
  expect(screen.getByRole(`button`).parentElement).not.toHaveClass('pf-m-hidden');
});

test('ScrollTo event is fired after clicking BackToTop', () => {
  render(<BackToTop />);

  fireEvent.scroll(window, { target: { scrollY: 401 } });
  global.scrollTo = jest.fn();

  userEvent.click(screen.getByRole(`button`).parentElement as Element);
  expect(global.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
});

test('BackToTop gets hidden again after user scrolls back up', () => {
  render(<BackToTop />);

  fireEvent.scroll(window, { target: { scrollY: 401 } });

  fireEvent.scroll(window, { target: { scrollY: 0 } });
  expect(screen.getByRole(`button`).parentElement).toHaveClass('pf-m-hidden');
});

test('Renders BackToTop when isAlwaysVisible prop is set', () => {
  render(<BackToTop isAlwaysVisible />);

  expect(screen.getByRole(`button`).parentElement).not.toHaveClass('pf-m-hidden');
});

test('Renders with custom className prop passed', () => {
  render(<BackToTop className="test-class" />);
  expect(screen.getByRole(`button`).parentElement).toHaveClass('test-class');
});

test('Renders with custom title prop passed', () => {
  render(<BackToTop title="Back to the Future" />);
  expect(screen.getByRole(`button`).parentElement).toHaveTextContent('Back to the Future');
});

test('Renders with passed aria-label', () => {
  render(<BackToTop aria-label="Back to top test" />);
  expect(screen.getByRole(`button`).parentElement).toHaveAccessibleName('Back to top test');
});

test('BackToTop can be accessed via passed innerRef', () => {
  const testRef: RefObject<HTMLElement> = React.createRef();
  render(<BackToTop innerRef={testRef} isAlwaysVisible />);
  global.scrollTo = jest.fn();
  testRef.current?.click();
  expect(global.scrollTo).toBeCalledTimes(1);
});

test('BackToTop reacts to scrolling inside element passed via scrollableSelector', () => {
  render(
    <div id="backToTopWrapper">
      <BackToTop scrollableSelector="#backToTopWrapper" />
    </div>
  );
  const wrapper = document.getElementById('backToTopWrapper');
  fireEvent.scroll(wrapper as HTMLElement, { target: { scrollY: 401 } });

  expect(screen.getByRole(`button`).parentElement).not.toHaveClass('pf-m-hidden');
});

test('BackToTop does not react to scrolling inside window when scrollableSelector passed', () => {
  render(
    <div id="backToTopWrapper">
      <BackToTop scrollableSelector="#backToTopWrapper" />
    </div>
  );
  fireEvent.scroll(window, { target: { scrollY: 401 } });

  expect(screen.getByRole(`button`).parentElement).toHaveClass('pf-m-hidden');
});

test('Clicking backToTop scrolls back to top of the element passed via scrollableSelector', () => {
  render(
    <div id="backToTopWrapper">
      <BackToTop scrollableSelector="#backToTopWrapper" />
    </div>
  );

  const wrapper = document.getElementById('backToTopWrapper');
  fireEvent.scroll(wrapper as HTMLElement, { target: { scrollY: 401 } });
  wrapper!.scrollTo = jest.fn();
  userEvent.click(screen.getByRole(`button`).parentElement as Element);

  expect(wrapper?.scrollTo).toBeCalledTimes(1);
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<BackToTop />);

  expect(asFragment()).toMatchSnapshot();
});

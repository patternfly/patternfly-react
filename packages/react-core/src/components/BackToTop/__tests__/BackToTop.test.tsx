import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BackToTop } from '../BackToTop';
import userEvent from '@testing-library/user-event'


test('BackToTop button is not yet visible', () => {
  render(<BackToTop data-testid="backtotop"/>)
  
  expect(screen.getByTestId("backtotop")).toHaveClass("pf-m-hidden")
})

test('BackToTop button is visible after scrolling', () => {
  render(<BackToTop data-testid="backtotop"/>)

  fireEvent.scroll(window,{target: {scrollY: 401}})
  expect(screen.getByTestId("backtotop")).not.toHaveClass("pf-m-hidden")
})

test('ScrollTo event is fired after clicking BackToTop button', () => {
  render(<BackToTop data-testid="backtotop"/>)

  fireEvent.scroll(window,{target: {scrollY: 401}})
  global.scrollTo = jest.fn()

  userEvent.click(screen.getByTestId("backtotop"))
  expect(global.scrollTo).toHaveBeenCalled()
})

test('Renders backToTop button when isAlwaysVisible is set', () => {
  render(<BackToTop data-testid="backtotop" isAlwaysVisible/>)

  expect(screen.getByTestId("backtotop")).toBeVisible()
  expect(screen.getByTestId("backtotop")).not.toHaveClass("pf-m-hidden")
})





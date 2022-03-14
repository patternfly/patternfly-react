import * as React from 'react';
import { render } from '@testing-library/react';
import { Spinner } from '../Spinner';

test('simple spinner', () => {
  const view = render(<Spinner />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('small spinner', () => {
  const view = render(<Spinner size="sm" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('medium spinner', () => {
  const view = render(<Spinner size="md" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('large spinner', () => {
  const view = render(<Spinner size="lg" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

test('extra large spinner', () => {
  const view = render(<Spinner size="xl" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

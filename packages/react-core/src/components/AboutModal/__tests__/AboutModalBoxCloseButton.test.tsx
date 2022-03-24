import * as React from 'react';
import { render } from '@testing-library/react';
import { AboutModalBoxCloseButton } from '../AboutModalBoxCloseButton';

test('AboutModalBoxCloseButton Test', () => {
  const view = render(<AboutModalBoxCloseButton />);
  expect(view.container).toMatchSnapshot();
});

test('AboutModalBoxCloseButton Test onclose', () => {
  const onClose = jest.fn();
  const view = render(<AboutModalBoxCloseButton onClose={onClose} />);
  expect(view.container).toMatchSnapshot();
});

test('AboutModalBoxCloseButton Test close button aria label', () => {
  const closeButtonAriaLabel = 'Klose Daylok';
  const view = render(<AboutModalBoxCloseButton aria-label={closeButtonAriaLabel} />);
  expect(view.container).toMatchSnapshot();
});

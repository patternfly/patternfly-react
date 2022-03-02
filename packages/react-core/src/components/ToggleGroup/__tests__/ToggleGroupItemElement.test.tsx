import * as React from 'react';
import { render } from '@testing-library/react';
import { ToggleGroupItemElement, ToggleGroupItemVariant } from '../ToggleGroupItemElement';

test('text variant', () => {
  const view = render(<ToggleGroupItemElement variant={ToggleGroupItemVariant.text}>Test</ToggleGroupItemElement>);
  expect(view.container).toMatchSnapshot();
});

test('icon variant', () => {
  const view = render(<ToggleGroupItemElement variant={ToggleGroupItemVariant.icon}>ICON</ToggleGroupItemElement>);
  expect(view.container).toMatchSnapshot();
});

test('empty', () => {
  const view = render(<ToggleGroupItemElement />);
  expect(view.container).toMatchSnapshot();
});

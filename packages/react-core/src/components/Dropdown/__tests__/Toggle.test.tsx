import * as React from 'react';
import { render } from '@testing-library/react';
import { DropdownToggle } from '../DropdownToggle';
import { KebabToggle } from '../KebabToggle';

test('Dropdown toggle', () => {
  const view = render(<DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle>);
  expect(view.container.outerHTML).toMatchSnapshot();
});
test('Kebab toggle', () => {
  const view = render(<KebabToggle id="Dropdown Toggle" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});

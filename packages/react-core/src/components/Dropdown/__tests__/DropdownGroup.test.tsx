import * as React from 'react';
import { render } from '@testing-library/react';
import { DropdownGroup } from '../DropdownGroup';

describe('dropdown groups', () => {
  test('basic render', () => {
    const view = render(<DropdownGroup label="Group 1">Something</DropdownGroup>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});

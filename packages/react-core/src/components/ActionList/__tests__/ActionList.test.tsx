import * as React from 'react';
import { render } from '@testing-library/react';
import { ActionList } from '../ActionList';

describe('action list', () => {
  test('renders successfully', () => {
    const view = render(<ActionList>test</ActionList>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
  test('isIconList flag adds modifier', () => {
    const view = render(<ActionList isIconList>test</ActionList>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});

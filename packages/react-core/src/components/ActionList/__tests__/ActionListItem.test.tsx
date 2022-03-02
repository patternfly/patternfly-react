import * as React from 'react';
import { render } from '@testing-library/react';
import { ActionListItem } from '../ActionListItem';

describe('action list item', () => {
  test('renders successfully', () => {
    const view = render(<ActionListItem>test</ActionListItem>);
    expect(view.container).toMatchSnapshot();
  });
});

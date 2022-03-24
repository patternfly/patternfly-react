import * as React from 'react';
import { render } from '@testing-library/react';
import { ActionListGroup } from '../ActionListGroup';

describe('action list group', () => {
  test('renders successfully', () => {
    const view = render(<ActionListGroup>test</ActionListGroup>);
    expect(view.container).toMatchSnapshot();
  });
});

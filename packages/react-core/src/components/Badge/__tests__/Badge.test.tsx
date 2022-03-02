import { Badge } from '../Badge';
import React from 'react';
import { render } from '@testing-library/react';

Object.values([true, false]).forEach(isRead => {
  test(`${isRead} Badge`, () => {
    const view = render(<Badge isRead={isRead}>{isRead ? 'read' : 'unread'} Badge</Badge>);
    expect(view.container).toMatchSnapshot();
  });
});

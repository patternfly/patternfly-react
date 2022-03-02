/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Badge } from '../../Badge';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Badge should match snapshot (auto-generated)', () => {
  const view = render(<Badge isRead={false} children={''} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});

/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Divider } from '../../Divider';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Divider should match snapshot (auto-generated)', () => {
  const view = render(<Divider className={"''"} component={'hr'} />);
  expect(view.container).toMatchSnapshot();
});

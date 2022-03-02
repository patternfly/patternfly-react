/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from '../../Avatar';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Avatar should match snapshot (auto-generated)', () => {
  const view = render(<Avatar className={"''"} src={"''"} alt={'string'} />);
  expect(view.container).toMatchSnapshot();
});

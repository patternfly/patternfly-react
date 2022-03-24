/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ActionGroup } from '../../ActionGroup';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ActionGroup should match snapshot (auto-generated)', () => {
  const view = render(<ActionGroup children={<>ReactNode</>} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});

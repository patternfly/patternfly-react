/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { DropdownGroup } from '../../DropdownGroup';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('DropdownGroup should match snapshot (auto-generated)', () => {
  const view = render(<DropdownGroup children={<>ReactNode</>} className={"''"} label={''} />);
  expect(view.container).toMatchSnapshot();
});

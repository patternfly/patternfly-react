/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { AboutModalBox } from '../../AboutModalBox';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('AboutModalBox should match snapshot (auto-generated)', () => {
  const view = render(<AboutModalBox children={<div>ReactNode</div>} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});

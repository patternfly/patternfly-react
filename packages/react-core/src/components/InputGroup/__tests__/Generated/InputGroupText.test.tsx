/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { InputGroupText } from '../../InputGroupText';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('InputGroupText should match snapshot (auto-generated)', () => {
  const view = render(<InputGroupText className={"''"} children={<div>ReactNode</div>} component={'span'} />);
  expect(view.container).toMatchSnapshot();
});

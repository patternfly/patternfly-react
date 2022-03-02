/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { InputGroup } from '../../InputGroup';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('InputGroup should match snapshot (auto-generated)', () => {
  const view = render(<InputGroup className={"''"} children={<div>ReactNode</div>} />);
  expect(view.container).toMatchSnapshot();
});

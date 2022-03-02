/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Spinner } from '../../Spinner';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Spinner should match snapshot (auto-generated)', () => {
  const view = render(<Spinner className={"test"} size={'xl'} aria-valuetext={"'Loading...'"} />);
  expect(view.container).toMatchSnapshot();
});

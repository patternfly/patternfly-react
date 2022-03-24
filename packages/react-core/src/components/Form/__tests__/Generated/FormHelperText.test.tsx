/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { FormHelperText } from '../../FormHelperText';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('FormHelperText should match snapshot (auto-generated)', () => {
  const view = render(<FormHelperText children={<>ReactNode</>} isError={false} isHidden={true} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});

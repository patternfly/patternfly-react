/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { AboutModalBoxBrand } from '../../AboutModalBoxBrand';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('AboutModalBoxBrand should match snapshot (auto-generated)', () => {
  const view = render(<AboutModalBoxBrand className={"''"} src={"''"} alt={'string'} />);
  expect(view.container).toMatchSnapshot();
});

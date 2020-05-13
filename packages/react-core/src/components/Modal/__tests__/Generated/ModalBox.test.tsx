/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ModalBox } from '../../ModalBox';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ModalBox should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ModalBox
      children={<div>ReactNode</div>}
      className={"''"}
      variant={'default'}
      aria-labelledby={'string'}
      aria-label={"''"}
      aria-describedby={'string'}
    />
  );
  expect(view).toMatchSnapshot();
});

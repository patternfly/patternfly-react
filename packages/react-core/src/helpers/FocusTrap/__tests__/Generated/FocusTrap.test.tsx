/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { FocusTrap } from '../../FocusTrap';

it('FocusTrap should match snapshot (auto-generated)', () => {
  const view = shallow(
    <FocusTrap
      children={<div>ReactNode</div>}
      className={'string'}
      active={false}
      paused={false}
      focusTrapOptions={undefined}
    />
  );
  expect(view).toMatchSnapshot();
});

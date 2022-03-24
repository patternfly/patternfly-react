/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { FocusTrap } from '../../FocusTrap';

it('FocusTrap should match snapshot (auto-generated)', () => {
  const view = render(
    <FocusTrap
      children={<div>ReactNode</div>}
      className={'string'}
      active={false}
      paused={false}
      focusTrapOptions={undefined}
    />
  );
  expect(view.container).toMatchSnapshot();
});

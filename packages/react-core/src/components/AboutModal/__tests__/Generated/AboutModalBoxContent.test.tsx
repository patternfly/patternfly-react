/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { AboutModalBoxContent } from '../../AboutModalBoxContent';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('AboutModalBoxContent should match snapshot (auto-generated)', () => {
  const view = render(
    <AboutModalBoxContent
      children={<div>ReactNode</div>}
      className={"''"}
      id={'string'}
      trademark={'string'}
      noAboutModalBoxContentContainer={false}
    />
  );
  expect(view.container).toMatchSnapshot();
});

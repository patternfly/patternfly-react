/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { PageSidebar } from '../../PageSidebar';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('PageSidebar should match snapshot (auto-generated)', () => {
  const view = render(
    <PageSidebar className={"''"} nav={<div>ReactNode</div>} isManagedSidebar={true} isNavOpen={true} theme={'dark'} />
  );
  expect(view.container).toMatchSnapshot();
});

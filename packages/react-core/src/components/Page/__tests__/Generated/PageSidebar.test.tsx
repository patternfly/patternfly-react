/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { PageSidebar } from '../../PageSidebar';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('PageSidebar should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <PageSidebar className={"''"} isManagedSidebar={true} isSidebarOpen={true} theme={'dark'}>
      <div>ReactNode</div>
    </PageSidebar>
  );
  expect(asFragment()).toMatchSnapshot();
});

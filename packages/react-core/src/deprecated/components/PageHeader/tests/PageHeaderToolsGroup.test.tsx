/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { PageHeaderToolsGroup } from '../PageHeaderToolsGroup';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('PageHeaderToolsGroup should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <PageHeaderToolsGroup className={'string'}>
      <div>ReactNode</div>
    </PageHeaderToolsGroup>
  );
  expect(asFragment()).toMatchSnapshot();
});

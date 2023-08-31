/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { PageHeaderToolsItem } from '../PageHeaderToolsItem';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('PageHeaderToolsItem should match snapshot (auto-generated)', () => {
  const { asFragment } = render(
    <PageHeaderToolsItem className={'string'} isSelected={true}>
      children={<div>ReactNode</div>}
    </PageHeaderToolsItem>
  );
  expect(asFragment()).toMatchSnapshot();
});

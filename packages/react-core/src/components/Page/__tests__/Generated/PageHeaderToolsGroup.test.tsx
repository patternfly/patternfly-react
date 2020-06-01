/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { PageHeaderToolsGroup } from '../../PageHeaderToolsGroup';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('PageHeaderToolsGroup should match snapshot (auto-generated)', () => {
  const view = shallow(
    <PageHeaderToolsGroup children={<div>ReactNode</div>} className={'string'} />
  );
  expect(view).toMatchSnapshot();
});

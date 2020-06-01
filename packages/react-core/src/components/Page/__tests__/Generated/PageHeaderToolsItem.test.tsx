/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { PageHeaderToolsItem } from '../../PageHeaderToolsItem';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('PageHeaderToolsItem should match snapshot (auto-generated)', () => {
  const view = shallow(
    <PageHeaderToolsItem children={<div>ReactNode</div>} className={'string'} isSelected={true} />
  );
  expect(view).toMatchSnapshot();
});

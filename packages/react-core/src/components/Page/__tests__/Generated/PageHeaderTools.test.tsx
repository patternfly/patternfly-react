/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { PageHeaderTools } from '../../PageHeaderTools';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('PageHeaderTools should match snapshot (auto-generated)', () => {
  const view = shallow(<PageHeaderTools children={<div>ReactNode</div>} className={'string'} />);
  expect(view).toMatchSnapshot();
});

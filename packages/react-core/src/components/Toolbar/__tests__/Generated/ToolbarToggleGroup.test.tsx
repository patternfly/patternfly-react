/**
 * This test was generated
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { ToolbarToggleGroup } from '../../ToolbarToggleGroup';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ToolbarToggleGroup should match snapshot (auto-generated)', () => {
  const view = shallow(<ToolbarToggleGroup toggleIcon={<div>ReactNode</div>} />);
  expect(view).toMatchSnapshot();
});

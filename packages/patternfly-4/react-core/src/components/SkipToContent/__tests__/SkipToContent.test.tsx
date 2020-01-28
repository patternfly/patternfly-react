import * as React from 'react';
import { shallow } from 'enzyme';
import { SkipToContent } from '../SkipToContent';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('SkipToContent should match snapshot (auto-generated)', () => {
  const view = shallow(
    <SkipToContent
      component={'a'}
			href={"string"}
			children={<div>ReactNode</div>}
			className={"''"}
			show={false}
    />);
  expect(view).toMatchSnapshot();
});

const props = {};

test('Verify Skip To Content', () => {
  const view = shallow(<SkipToContent href="#main-content" {...props} />);
  // Add a useful assertion here.
  expect(view).toMatchSnapshot();
});

test('Verify Skip To Content if forced to display', () => {
  const view = shallow(<SkipToContent href="#main-content" {...props} show />);
  // Add a useful assertion here.
  expect(view).toMatchSnapshot();
});

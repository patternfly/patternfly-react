import * as React from 'react';
import { shallow } from 'enzyme';
import { ClipboardCopyExpanded } from '../ClipboardCopyExpanded';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('ClipboardCopyExpanded should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ClipboardCopyExpanded
      className={"''"}
			children={<div>ReactNode</div>}
			onChange={(): any => undefined}
			isReadOnly={false}
			isCode={false}
    />);
  expect(view).toMatchSnapshot();
});

const props = {
  className: 'class-1',
  id: 'id-1'
};

test('expanded content render', () => {
  const view = shallow(<ClipboardCopyExpanded {...props}>This is my text</ClipboardCopyExpanded>);
  expect(view).toMatchSnapshot();
});

test('expanded code content render', () => {
  const view = shallow(<ClipboardCopyExpanded isCode {...props}>{`{
    "name": "@patternfly/react-core",
    "version": "1.33.2"
  }`}</ClipboardCopyExpanded>);
  expect(view).toMatchSnapshot();
});

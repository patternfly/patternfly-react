import * as React from 'react';
import { shallow } from 'enzyme';
import { ClipboardCopyToggle } from '../ClipboardCopyToggle';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('ClipboardCopyToggle should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ClipboardCopyToggle
      onClick={(event: React.MouseEvent) => undefined as void}
			id={"string"}
			textId={"string"}
			contentId={"string"}
			isExpanded={false}
			className={"''"}
    />);
  expect(view).toMatchSnapshot();
});

const props = {
  id: 'my-id',
  textId: 'my-text-id',
  contentId: 'my-content-id',
  isExpanded: false,
  className: 'myclassName',
  onClick: jest.fn()
};

test('toggle button render', () => {
  const desc = 'toggle content';
  const view = shallow(<ClipboardCopyToggle {...props} aria-label={desc} />);
  expect(view).toMatchSnapshot();
});

test('toggle button onClick', () => {
  const onclick = jest.fn();
  const view = shallow(<ClipboardCopyToggle {...props} onClick={onclick} />);
  view.find('button').simulate('click');
  expect(onclick).toBeCalled();
});

test('toggle button is on expanded mode', () => {
  let view = shallow(<ClipboardCopyToggle {...props} isExpanded />);
  expect(view.props()['aria-expanded']).toBe(true);
  view = shallow(<ClipboardCopyToggle {...props} isExpanded={false} />);
  expect(view.props()['aria-expanded']).toBe(false);
});

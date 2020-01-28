import * as React from 'react';
import { shallow } from 'enzyme';
import { Expandable } from '../Expandable';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('Expandable should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Expandable
      children={<div>ReactNode</div>}
			className={"''"}
			isExpanded={true}
			toggleText={"''"}
			toggleTextExpanded={"''"}
			toggleTextCollapsed={"''"}
			onToggle={(): any => undefined}
			isFocused={false}
			isHovered={false}
			isActive={false}
    />);
  expect(view).toMatchSnapshot();
});

const props = {};

test('Expandable', () => {
  const view = shallow(<Expandable {...props}>test </Expandable>);
  expect(view).toMatchSnapshot();
});

test('Renders Expandable expanded', () => {
  const view = shallow(<Expandable isExpanded> test </Expandable>);
  expect(view).toMatchSnapshot();
});

test('Expandable onToggle called', () => {
  const mockfn = jest.fn();
  const view = shallow(<Expandable onToggle={mockfn}> test </Expandable>);
  view
    .find('button')
    .at(0)
    .simulate('click');
  expect(mockfn.mock.calls).toHaveLength(1);
});

test('Renders Uncontrolled Expandable', () => {
  const view = shallow(<Expandable toggleText="Show More"> test </Expandable>);
  expect(view).toMatchSnapshot();
});

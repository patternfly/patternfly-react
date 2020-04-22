import * as React from 'react';
import { shallow } from 'enzyme';
import { ExpandableSection } from '../ExpandableSection';

const props = {};

test('ExpandableSection', () => {
  const view = shallow(<ExpandableSection {...props}>test </ExpandableSection>);
  expect(view).toMatchSnapshot();
});

test('Renders ExpandableSection expanded', () => {
  const view = shallow(<ExpandableSection isExpanded> test </ExpandableSection>);
  expect(view).toMatchSnapshot();
});

test('ExpandableSection onToggle called', () => {
  const mockfn = jest.fn();
  const view = shallow(<ExpandableSection onToggle={mockfn}> test </ExpandableSection>);
  view
    .find('button')
    .at(0)
    .simulate('click');
  expect(mockfn.mock.calls).toHaveLength(1);
});

test('Renders Uncontrolled ExpandableSection', () => {
  const view = shallow(<ExpandableSection toggleText="Show More"> test </ExpandableSection>);
  expect(view).toMatchSnapshot();
});

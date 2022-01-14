import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ExpandableSection } from '../ExpandableSection';
import { ExpandableSectionToggle } from '../ExpandableSectionToggle';

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

test('Detached ExpandableSection renders successfully', () => {
  const view = mount(
    <React.Fragment>
      <ExpandableSection {...props} isExpanded isDetached contentId="test">
        test
      </ExpandableSection>
      <ExpandableSectionToggle isExpanded contentId="test" direction="up">
        Toggle text
      </ExpandableSectionToggle>
    </React.Fragment>
  );
  expect(view).toMatchSnapshot();
});

test('Disclosure ExpandableSection', () => {
  const view = shallow(<ExpandableSection {...props} displaySize="large" isWidthLimited>test </ExpandableSection>);
  expect(view).toMatchSnapshot();
});

test('Renders ExpandableSection indented', () => {
  const view = shallow(<ExpandableSection isExpanded isIndented> test </ExpandableSection>);
  expect(view).toMatchSnapshot();
});

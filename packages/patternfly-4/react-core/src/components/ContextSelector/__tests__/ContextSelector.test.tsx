import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ContextSelector } from '../ContextSelector';
import { ContextSelectorItem } from '../ContextSelectorItem';

it('ContextSelector should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ContextSelector
      children={<>ReactNode</>}
			className={"''"}
			isOpen={false}
			onToggle={() => undefined as any}
			onSelect={() => undefined as any}
			screenReaderLabel={"''"}
			toggleText={"''"}
			searchButtonAriaLabel={"'Search menu items'"}
			searchInputValue={"''"}
			onSearchInputChange={() => undefined as any}
			searchInputPlaceholder={"'Search'"}
			onSearchButtonClick={() => undefined as any}
    />);
  expect(view).toMatchSnapshot();
});

const items = [
  <ContextSelectorItem key="0">My Project</ContextSelectorItem>,
  <ContextSelectorItem key="1">OpenShift Cluster</ContextSelectorItem>,
  <ContextSelectorItem key="2">Production Ansible</ContextSelectorItem>,
  <ContextSelectorItem key="3">AWS</ContextSelectorItem>,
  <ContextSelectorItem key="4">Azure</ContextSelectorItem>
];

test('Renders ContextSelector', () => {
  const view = shallow(<ContextSelector> {items} </ContextSelector>);
  expect(view).toMatchSnapshot();
});

test('Renders ContextSelector open', () => {
  const view = shallow(<ContextSelector isOpen> {items} </ContextSelector>);
  expect(view).toMatchSnapshot();
});

test('Verify onToggle is called ', () => {
  const mockfn = jest.fn();
  const view = mount(<ContextSelector onToggle={mockfn}> {items} </ContextSelector>);
  view
    .find('button')
    .at(0)
    .simulate('click');
  expect(mockfn.mock.calls).toHaveLength(1);
});
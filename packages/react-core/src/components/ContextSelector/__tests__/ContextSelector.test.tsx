import React from 'react';
import { shallow, mount } from 'enzyme';
import { ContextSelector } from '../ContextSelector';
import { ContextSelectorItem } from '../ContextSelectorItem';

const items = [
  <ContextSelectorItem key="0">My Project</ContextSelectorItem>,
  <ContextSelectorItem key="1">OpenShift Cluster</ContextSelectorItem>,
  <ContextSelectorItem key="2">Production Ansible</ContextSelectorItem>,
  <ContextSelectorItem key="3">AWS</ContextSelectorItem>,
  <ContextSelectorItem key="4">Azure</ContextSelectorItem>
];

const menuHeader = (
  <React.Fragment>
    Projects:
    <ContextSelectorItem onClick={e => this.onSelect(e, 'All projects')}>
      All projects
    </ContextSelectorItem>
  </React.Fragment>
);
test('Renders ContextSelector', () => {
  const view = shallow(<ContextSelector> {items} </ContextSelector>);
  expect(view).toMatchSnapshot();
});

test('Renders ContextSelector open', () => {
  const view = shallow(
    <ContextSelector isOpen menuHeader={menuHeader}>
      {items}
    </ContextSelector>
  );
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

import * as React from 'react';
import { shallow } from 'enzyme';
import { ContextSelectorMenuList } from '../ContextSelectorMenuList';
import { ContextSelectorItem } from '../ContextSelectorItem';

it('ContextSelectorMenuList should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ContextSelectorMenuList
      children={<>ReactNode</>}
			className={"''"}
			isOpen={true}
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

test('Renders ContextSelectorMenuList open', () => {
  const view = shallow(<ContextSelectorMenuList isOpen={false}>{items}</ContextSelectorMenuList>);
  expect(view).toMatchSnapshot();
});

test('Renders ContextSelectorMenuList closed', () => {
  const view = shallow(<ContextSelectorMenuList isOpen={false}>{items}</ContextSelectorMenuList>);
  expect(view).toMatchSnapshot();
});

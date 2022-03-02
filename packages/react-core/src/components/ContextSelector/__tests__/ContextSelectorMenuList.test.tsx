import React from 'react';
import { render } from '@testing-library/react';
import { ContextSelectorItem } from '../ContextSelectorItem';
import { ContextSelectorMenuList } from '../ContextSelectorMenuList';

const items = [
  <ContextSelectorItem key="0">My Project</ContextSelectorItem>,
  <ContextSelectorItem key="1">OpenShift Cluster</ContextSelectorItem>,
  <ContextSelectorItem key="2">Production Ansible</ContextSelectorItem>,
  <ContextSelectorItem key="3">AWS</ContextSelectorItem>,
  <ContextSelectorItem key="4">Azure</ContextSelectorItem>
];

test('Renders ContextSelectorMenuList open', () => {
  const view = render(<ContextSelectorMenuList isOpen={false}>{items}</ContextSelectorMenuList>);
  expect(view.container).toMatchSnapshot();
});

test('Renders ContextSelectorMenuList closed', () => {
  const view = render(<ContextSelectorMenuList isOpen={false}>{items}</ContextSelectorMenuList>);
  expect(view.container).toMatchSnapshot();
});

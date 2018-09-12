import React from 'react';
import { mount, render } from 'enzyme';

import ExpandCollapse from './ExpandCollapse';
import { ALIGN_LEFT, ALIGN_CENTER } from './constants';

test('ExpandCollapse with content', () => {
  const view = mount(
    <ExpandCollapse>
      <div id="content">My text</div>
    </ExpandCollapse>
  );

  expect(view.find('#content')).toHaveLength(0);
  expect(view.find('span.fa-angle-right')).toHaveLength(1);
  expect(view.find('span.fa-angle-down')).toHaveLength(0);
  expect(view.find('.btn-link').text()).toEqual('Show Advanced Options');

  const button = view.find('.btn-link');
  expect(button).toHaveLength(1);
  button.simulate('click');
  expect(view.find('#content')).toHaveLength(1);
  expect(view.find('span.fa-angle-right')).toHaveLength(0);
  expect(view.find('span.fa-angle-down')).toHaveLength(1);
  expect(view.find('.btn-link').text()).toEqual('Hide Advanced Options');
  button.simulate('click');
  expect(view.find('#content')).toHaveLength(0);
  expect(view.find('span.fa-angle-right')).toHaveLength(1);
  expect(view.find('span.fa-angle-down')).toHaveLength(0);
  expect(view.find('.btn-link').text()).toEqual('Show Advanced Options');
});

test('localized ExpandCollapse', () => {
  const view = mount(
    <ExpandCollapse textCollapsed="Click to expand" textExpanded="Click to collapse">
      <div id="content">My text</div>
    </ExpandCollapse>
  );
  expect(view).toMatchSnapshot();
  view.find('.btn-link').simulate('click');
  expect(view).toMatchSnapshot();
});

test('aligned ExpandCollapse', () => {
  const def = render(
    <ExpandCollapse>
      <div id="content">My text</div>
    </ExpandCollapse>
  );
  expect(def.find('.expand-collapse-pf-left')).toHaveLength(1);
  expect(def.find('.expand-collapse-pf-center')).toHaveLength(0);

  const left = render(
    <ExpandCollapse align={ALIGN_LEFT}>
      <div id="content">My text</div>
    </ExpandCollapse>
  );
  expect(left.find('.expand-collapse-pf-left')).toHaveLength(1);
  expect(left.find('.expand-collapse-pf-center')).toHaveLength(0);

  const center = render(
    <ExpandCollapse align={ALIGN_CENTER}>
      <div id="content">My text</div>
    </ExpandCollapse>
  );
  expect(center.find('.expand-collapse-pf-left')).toHaveLength(0);
  expect(center.find('.expand-collapse-pf-center')).toHaveLength(1);
});

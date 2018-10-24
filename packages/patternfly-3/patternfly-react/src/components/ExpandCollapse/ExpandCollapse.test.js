import React from 'react';
import { mount, render } from 'enzyme';

import ExpandCollapse from './ExpandCollapse';

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
  expect(def.find('.expand-collapse-pf-separator')).toHaveLength(1);

  const left = render(
    <ExpandCollapse align={ExpandCollapse.ALIGN_LEFT}>
      <div id="content">My text</div>
    </ExpandCollapse>
  );
  expect(left.find('.expand-collapse-pf-separator')).toHaveLength(1);

  const center = render(
    <ExpandCollapse align={ExpandCollapse.ALIGN_CENTER}>
      <div id="content">My text</div>
    </ExpandCollapse>
  );
  expect(center.find('.expand-collapse-pf-separator')).toHaveLength(2);
});

test('ExpandCollapse with separator', () => {
  const def = render(
    <ExpandCollapse>
      <div id="content">My text</div>
    </ExpandCollapse>
  );
  expect(def.find('.expand-collapse-pf-separator.bordered')).toHaveLength(1);

  const noSep = render(
    <ExpandCollapse bordered={false}>
      <div id="content">My text</div>
    </ExpandCollapse>
  );
  expect(noSep.find('.expand-collapse-pf-separator')).toHaveLength(1);
  expect(noSep.find('.expand-collapse-pf-separator.bordered')).toHaveLength(0);

  const center = render(
    <ExpandCollapse align={ExpandCollapse.ALIGN_CENTER}>
      <div id="content">My text</div>
    </ExpandCollapse>
  );
  expect(center.find('.expand-collapse-pf-separator.bordered')).toHaveLength(2);

  const centerNoSep = render(
    <ExpandCollapse align={ExpandCollapse.ALIGN_CENTER} bordered={false}>
      <div id="content">My text</div>
    </ExpandCollapse>
  );
  expect(centerNoSep.find('.expand-collapse-pf-separator')).toHaveLength(2);
  expect(centerNoSep.find('.expand-collapse-pf-separator.bordered')).toHaveLength(0);
});

test('ExpandCollapse with explicit override prop', () => {
  const view = mount(
    <ExpandCollapse expanded>
      <div id="content">My text</div>
    </ExpandCollapse>
  );

  expect(view.find('#content')).toHaveLength(1);
  expect(view.find('span.fa-angle-right')).toHaveLength(0);
  expect(view.find('span.fa-angle-down')).toHaveLength(1);
  expect(view.find('.btn-link').text()).toEqual('Hide Advanced Options');
});

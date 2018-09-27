import React from 'react';
import { mount } from 'enzyme';
import CopyTextBox from './CopyTextBox';
import CopyButton from './CopyButton';
import CopyToClipboard from './CopyToClipboard';

test('copy to clipboard copy text box', () => {
  const view = mount(<CopyTextBox id="test">This is my text</CopyTextBox>);
  expect(view.find('input')).toHaveLength(1);
  expect(view.find('input').props().value).toBe('This is my text');
  expect(view.find('input').props()['aria-label']).toBe('test');
});

test('copy to clipboard copy button', () => {
  const view = mount(<CopyButton id="test" />);
  expect(view.find('button')).toHaveLength(1);
  expect(view.find('button').props()['aria-label']).toBe('test copy to clipboard button');
  expect(
    view
      .find('button')
      .find('span')
      .props().className
  ).toBe('fa fa-paste');
});

test('copy to clipboard copied button', () => {
  const view = mount(<CopyButton copied id="test" />);
  expect(view.find('button')).toHaveLength(1);
  expect(view.find('button').props()['aria-label']).toBe('test copy to clipboard button');
  expect(
    view
      .find('button')
      .find('span')
      .props().className
  ).toBe('fa fa-check');
});

test('copy to clipboard copy button click', () => {
  const oncopy = jest.fn();
  const view = mount(<CopyButton id="test" onCopy={oncopy} />);
  expect(oncopy).not.toBeCalled();
  view.find('button').simulate('click');
  expect(oncopy).toBeCalled();
});

test('copy to clipboard reset delay', () => {
  const getIcon = view =>
    view
      .find('button')
      .find('span')
      .props().className;
  jest.useFakeTimers();
  const oncopy = jest.fn(() => true);
  const view = mount(
    <CopyToClipboard onCopy={oncopy} delay={300} id="inline-test">
      text
    </CopyToClipboard>
  );
  expect(getIcon(view)).toBe('fa fa-paste');
  view.find('button').simulate('click');
  jest.advanceTimersByTime(299);
  view.update();
  expect(getIcon(view)).toBe('fa fa-check');
  jest.advanceTimersByTime(300);
  view.update();
  expect(getIcon(view)).toBe('fa fa-paste');
});

test('inline copy to clipboard', () => {
  const view = mount(<CopyToClipboard id="inline-test">This is my inline copy to clipboard</CopyToClipboard>);
  expect(view.find('button')).toHaveLength(1);
  expect(view.find('button').props()['aria-label']).toBe('inline-test copy to clipboard button');
  expect(view.find('input')).toHaveLength(1);
  expect(view.find('input').props().value).toBe('This is my inline copy to clipboard');
  expect(view.find('input').props()['aria-label']).toBe('inline-test');
});

test('block copy to clipboard bar', () => {
  const view = mount(
    <CopyToClipboard block id="block-test">
      This is my inline copy to clipboard
    </CopyToClipboard>
  );
  expect(view.find('button')).toHaveLength(2);
  expect(
    view
      .find('button')
      .at(0)
      .props()['aria-label']
  ).toBe('expand text block');
  expect(
    view
      .find('button')
      .at(1)
      .props()['aria-label']
  ).toBe('block-test copy to clipboard button');
  expect(
    view
      .find('button')
      .at(0)
      .find('span')
      .props().className
  ).toBe('fa fa-angle-right');
  expect(view.find('div.panel-body')).toHaveLength(0);
});

test('block copy to clipboard bar expand', () => {
  const view = mount(
    <CopyToClipboard block id="block-test">
      This is my inline copy to clipboard
    </CopyToClipboard>
  );
  expect(view.find('button')).toHaveLength(2);
  view
    .find('button')
    .at(0)
    .simulate('click');
  view.update();
  expect(
    view
      .find('button')
      .at(0)
      .props()['aria-label']
  ).toBe('collapse text block');
  expect(
    view
      .find('button')
      .at(0)
      .find('span')
      .props().className
  ).toBe('fa fa-angle-down');
  expect(view.find('div.panel-body')).toHaveLength(1);
  view
    .find('button')
    .at(0)
    .simulate('click');
  view.update();
  expect(
    view
      .find('button')
      .at(0)
      .props()['aria-label']
  ).toBe('expand text block');
  expect(
    view
      .find('button')
      .at(0)
      .find('span')
      .props().className
  ).toBe('fa fa-angle-right');
  expect(view.find('div.panel-body')).toHaveLength(0);
});

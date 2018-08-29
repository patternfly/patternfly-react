import React from 'react';
import { mount } from 'enzyme';
import CountDownSessionTimeout from './CountDownSessionTimeout';
import { MessageDialog } from '../../index';

test('CountDownSessionTimeout init timeLeft > displayBefore', () => {
  jest.useFakeTimers();
  const sessionTime = 15;
  let component = mount(<CountDownSessionTimeout timeLeft={10} displayBefore={3} sessionTime={sessionTime} />);
  expect(component.find(MessageDialog).prop('show')).toBe(false);
  jest.advanceTimersByTime(7000);
  component = component.update();

  // after 7 seconds session timeout dialog is supposed to be shown
  expect(component.find(MessageDialog).prop('show')).toBe(true);
  component.find('.btn-primary').simulate('click');

  // clicking on 'continue' should hide the dialog message
  // and show it again after 12 seconds
  expect(component.find(MessageDialog).prop('show')).toBe(false);
  expect(component.state().timeLeft).toBe(sessionTime);
  jest.advanceTimersByTime(12000);
  component = component.update();

  expect(component.find(MessageDialog).prop('show')).toBe(true);
  jest.advanceTimersByTime(3000);
  component = component.update();

  // after not doing anything session should be terminated
  expect(component.find(MessageDialog).prop('show')).toBe(false);
  expect(component.state().timeLeft).toBe(0);
});

test('CountDownSessionTimeout init timeLeft < displayBefore', () => {
  jest.useFakeTimers();
  const sessionTime = 15;
  let component = mount(<CountDownSessionTimeout timeLeft={5} displayBefore={10} sessionTime={sessionTime} />);
  expect(component.find(MessageDialog).prop('show')).toBe(true);
  jest.advanceTimersByTime(5000);
  component = component.update();

  expect(component.find(MessageDialog).prop('show')).toBe(false);
});

test('CountDownSessionTimeout clicking logout terminates session', () => {
  jest.useFakeTimers();
  const sessionTime = 15;
  const component = mount(<CountDownSessionTimeout timeLeft={4} displayBefore={4} sessionTime={sessionTime} />);
  expect(component.find(MessageDialog).prop('show')).toBe(true);
  component.find('.btn-default').simulate('click');
  expect(component.find(MessageDialog).prop('show')).toBe(false);
  expect(component.state().timeLeft).toBe(0);
});

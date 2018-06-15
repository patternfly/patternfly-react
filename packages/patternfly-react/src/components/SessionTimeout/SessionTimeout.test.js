import React from 'react';
import { mount, shallow } from 'enzyme';
import { SessionTimeout, SessionTimeoutModal } from './index';

const noop = () => {};

test('SessionTimeoutModal', () => {
  const component = mount(
    <SessionTimeoutModal logoutFnc={noop} continueFnc={noop} show>
      <div>Session timeout ...</div>
    </SessionTimeoutModal>
  );
  expect(component.render()).toMatchSnapshot();
});

test('SessionTimeout Dialog not displayed when timeLeft bigger than displayBefore', () => {
  const component = shallow(
    <SessionTimeout
      logoutFnc={noop}
      continueFnc={noop}
      displayBefore={10}
      timeLeft={11}
      units="seconds"
    />
  );

  expect(component.find(SessionTimeoutModal).prop('show')).toBe(false);
});

test('SessionTimeout Dialog displayed when timeLeft not bigger than displayBefore', () => {
  const component = shallow(
    <SessionTimeout
      logoutFnc={noop}
      continueFnc={noop}
      displayBefore={10}
      timeLeft={10}
      units="seconds"
    />
  );

  expect(component.find(SessionTimeoutModal).prop('show')).toBe(true);
});

test('SessionTimeout Dialog in minutes', () => {
  const component = mount(
    <SessionTimeout
      logoutFnc={noop}
      continueFnc={noop}
      displayBefore={10}
      timeLeft={5}
      units="minutes"
    />
  );

  expect(component.render()).toMatchSnapshot();
});

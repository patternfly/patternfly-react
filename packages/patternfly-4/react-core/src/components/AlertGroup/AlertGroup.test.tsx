import * as React from 'react';
import { shallow } from 'enzyme';
import { Alert } from '../Alert';
import { AlertGroup } from '.';

test('Alert Group works with zero children', () => {
  const view = shallow(
    <AlertGroup></AlertGroup>
  );
  expect(view).toBeTruthy();
});

test('Alert Group should match snapshot', () => {
  const view = shallow(
    <AlertGroup></AlertGroup>
  );
  expect(view).toMatchSnapshot();
});

test('Alert Group works with n children', () => {
  const view = shallow(
    <AlertGroup>
      <Alert
        variant="success"
        title="alert title" />
      <Alert
        variant="warning"
        title="another alert title" />
    </AlertGroup>
  );
  expect(view).toBeTruthy();
});

test('Standard Alert Group is not a toast alert group', () => {
  const wrapper = shallow(
    <AlertGroup>
      <Alert
        variant="danger"
        title="alert title" />
    </AlertGroup>
  );
  const hasToastClass = wrapper.find('.pf-c-alert-group').is('.pf-m-toast');
  expect(hasToastClass).toBeFalsy();
  expect(wrapper).toMatchSnapshot();
});

test('Toast Alert Group contains expected modifier class', () => {
  const wrapper = shallow(
    <AlertGroup isToast>
      <Alert
        variant="warning"
        title="alert title" />
    </AlertGroup>
  );
  const hasToastClass = wrapper.find('.pf-c-alert-group').is('.pf-m-toast');
  expect(hasToastClass).toBeTruthy();
  expect(wrapper).toMatchSnapshot();
});

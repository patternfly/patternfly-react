import * as React from 'react';
import { render } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import { Alert } from '../../Alert';
import { AlertGroup } from '../../AlertGroup';
import { AlertActionCloseButton } from '../../../components/Alert/AlertActionCloseButton';

jest.spyOn(document, 'createElement');
jest.spyOn(document.body, 'addEventListener');

test('Alert Group works with zero children', () => {
  const view = render(<AlertGroup></AlertGroup>);
  expect(view).toBeTruthy();
});

test('Alert Group should match snapshot', () => {
  const view = render(<AlertGroup></AlertGroup>);
  expect(view.container).toMatchSnapshot();
});

test('Alert Group works with n children', () => {
  const view = render(
    <AlertGroup>
      <Alert variant="success" title="alert title" />
      <Alert variant="warning" title="another alert title" />
    </AlertGroup>
  );
  expect(view).toBeTruthy();
});

test('Alert group overflow shows up', () => {
  const overflowMessage = "View 2 more alerts";
  const onOverflowClick = jest.fn();
  const wrapper = mount(
    <AlertGroup overflowMessage={overflowMessage} onOverflowClick={onOverflowClick}>
      <Alert variant="danger" title="alert title" />
    </AlertGroup>
  )
  expect(wrapper.find('.pf-c-alert-group > li')).toHaveLength(2);
  expect(wrapper.find('.pf-c-alert-group__overflow-button').text()).toContain(overflowMessage);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('.pf-c-alert-group__overflow-button').simulate('click');
  expect(onOverflowClick).toBeCalled();
});

test('Standard Alert Group is not a toast alert group', () => {
  const wrapper = mount(
    <AlertGroup>
      <Alert variant="danger" title="alert title" />
    </AlertGroup>
  );
  expect(wrapper.find('.pf-c-alert-group.pf-m-toast')).toHaveLength(0);
  expect(wrapper).toMatchSnapshot();
});

test('Toast Alert Group contains expected modifier class', () => {
  const wrapper = mount(
    <AlertGroup isToast>
      <Alert variant="warning" title="alert title" />
    </AlertGroup>
  );
  expect(wrapper.find('.pf-c-alert-group.pf-m-toast')).toHaveLength(1);
  expect(wrapper).toMatchSnapshot();
});

test('Alert Group creates a container element once for div', () => {
  const view = shallow(<AlertGroup> Test About Modal </AlertGroup>);
  view.update();
  expect(document.createElement).toBeCalledWith('div');
  expect(document.createElement).toHaveBeenCalledTimes(1);
});

test('alertgroup closes when alerts are closed', () => {
  const onClose = jest.fn();
  const wrapper = mount(
    <AlertGroup isToast appendTo={document.body}>
      <Alert
        isLiveRegion
        title={'Test Alert'}
        actionClose={<AlertActionCloseButton aria-label="Close" onClose={onClose} />}
      />
    </AlertGroup>
  );
  expect(wrapper).toMatchSnapshot();
  wrapper.find('button[aria-label="Close"]').simulate('click');
  expect(onClose).toBeCalled();
});

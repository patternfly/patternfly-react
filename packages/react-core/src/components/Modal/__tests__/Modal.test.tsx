import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { KEY_CODES } from '../../../helpers/constants';
import { css } from '../../../../../react-styles/dist/js';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';

import { Modal } from '../Modal';

jest.spyOn(document, 'createElement');
jest.spyOn(document.body, 'addEventListener');

const props = {
  title: 'Modal',
  onClose: jest.fn(),
  isOpen: false,
  children: 'modal content'
};

test('Modal creates a container element once for div', () => {
  const view = shallow(<Modal {...props} />);
  view.update();
  expect(document.createElement).toBeCalledWith('div');
  expect(document.createElement).toHaveBeenCalledTimes(1);
});

test('modal closes with escape', () => {
  shallow(<Modal {...props} isOpen appendTo={document.body} />);
  const mock: any = (document.body.addEventListener as any).mock;
  const [event, handler] = mock.calls[0];
  expect(event).toBe('keydown');
  handler({ keyCode: KEY_CODES.ESCAPE_KEY });
  expect(props.onClose).toBeCalled();
});

test('modal does not call onClose for esc key if it is not open', () => {
  shallow(<Modal {...props} />);
  const mock: any = (document.body.addEventListener as any).mock;
  const [event, handler] = mock.calls[0];
  expect(event).toBe('keydown');
  handler({ keyCode: KEY_CODES.ESCAPE_KEY });
  expect(props.onClose).not.toBeCalled();
});

test('Each modal is given a new id', () => {
  const first = shallow(<Modal {...props} />);
  const second = shallow(<Modal {...props} />);
  expect((first.instance() as any).descriptorId).not.toBe((second.instance() as any).descriptorId);
});

test('modal removes body backdropOpen class when removed', () => {
  const view = shallow(<Modal {...props} isOpen />);
  view.update();
  expect(document.body.className).toContain(css(styles.backdropOpen));
  view.setProps({ isOpen: false });
  view.update();
  expect(document.body.className).not.toContain(css(styles.backdropOpen));
});

test('modal shows/hides the close button based on showClose (default true)', () => {
  const view = mount(<Modal {...props} isOpen />);
  view.update();
  expect(view.exists('.pf-c-modal-box .pf-c-button')).toBeTruthy();
  view.setProps({ showClose: false });
  view.update();
  expect(view.exists('.pf-c-modal-box .pf-c-button')).toBeFalsy();
});

test('modal generates console error when no accessible name is provided', () => {
  const props = {
    onClose: jest.fn(),
    isOpen: true,
    children: 'modal content'
  };
  const consoleErrorMock = jest.fn();
  global.console = { error: consoleErrorMock } as any;
  shallow(<Modal {...props} />);
  expect(consoleErrorMock).toBeCalled();
});

test('modal generates console warning when conflicting accessible name strategies are provided', () => {
  const props = {
    hasNoBodyWrapper: true,
    onClose: jest.fn(),
    isOpen: true,
    children: 'modal content'
  };
  const consoleErrorMock = jest.fn();
  global.console = { error: consoleErrorMock } as any;
  shallow(<Modal {...props} />);
  expect(consoleErrorMock).toBeCalled();
});

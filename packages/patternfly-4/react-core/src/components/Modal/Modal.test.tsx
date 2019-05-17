import Modal from './Modal';
import React from 'react';
import { shallow } from 'enzyme';
import { KEY_CODES } from '../../helpers/constants';
import { css } from '../../../../react-styles/dist/js';
import styles from '@patternfly/patternfly/components/Backdrop/backdrop.css';

jest.spyOn(document, 'createElement');
jest.spyOn(document, 'addEventListener');

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
  shallow(<Modal {...props} isOpen />);
  const [event, handler] = document.addEventListener.mock.calls[0];
  expect(event).toBe('keydown');
  handler({ keyCode: KEY_CODES.ESCAPE_KEY });
  expect(props.onClose).toBeCalled();
});

test('modal does not call onClose for esc key if it is not open', () => {
  shallow(<Modal {...props} />);
  const [event, handler] = document.addEventListener.mock.calls[0];
  expect(event).toBe('keydown');
  handler({ keyCode: KEY_CODES.ESCAPE_KEY });
  expect(props.onClose).not.toBeCalled();
});

test('Each modal is given a new id', () => {
  const first = shallow(<Modal {...props} />);
  const second = shallow(<Modal {...props} />);
  expect(first.instance().id).not.toBe(second.instance().id);
});

test('modal removes body backdropOpen class when removed', () => {
  const view = shallow(<Modal {...props} isOpen />);
  view.update();
  expect(document.body.className).toContain(css(styles.backdropOpen));
  view.setProps({ isOpen: false });
  view.update();
  expect(document.body.className).not.toContain(css(styles.backdropOpen));
});

import React from 'react';
import { shallow } from 'enzyme';
import InfoTip from './InfoTip';
import { KEY_CODES } from '../../common/helpers';
import { Dropdown } from '../Dropdown';

const props = {
  id: 'InfoTip',
  children: 'children'
};

test('renders Dropdown', () => {
  const view = shallow(<InfoTip {...props} />);
  expect(view).toMatchSnapshot('dropdown is rendered');
});

test('removes onToggle from passed props', () => {
  const onToggle = jest.fn();
  const view = shallow(<InfoTip {...props} onToggle={onToggle} />);
  expect(getDropdown(view).props().onToggle).not.toBe(onToggle);
});

test('toggles open and closed when keydown is enter', () => {
  const event = getMockKeyEvent(KEY_CODES.ENTER_KEY);
  const view = shallow(<InfoTip {...props} />);
  getDropdown(view).simulate('keydown', event);
  expect(getDropdown(view).props().open).toBe(true);
  getDropdown(view).simulate('keydown', event);
  expect(getDropdown(view).props().open).toBe(false);
  expect(event.preventDefault).toHaveBeenCalledTimes(2);
});

test('tab keydown focuses footer and closes if footer is focused', () => {
  const tabKeyEvent = getMockKeyEvent(KEY_CODES.TAB_KEY);
  const enterKeyEvent = getMockKeyEvent(KEY_CODES.ENTER_KEY);
  const view = shallow(<InfoTip {...props} />);
  getDropdown(view).simulate('keydown', enterKeyEvent); // open dropdown
  getDropdown(view).simulate('keydown', tabKeyEvent); // focus footer
  expect(getDropdown(view).props().open).toBe(true);
  getDropdown(view).simulate('keydown', tabKeyEvent); // close and unfocus footer
  expect(getDropdown(view).props().open).toBe(false);
});

test('tab keydown calls stopPropagation and stopImmediatePropagation', () => {
  const event = getMockKeyEvent(KEY_CODES.TAB_KEY);
  const view = shallow(<InfoTip {...props} />);
  getDropdown(view).simulate('keydown', event); // focus footer
  expect(event.stopPropagation).toBeCalled();
  expect(event.nativeEvent.stopImmediatePropagation).toBeCalled();
});

test('closes on escape keydown', () => {
  const escKeyEvent = getMockKeyEvent(KEY_CODES.ESCAPE_KEY);
  const enterKeyEvent = getMockKeyEvent(KEY_CODES.ENTER_KEY);
  const view = shallow(<InfoTip {...props} />);
  getDropdown(view).simulate('keydown', enterKeyEvent); // open dropdown
  getDropdown(view).simulate('keydown', escKeyEvent);
  expect(getDropdown(view).props().open).toBe(false);
});

test('closes if keydown includes shift key and a keycode', () => {
  const shiftKeyEvent = getMockKeyEvent(1, true);
  const view = shallow(<InfoTip {...props} />);
  getDropdown(view).simulate('keydown', getMockKeyEvent(KEY_CODES.ENTER_KEY)); // open dropdown
  getDropdown(view).simulate('keydown', shiftKeyEvent);
  expect(getDropdown(view).props().open).toBe(false);
  getDropdown(view).simulate('keydown', shiftKeyEvent);
  expect(getDropdown(view).props().open).toBe(false);
});

test('does not close if keydown includes shift key and does not have a keycode', () => {
  const shiftKeyEvent = getMockKeyEvent(null, true);
  const view = shallow(<InfoTip {...props} />);
  getDropdown(view).simulate('keydown', getMockKeyEvent(KEY_CODES.ENTER_KEY)); // open dropdown
  getDropdown(view).simulate('keydown', shiftKeyEvent);
  expect(getDropdown(view).props().open).toBe(true);
});

test('onClick toggles Dropdown open', () => {
  const preventDefault = jest.fn();
  const view = shallow(<InfoTip {...props} />);
  getDropdown(view).simulate('click', { preventDefault });
  expect(getDropdown(view).props().open).toBe(true);
  getDropdown(view).simulate('click', { preventDefault });
  expect(getDropdown(view).props().open).toBe(false);
  expect(preventDefault).toHaveBeenCalledTimes(2);
});

test('onBlur closes Dropdown', () => {
  const view = shallow(<InfoTip {...props} />);
  getDropdown(view).simulate('click', { preventDefault: jest.fn() }); // open dropdown
  getDropdown(view).simulate('blur');
  expect(getDropdown(view).props().open).toBe(false);
});

test(`onBlur clicks related target`, () => {
  const relatedTargetClick = jest.fn();
  const view = shallow(<InfoTip {...props} />);
  getDropdown(view).simulate('blur', {
    relatedTarget: { click: relatedTargetClick }
  });
  expect(relatedTargetClick).toBeCalled();
});

function getDropdown(view) {
  return view.find(Dropdown);
}

function getMockKeyEvent(keyCode, shiftKey = false) {
  return {
    keyCode,
    shiftKey,
    preventDefault: jest.fn(),
    stopPropagation: jest.fn(),
    nativeEvent: {
      stopImmediatePropagation: jest.fn()
    }
  };
}

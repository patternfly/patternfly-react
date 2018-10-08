import React from 'react';
import { shallow } from 'enzyme';
import AboutModalBoxCloseButton from './AboutModalBoxCloseButton';

test('AboutModalBoxCloseButton Test', () => {
  const view = shallow(<AboutModalBoxCloseButton />);
  expect(view).toMatchSnapshot();
});

test('AboutModalBoxCloseButton Test onclose', () => {
  const onClose = jest.fn();
  const view = shallow(<AboutModalBoxCloseButton onclose={onClose} />);
  expect(view).toMatchSnapshot();
});

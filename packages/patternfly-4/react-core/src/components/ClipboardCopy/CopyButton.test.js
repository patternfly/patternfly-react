import React from 'react';
import { shallow } from 'enzyme';
import CopyButton from './CopyButton';

const props = {
  id: 'my-id',
  textId: 'my-text-id',
  className: 'fancy-copy-button',
  onClick: jest.fn(),
  exitDelay: 1000,
  entryDelay: 2000,
  maxWidth: '500px',
  position: 'right',
  'aria-label': 'click this button to copy text'
};

test('copy button render', () => {
  const view = shallow(<CopyButton {...props}>Copy Me</CopyButton>);
  expect(view).toMatchSnapshot();
});

test('copy button onClick', () => {
  const onclick = jest.fn();
  const view = shallow(<CopyButton {...props} onClick={onclick}>Copy to Clipboard</CopyButton>);
  view.find('button').simulate('click');
  expect(onclick).toBeCalled();
});

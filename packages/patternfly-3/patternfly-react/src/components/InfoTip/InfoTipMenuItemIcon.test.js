import React from 'react';
import { shallow } from 'enzyme';
import InfoTipMenuItemIcon from './InfoTipMenuItemIcon';
import { Icon } from '../Icon';

test('defaults props', () => {
  const view = shallow(<InfoTipMenuItemIcon />);
  expect(view).toMatchSnapshot('props are defaulted to expected values.');
});

test('adds classname to the Icon', () => {
  const view = shallow(<InfoTipMenuItemIcon className="extra-classname" />);
  expect(view.find(Icon).props().className).toMatchSnapshot('Icon className includes additional className from props.');
});

test('passes additional props through', () => {
  const view = shallow(<InfoTipMenuItemIcon id="id" />);
  expect(view).toMatchSnapshot('additional props are passed through.');
});

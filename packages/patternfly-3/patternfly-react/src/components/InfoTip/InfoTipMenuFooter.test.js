import React from 'react';
import { shallow } from 'enzyme';
import InfoTipMenuFooter from './InfoTipMenuFooter';

test('adds classname to the root element', () => {
  const view = shallow(<InfoTipMenuFooter className="extra-classname">children</InfoTipMenuFooter>);
  expect(view.first().props().className).toMatchSnapshot('root has className from props');
});

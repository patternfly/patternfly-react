import React from 'react';
import { shallow } from 'enzyme';
import AboutModalBoxHero from './AboutModalBoxHero';

test('test About Modal Box SHero', () => {
  const view = shallow(<AboutModalBoxHero src="heroImg..." alt="hero" />);
  expect(view).toMatchSnapshot();
});

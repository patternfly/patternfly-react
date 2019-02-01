import AboutModalBoxContent from './AboutModalBoxContent';
import React from 'react';
import { shallow } from 'enzyme';

test('AboutModalBoxContent Test', () => {
  const view = shallow(
    <AboutModalBoxContent trademark="trademark" id="id">
      This is a AboutModalBoxContent
    </AboutModalBoxContent>
  );
  expect(view).toMatchSnapshot();
});

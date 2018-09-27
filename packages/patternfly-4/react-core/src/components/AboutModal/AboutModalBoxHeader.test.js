import AboutModalBoxHeader from './AboutModalBoxHeader';
import React from 'react';
import { shallow } from 'enzyme';

test('AboutModalBoxHeader Test', () => {
  const view = shallow(
    <AboutModalBoxHeader productName="Product Name" trademark="trademark" id="id">
      This is a AboutModalBox header
    </AboutModalBoxHeader>
  );
  expect(view).toMatchSnapshot();
});

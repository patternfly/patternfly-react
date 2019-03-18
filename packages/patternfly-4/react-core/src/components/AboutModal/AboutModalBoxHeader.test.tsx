import * as React from 'react';
import AboutModalBoxHeader from './AboutModalBoxHeader';
import { shallow } from 'enzyme';

test('AboutModalBoxHeader Test', () => {
  const view = shallow(
    <AboutModalBoxHeader productName="Product Name" id="id">
      This is a AboutModalBox header
    </AboutModalBoxHeader>
  );
  expect(view).toMatchSnapshot();
});

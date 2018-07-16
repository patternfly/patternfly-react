import React from 'react';
import { shallow } from 'enzyme';
import ModalBox from './ModalBox';

test('ModalBox Test', () => {
  const view = shallow(
    <ModalBox label="test label">This is a ModalBox </ModalBox>
  );
  expect(view).toMatchSnapshot();
});

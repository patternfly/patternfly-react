import * as React from 'react';
import { shallow } from 'enzyme';
import { ModalBoxDescription } from '../ModalBoxDescription';

test('ModalBoxDescription Test', () => {
  const view = shallow(
    <ModalBoxDescription>
      This is a ModalBox Description
    </ModalBoxDescription>
    );
  expect(view).toMatchSnapshot();
});

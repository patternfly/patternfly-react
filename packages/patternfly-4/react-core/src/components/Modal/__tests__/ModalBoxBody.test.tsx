import * as React from 'react';
import { shallow } from 'enzyme';
import { ModalBoxBody } from '../ModalBoxBody';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('ModalBoxBody should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ModalBoxBody
      children={<>ReactNode</>}
			className={"''"}
    />);
  expect(view).toMatchSnapshot();
});

test('ModalBoxBody Test', () => {
  const view = shallow(
    <ModalBoxBody id="id" className="test-box-class">
      This is a ModalBox header
    </ModalBoxBody>
  );
  expect(view).toMatchSnapshot();
});

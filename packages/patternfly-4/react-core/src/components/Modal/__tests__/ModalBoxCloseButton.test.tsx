import * as React from 'react';
import { shallow } from 'enzyme';
import { ModalBoxCloseButton } from '../ModalBoxCloseButton';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('ModalBoxCloseButton should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ModalBoxCloseButton
      className={"''"}
			onClose={() => undefined as any}
    />);
  expect(view).toMatchSnapshot();
});

test('ModalBoxCloseButton Test', () => {
  const mockfn = jest.fn();
  const view = shallow(<ModalBoxCloseButton className="test-box-close-button-class" onClose={mockfn} />);
  expect(view).toMatchSnapshot();
  view
    .find('.test-box-close-button-class')
    .at(0)
    .simulate('click');
  expect(mockfn.mock.calls).toHaveLength(1);
});

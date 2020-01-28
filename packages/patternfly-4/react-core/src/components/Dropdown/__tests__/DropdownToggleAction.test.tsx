import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { DropdownToggleAction } from '../DropdownToggleAction';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('DropdownToggleAction should match snapshot (auto-generated)', () => {
  const view = shallow(
    <DropdownToggleAction
      className={"''"}
			isDisabled={false}
			onClick={() => {}}
			children={<div>ReactNode</div>}
			id={"string"}
			aria-label={"string"}
    />);
  expect(view).toMatchSnapshot();
});

test('renders with text', () => {
  const view = shallow(<DropdownToggleAction id="action" aria-label="action" />);
  expect(view).toMatchSnapshot();
});

test('isDisabled', () => {
  const view = shallow(<DropdownToggleAction id="action" aria-label="action" isDisabled />);
  expect(view).toMatchSnapshot();
});

test('passing class', () => {
  const view = shallow(<DropdownToggleAction id="action" aria-label="action" className="abc" />);
  expect(view).toMatchSnapshot();
});

test('checkbox passes value and event to onClick handler', () => {
  const onClickMock = jest.fn();
  const view = mount(<DropdownToggleAction id="action" aria-label="acton" onClick={onClickMock} />);
  view.find('button').simulate('click');
  expect(onClickMock).toBeCalled();
});

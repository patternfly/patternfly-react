import * as React from 'react';
import { shallow } from 'enzyme';
import { CheckboxSelectOption } from '../CheckboxSelectOption';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('CheckboxSelectOption should match snapshot (auto-generated)', () => {
  const view = shallow(
    <CheckboxSelectOption
      children={<div>ReactNode</div>}
			className={"''"}
			index={0}
			value={"''"}
			isDisabled={false}
			isChecked={false}
			sendRef={() => {}}
			keyHandler={() => {}}
			onClick={() => {}}
    />);
  expect(view).toMatchSnapshot();
});

describe('checkbox select options', () => {
  test('renders with value parameter successfully', () => {
    const view = shallow(<CheckboxSelectOption value="test" sendRef={jest.fn()} />);
    expect(view).toMatchSnapshot();
  });

  test('renders with children successfully', () => {
    const view = shallow(
      <CheckboxSelectOption value="test" sendRef={jest.fn()}>
        <div>test</div>
      </CheckboxSelectOption>
    );
    expect(view).toMatchSnapshot();
  });

  describe('hover', () => {
    test('renders with checked successfully', () => {
      const view = shallow(<CheckboxSelectOption isChecked value="test" sendRef={jest.fn()} />);
      expect(view).toMatchSnapshot();
    });
  });

  describe('disabled', () => {
    test('renders disabled successfully', () => {
      const view = shallow(<CheckboxSelectOption isDisabled value="test" sendRef={jest.fn()} />);
      expect(view).toMatchSnapshot();
    });
  });
});

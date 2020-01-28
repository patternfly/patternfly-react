import * as React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../Form';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('Form should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Form
      children={<>ReactNode</>}
			className={"''"}
			isHorizontal={false}
    />);
  expect(view).toMatchSnapshot();
});

describe('Form component', () => {
  test('should render default form variant', () => {
    const view = shallow(<Form />);
    expect(view).toMatchSnapshot();
  });

  test('should render horizontal form variant', () => {
    const view = shallow(<Form isHorizontal />);
    expect(view).toMatchSnapshot();
  });
});

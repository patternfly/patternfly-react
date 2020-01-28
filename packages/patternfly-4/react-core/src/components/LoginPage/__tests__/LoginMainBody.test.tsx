import * as React from 'react';
import { shallow } from 'enzyme';
import { LoginMainBody } from '../LoginMainBody';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('LoginMainBody should match snapshot (auto-generated)', () => {
  const view = shallow(
    <LoginMainBody
      children={<>ReactNode</>}
			className={"''"}
    />);
  expect(view).toMatchSnapshot();
});

test('renders with PatternFly Core styles', () => {
  const view = shallow(<LoginMainBody />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<LoginMainBody className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'login-body';
  const view = shallow(<LoginMainBody data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

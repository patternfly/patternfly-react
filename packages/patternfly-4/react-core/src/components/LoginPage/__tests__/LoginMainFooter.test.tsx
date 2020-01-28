import * as React from 'react';
import { shallow } from 'enzyme';
import { LoginMainFooter } from '../LoginMainFooter';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('LoginMainFooter should match snapshot (auto-generated)', () => {
  const view = shallow(
    <LoginMainFooter
      className={"''"}
			children={<>ReactNode</>}
			socialMediaLoginContent={null}
			signUpForAccountMessage={null}
			forgotCredentials={null}
    />);
  expect(view).toMatchSnapshot();
});

test('renders with PatternFly Core styles', () => {
  const view = shallow(<LoginMainFooter />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<LoginMainFooter className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'login-body';
  const view = shallow(<LoginMainFooter data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

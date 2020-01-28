import * as React from 'react';
import { shallow } from 'enzyme';
import { LoginMainFooterBandItem } from '../LoginMainFooterBandItem';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('LoginMainFooterBandItem should match snapshot (auto-generated)', () => {
  const view = shallow(
    <LoginMainFooterBandItem
      children={<>ReactNode</>}
			className={"''"}
    />);
  expect(view).toMatchSnapshot();
});

test('renders with PatternFly Core styles', () => {
  const view = shallow(<LoginMainFooterBandItem />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<LoginMainFooterBandItem className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'login-body';
  const view = shallow(<LoginMainFooterBandItem data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

test('LoginFooterItem  with custom node', () => {
  const CustomNode = () => <div>My custom node</div>;
  const view = shallow(
    <LoginMainFooterBandItem>
      <CustomNode />
    </LoginMainFooterBandItem>
  );
  expect(view).toMatchSnapshot();
});

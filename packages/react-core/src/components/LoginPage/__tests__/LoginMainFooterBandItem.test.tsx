import * as React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import { LoginMainFooterBandItem } from '../LoginMainFooterBandItem';

test('renders with PatternFly Core styles', () => {
  const view = render(<LoginMainFooterBandItem />);
  expect(view.container).toMatchSnapshot();
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
  const view = render(
    <LoginMainFooterBandItem>
      <CustomNode />
    </LoginMainFooterBandItem>
  );
  expect(view.container).toMatchSnapshot();
});

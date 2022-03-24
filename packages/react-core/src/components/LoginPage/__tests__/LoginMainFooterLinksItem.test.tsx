import * as React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import { LoginMainFooterLinksItem } from '../LoginMainFooterLinksItem';

test('renders with PatternFly Core styles', () => {
  const view = render(<LoginMainFooterLinksItem href="#" target="" />);
  expect(view.container).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<LoginMainFooterLinksItem className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'login-body';
  const view = shallow(<LoginMainFooterLinksItem data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

test('LoginFooterItem  with custom node', () => {
  const CustomNode = () => <div>My custom node</div>;
  const view = render(
    <LoginMainFooterLinksItem>
      <CustomNode />
    </LoginMainFooterLinksItem>
  );
  expect(view.container).toMatchSnapshot();
});

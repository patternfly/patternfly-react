import React from 'react';
import { CardTitle } from '../CardTitle';
import { CardHeader } from '../CardHeader';
import { shallow, mount } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = shallow(<CardTitle />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<CardTitle className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'card-header';
  const view = shallow(<CardTitle data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

test('onExpand adds the toggle button', () => {
  const view = mount(<CardHeader onExpand={jest.fn()} />);
  expect(view).toMatchSnapshot();
});

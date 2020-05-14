import React from 'react';
import { CardHeaderMain } from './CardHeaderMain';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = shallow(<CardHeaderMain>text</CardHeaderMain>);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<CardHeaderMain className="extra-class">text</CardHeaderMain>);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'card-head-main';
  const view = shallow(<CardHeaderMain data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

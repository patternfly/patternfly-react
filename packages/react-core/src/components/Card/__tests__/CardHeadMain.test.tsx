import React from 'react';
import { CardHeadMain } from '../CardHeadMain';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = render(<CardHeadMain>text</CardHeadMain>);
  expect(view.container).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<CardHeadMain className="extra-class">text</CardHeadMain>);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'card-head-main';
  const view = shallow(<CardHeadMain data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

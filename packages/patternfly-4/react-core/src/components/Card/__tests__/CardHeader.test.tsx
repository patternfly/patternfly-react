import * as React from 'react';
import { shallow } from 'enzyme';
import { CardHeader } from '../CardHeader';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('CardHeader should match snapshot (auto-generated)', () => {
  const view = shallow(
    <CardHeader
      children={<>ReactNode</>}
			className={"''"}
    />);
  expect(view).toMatchSnapshot();
});

test('renders with PatternFly Core styles', () => {
  const view = shallow(<CardHeader />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<CardHeader className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'card-header';
  const view = shallow(<CardHeader data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

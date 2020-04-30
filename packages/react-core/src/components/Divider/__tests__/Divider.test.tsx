import { Divider } from '../Divider';
import { Flex, FlexItem} from '../../../layouts/Flex';
import * as React from 'react';
import { shallow } from 'enzyme';

test('divider using hr', () => {
  const view = shallow(<Divider />);
  expect(view).toMatchSnapshot();
});

test('divider using li', () => {
  const view = shallow(<Divider component="li" />);
  expect(view).toMatchSnapshot();
});

test('divider using div', () => {
  const view = shallow(<Divider component="div" />);
  expect(view).toMatchSnapshot();
});

test('vertical divider', () => {
  const view = shallow(
    <Flex>
      <FlexItem>first item</FlexItem>
      <Divider isVertical/>
      <FlexItem>second item</FlexItem>
    </Flex>
  );
  expect(view).toMatchSnapshot();
});

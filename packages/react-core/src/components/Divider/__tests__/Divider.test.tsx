import { Divider } from '../Divider';
import { Flex, FlexItem} from '../../../layouts/Flex';
import * as React from 'react';
import { render } from '@testing-library/react';

test('divider using hr', () => {
  const view = render(<Divider />);
  expect(view.container).toMatchSnapshot();
});

test('divider using li', () => {
  const view = render(<Divider component="li" />);
  expect(view.container).toMatchSnapshot();
});

test('divider using div', () => {
  const view = render(<Divider component="div" />);
  expect(view.container).toMatchSnapshot();
});

test('vertical divider', () => {
  const view = render(
    <Flex>
      <FlexItem>first item</FlexItem>
      <Divider isVertical/>
      <FlexItem>second item</FlexItem>
    </Flex>
  );
  expect(view.container).toMatchSnapshot();
});

import * as React from 'react';
import { Flex } from './Flex';
import { FlexItem } from './FlexItem';
import { shallow } from 'enzyme';

test('Simple flex with single item', () => {
  const view = shallow(
    <Flex>
      <FlexItem>Test</FlexItem>
    </Flex>
  );
  expect(view).toMatchSnapshot();
});

test('Nested flex', () => {
  const view = shallow(
    <Flex>
      <Flex>
        <FlexItem>Test</FlexItem>
      </Flex>
    </Flex>
  );
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<Flex className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'flex';
  const view = shallow(<Flex data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

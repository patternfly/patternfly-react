import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexControlTextWidth: React.FunctionComponent = () => (
  <Flex direction={{ default: 'column', lg: 'row' }}>
    <Flex flex={{ default: 'flex_1' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi modi temporibus, alias qui obcaecati ullam
        dolor nam, nulla magni iste rem praesentium numquam provident amet ut nesciunt harum accusamus.
      </FlexItem>
    </Flex>
    <Flex direction={{ default: 'column' }}>
      <FlexItem>Flex item</FlexItem>
      <FlexItem>Flex item</FlexItem>
    </Flex>
  </Flex>
);

import { Divider, Flex, FlexItem } from '@rh-felt/react-core';

export const DividerVerticalFlex: React.FunctionComponent = () => (
  <Flex>
    <FlexItem>first item</FlexItem>
    <Divider
      orientation={{
        default: 'vertical'
      }}
    />
    <FlexItem>second item</FlexItem>
  </Flex>
);

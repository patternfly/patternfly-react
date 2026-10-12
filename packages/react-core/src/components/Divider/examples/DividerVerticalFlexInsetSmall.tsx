import { Divider, Flex, FlexItem } from '@rh-felt/react-core';

export const DividerVerticalFlexInsetSmall: React.FunctionComponent = () => (
  <Flex>
    <FlexItem>first item</FlexItem>
    <Divider
      orientation={{
        default: 'vertical'
      }}
      inset={{ default: 'insetSm' }}
    />
    <FlexItem>second item</FlexItem>
  </Flex>
);

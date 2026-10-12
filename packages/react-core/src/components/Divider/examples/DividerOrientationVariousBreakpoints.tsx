import { Divider, Flex, FlexItem } from '@rh-felt/react-core';

export const DividerOrientationVariousBreakpoints: React.FunctionComponent = () => (
  <Flex>
    <FlexItem>first item</FlexItem>
    <Divider
      orientation={{
        default: 'vertical',
        sm: 'horizontal',
        md: 'vertical',
        lg: 'horizontal',
        xl: 'vertical',
        '2xl': 'horizontal'
      }}
    />
    <FlexItem>second item</FlexItem>
  </Flex>
);

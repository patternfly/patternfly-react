import { Divider, Flex, FlexItem } from '@rh-felt/react-core';

export const DividerVerticalFlexInsetVariousBreakpoints: React.FunctionComponent = () => (
  <Flex>
    <FlexItem>first item</FlexItem>
    <Divider
      orientation={{
        default: 'vertical'
      }}
      inset={{
        default: 'insetMd',
        md: 'insetNone',
        lg: 'insetSm',
        xl: 'insetXs'
      }}
    />
    <FlexItem>second item</FlexItem>
  </Flex>
);

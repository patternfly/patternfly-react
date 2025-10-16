import { Flex, FlexItem } from '@patternfly/react-core';

export const FlexIndividuallySpaced: React.FunctionComponent = () => (
  <Flex>
    <FlexItem spacer={{ default: 'spacerNone' }}>Item - none</FlexItem>
    <FlexItem spacer={{ default: 'spacerXs' }}>Item - xs</FlexItem>
    <FlexItem spacer={{ default: 'spacerSm' }}>Item -sm</FlexItem>
    <FlexItem spacer={{ default: 'spacerMd' }}>Item - md</FlexItem>
    <FlexItem spacer={{ default: 'spacerLg' }}>Item - lg</FlexItem>
    <FlexItem spacer={{ default: 'spacerXl' }}>Item - xl</FlexItem>
    <FlexItem spacer={{ default: 'spacer2xl' }}>Item - 2xl</FlexItem>
    <FlexItem spacer={{ default: 'spacer3xl' }}>Item - 3xl</FlexItem>
  </Flex>
);

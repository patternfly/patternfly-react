import React from 'react';
import { Flex, FlexItem } from '@patternfly/react-core';

export class FlexDemo extends React.Component {
  render() {
    return (
      <Flex>
        <FlexItem>Flex item</FlexItem>
        <FlexItem>Flex item</FlexItem>
        <FlexItem>Flex item</FlexItem>
        <FlexItem>Flex item</FlexItem>
        <FlexItem>Flex item</FlexItem>
        <FlexItem>Flex item</FlexItem>
        <FlexItem>Flex item</FlexItem>
      </Flex>
    );
  }
}

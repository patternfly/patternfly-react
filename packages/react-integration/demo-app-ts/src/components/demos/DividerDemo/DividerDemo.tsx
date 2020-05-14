import React from 'react';
import { Divider, Flex, FlexItem } from '@patternfly/react-core';

export class DividerDemo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Divider />

        <ul>
          <li>List item one</li>
          <Divider component="li" />
          <li>List item two</li>
        </ul>

        <Divider component="div" />

        <Flex>
          <FlexItem>first item</FlexItem>
          <Divider id="vertical-divider" isVertical />
          <FlexItem>second item</FlexItem>
        </Flex>
      </React.Fragment>
    );
  }
}

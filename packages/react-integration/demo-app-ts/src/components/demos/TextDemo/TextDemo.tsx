import {
  Text,
  TextProps,
  TextVariants,
  TextContent,
  TextList,
  TextListProps,
  TextListVariants,
  TextListItem,
  TextListItemProps,
  TextListItemVariants
} from '@patternfly/react-core';
import React, { Component } from 'react';
export class TextDemo extends Component {
  myTextProps: TextProps = {
    component: TextVariants.h1,
    children: 'Header text'
  };
  myTextListProps: TextListProps = {
    component: TextListVariants.ul
  };
  myTextListItemProps: TextListItemProps = {
    component: TextListItemVariants.li,
    children: 'Text list item'
  };
  myTextVisitedLink: TextProps = {
    component: TextVariants.a,
    children: 'Visited link'
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <TextContent>
        <Text component={this.myTextProps.component}>{this.myTextProps.children}</Text>
        <Text id="visited-link" isVisitedLink component={this.myTextVisitedLink.component}>
          {this.myTextVisitedLink.children}
        </Text>
        <TextList component={this.myTextListProps.component}>
          <TextListItem component={this.myTextListItemProps.component}>
            {this.myTextListItemProps.children}
          </TextListItem>
        </TextList>
      </TextContent>
    );
  }
}

export default TextDemo;

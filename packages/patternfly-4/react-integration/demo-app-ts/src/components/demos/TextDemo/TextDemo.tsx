import { Text, TextProps, TextVariants, TextContent, TextList, TextListProps, TextListVariants, TextListItem, TextListItemProps, TextListItemVariants } from '@patternfly/react-core';
import React, { Component } from 'react';
export class TextDemo extends Component {
 myTextProps: TextProps = {
   component: TextVariants.h1,
   children: 'Header text'
 }
 myTextListProps: TextListProps = {
   component: TextListVariants.ul
 }
 myTextListItemProps: TextListItemProps = {
   component: TextListItemVariants.li,
   children: 'Text list item'
 }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

 render() {
   return (
     <TextContent>
      <Text component={this.myTextProps.component}>{this.myTextProps.children}</Text>
      <TextList component={this.myTextListProps.component}>
        <TextListItem children={this.myTextListItemProps.children} component={this.myTextListItemProps.component} />
      </TextList>
     </TextContent>
   );
 }
}

export default TextDemo;

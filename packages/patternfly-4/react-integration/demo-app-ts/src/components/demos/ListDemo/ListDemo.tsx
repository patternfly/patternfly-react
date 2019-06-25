import { List, ListProps, ListVariant, ListItem } from '@patternfly/react-core';
import React, { Component } from 'react';
export class ListDemo extends Component {
 myInlineListProps: ListProps = {
  variant: ListVariant.inline
 };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

 render() {
   return (
     <React.Fragment>
       <List>
        <ListItem>I am a plain list item</ListItem>
        <ListItem>I am a plain list item</ListItem>
        <ListItem>I am a plain list item</ListItem>
       </List>
       <List variant={this.myInlineListProps.variant}>
        <ListItem>I am an inline list item</ListItem>
        <ListItem>I am an inline list item</ListItem>
        <ListItem>I am an inline list item</ListItem>
       </List>
     </React.Fragment>
   );
 }
}

export default ListDemo;

import { List, ListProps, ListVariant, ListComponent, ListItem } from '@patternfly/react-core';
import React, { Component } from 'react';
import BookOpen from '@patternfly/react-icons/dist/esm/icons/book-open-icon';
import Key from '@patternfly/react-icons/dist/esm/icons/key-icon';
import Desktop from '@patternfly/react-icons/dist/esm/icons/desktop-icon';

export class ListDemo extends Component {
  myInlineListProps: ListProps = {
    variant: ListVariant.inline
  };

  myOrderedListProps: ListProps = {
    component: ListComponent.ol
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <List>
          <ListItem>I am a basic list item</ListItem>
          <ListItem>I am a basic list item</ListItem>
          <ListItem>I am a basic list item</ListItem>
        </List>
        <List variant={this.myInlineListProps.variant}>
          <ListItem>I am an inline list item</ListItem>
          <ListItem>I am an inline list item</ListItem>
          <ListItem>I am an inline list item</ListItem>
        </List>
        <List component={this.myOrderedListProps.component}>
          <ListItem>I am an ordered list item</ListItem>
          <ListItem>I am an ordered list item</ListItem>
          <ListItem>I am an ordered list item</ListItem>
        </List>
        <List isBordered id="list-bordered">
          <ListItem>I am a bordered list item</ListItem>
          <ListItem>I am a bordered list item</ListItem>
          <ListItem>I am a bordered list item</ListItem>
        </List>
        <List isPlain id="list-plain">
          <ListItem>I am a plain list item</ListItem>
          <ListItem>I am a plain list item</ListItem>
          <ListItem>I am a plain list item</ListItem>
        </List>
        <List id="list-icon">
          <ListItem icon={<BookOpen />}>I am an icon list item</ListItem>
          <ListItem icon={<Key />}>I am an icon list item</ListItem>
          <ListItem icon={<Desktop />}>I am an icon list item</ListItem>
        </List>
        <List iconSize="large" id="list-icon-large">
          <ListItem icon={<BookOpen />}>I am a large icon list item</ListItem>
          <ListItem icon={<Key />}>I am a large icon list item</ListItem>
          <ListItem icon={<Desktop />}>I am a large icon list item</ListItem>
        </List>
      </React.Fragment>
    );
  }
}

export default ListDemo;

import React from 'react';
import { SimpleList, SimpleListGroup, SimpleListItem } from '@patternfly/react-core';

export class SimpleListDemo extends React.Component {
  static displayName = 'SimpleListDemo';
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <h2>Simple List</h2>
        <SimpleList id="simple-list-demo">
          <SimpleListItem isCurrent>Item 1</SimpleListItem>
          <SimpleListItem>Item 2</SimpleListItem>
          <SimpleListItem>Item 3</SimpleListItem>
        </SimpleList>
        <br></br>
        <h2>Simple Grouped List</h2>
        <SimpleList id="simple-list-group-demo">
          <SimpleListGroup title="Group 1">
            <SimpleListItem isCurrent>Group 1 Item 1</SimpleListItem>
            <SimpleListItem>Group 1 Item 2</SimpleListItem>
            <SimpleListItem>Group 1 Item 3</SimpleListItem>
          </SimpleListGroup>
          <SimpleListGroup title="Group 2">
            <SimpleListItem>Group 2 Item 1</SimpleListItem>
            <SimpleListItem>Group 2 Item 2</SimpleListItem>
            <SimpleListItem>Group 2 Item 3</SimpleListItem>
          </SimpleListGroup>
        </SimpleList>
      </React.Fragment>
    );
  }
}

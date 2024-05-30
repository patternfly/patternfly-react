import React, { Component } from 'react';
import { SimpleList, SimpleListGroup, SimpleListItem, SimpleListItemProps } from '@patternfly/react-core';

interface SimpleListDemoState {
  activeItem: number | string;
}

export class SimpleListDemo extends Component<any, SimpleListDemoState> {
  static displayName = 'SimpleListDemo';

  constructor(props: SimpleListDemoState) {
    super(props);
    this.state = {
      activeItem: 1
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <h2>Simple List</h2>
        <SimpleList id="simple-list-demo">
          <SimpleListItem isActive>Item 1</SimpleListItem>
          <SimpleListItem>Item 2</SimpleListItem>
          <SimpleListItem>Item 3</SimpleListItem>
        </SimpleList>
        <br></br>
        <h2>Simple Grouped List</h2>
        <SimpleList id="simple-list-group-demo">
          <SimpleListGroup title="Group 1">
            <SimpleListItem isActive>Group 1 Item 1</SimpleListItem>
            <SimpleListItem>Group 1 Item 2</SimpleListItem>
            <SimpleListItem>Group 1 Item 3</SimpleListItem>
          </SimpleListGroup>
          <SimpleListGroup title="Group 2">
            <SimpleListItem>Group 2 Item 1</SimpleListItem>
            <SimpleListItem>Group 2 Item 2</SimpleListItem>
            <SimpleListItem>Group 2 Item 3</SimpleListItem>
          </SimpleListGroup>
        </SimpleList>
        <br></br>
        <h2>Uncontrolled Simple List</h2>
        <SimpleList
          id="simple-list-demo-uncontrolled"
          onSelect={(
            _ref: React.RefObject<HTMLButtonElement> | React.RefObject<HTMLAnchorElement>,
            props: SimpleListItemProps
          ) => {
            this.setState({ activeItem: props.itemId! });
          }}
          isControlled={false}
        >
          <SimpleListItem itemId={1} isActive={activeItem === 1}>
            Item 1
          </SimpleListItem>
          <SimpleListItem itemId={2} isActive={activeItem === 2}>
            Item 2
          </SimpleListItem>
          <SimpleListItem itemId={3} isActive={activeItem === 3}>
            Item 3
          </SimpleListItem>
        </SimpleList>
      </React.Fragment>
    );
  }
}

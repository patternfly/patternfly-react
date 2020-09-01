import { Badge, Label, LabelGroup } from '@patternfly/react-core';
import React, { Component } from 'react';

interface BadgeLabelState {
  badgeLabelArray: {
    name: string;
    isRead: boolean;
    count: number;
  }[];
}

export class LabelGroupDemo extends Component<{}, BadgeLabelState> {
  deleteItem: (id: string) => void;
  constructor(props: {}) {
    super(props);
    this.state = {
      badgeLabelArray: [
        {
          name: 'Lemons',
          isRead: true,
          count: 10
        },
        {
          name: 'Limes',
          isRead: true,
          count: 8
        }
      ]
    };
    this.deleteItem = (id: string) => {
      const copyOfbadgeLabelArray = this.state.badgeLabelArray;
      const index = copyOfbadgeLabelArray.findIndex(labelObj => labelObj.name === id);

      if (index !== -1) {
        copyOfbadgeLabelArray.splice(index, 1);
        this.setState({ badgeLabelArray: copyOfbadgeLabelArray });
      }
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { badgeLabelArray } = this.state;
    return (
      <LabelGroup>
        {badgeLabelArray.map(label => (
          <Label key={label.name} onClick={() => this.deleteItem(label.name)}>
            {label.name}
            <Badge isRead={label.isRead}>{label.count}</Badge>
          </Label>
        ))}
      </LabelGroup>
    );
  }
}

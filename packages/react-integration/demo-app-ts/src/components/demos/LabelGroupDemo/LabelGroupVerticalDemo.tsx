import { Badge, Label, LabelGroup } from '@patternfly/react-core';
import { Component } from 'react';

interface BadgeLabelState {
  badgeLabelArray: {
    name: string;
    isRead: boolean;
    count: number;
  }[];
}

export class LabelGroupVerticalDemo extends Component<{}, BadgeLabelState> {
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
        },
        {
          name: 'oranges',
          isRead: true,
          count: 3
        },
        {
          name: 'grapefruit',
          isRead: true,
          count: 1
        }
      ]
    };
    this.deleteItem = (id: string) => {
      const copyOfbadgeLabelArray = this.state.badgeLabelArray;
      const index = copyOfbadgeLabelArray.findIndex((labelObj) => labelObj.name === id);

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
      <LabelGroup
        isVertical
        numLabels={1}
        collapsedText="Expand labels"
        expandedText="Collapse labels"
        aria-label="Vertical fruit labels"
      >
        {badgeLabelArray.map((label) => (
          <Label key={label.name} onClose={() => this.deleteItem(label.name)}>
            {label.name}
            <Badge isRead={label.isRead}>{label.count}</Badge>
          </Label>
        ))}
      </LabelGroup>
    );
  }
}

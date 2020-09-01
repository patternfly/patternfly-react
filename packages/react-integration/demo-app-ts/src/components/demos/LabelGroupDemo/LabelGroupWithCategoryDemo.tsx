import React, { Component } from 'react';
import { Label, LabelGroup } from '@patternfly/react-core';

interface LabelWithCategoryGroupState {
  labelGroups: {
    labels: string[];
    category: string;
  }[];
}

export class LabelWithCategoryGroupDemo extends Component<{}, LabelWithCategoryGroupState> {
  deleteItem: (id: string) => void;
  deleteCategory: (category: string) => void;

  constructor(props: {}) {
    super(props);
    this.state = {
      labelGroups: [
        {
          category: 'Category 1',
          labels: ['Label 1', 'Label 2']
        },
        {
          category: 'Category 2',
          labels: ['Label 3', 'Label 4']
        },
        {
          category: 'Category 3 has a very long name',
          labels: ['Label 5', 'Label 6', 'Label 7', 'Label 8']
        }
      ]
    };

    this.deleteItem = (id: string) => {
      const copyOfLabelGroups = this.state.labelGroups;
      for (let i = 0; copyOfLabelGroups.length > i; i++) {
        const index = copyOfLabelGroups[i].labels.indexOf(id);
        if (index !== -1) {
          copyOfLabelGroups[i].labels.splice(index, 1);
          // check if this is the last item in the group category
          if (copyOfLabelGroups[i].labels.length === 0) {
            copyOfLabelGroups.splice(i, 1);
            this.setState({ labelGroups: copyOfLabelGroups });
          } else {
            this.setState({ labelGroups: copyOfLabelGroups });
          }
        }
      }
    };

    this.deleteCategory = (category: string) => {
      const copyOfLabelGroups = this.state.labelGroups;
      for (let i = 0; copyOfLabelGroups.length > i; i++) {
        if (copyOfLabelGroups[i].category === category) {
          copyOfLabelGroups.splice(i, 1);
          this.setState({ labelGroups: copyOfLabelGroups });
        }
      }
    };
  }
  render() {
    const { labelGroups } = this.state;

    return labelGroups.map(currentGroup => (
      <LabelGroup
        key={currentGroup.category}
        categoryName={currentGroup.category}
        isClosable
        onClick={() => this.deleteCategory(currentGroup.category)}
        closeBtnAriaLabel="Close category demo"
        tooltipPosition="bottom"
      >
        {currentGroup.labels.map(label => (
          <Label key={label} onClick={() => this.deleteItem(label)}>
            {label}
          </Label>
        ))}
      </LabelGroup>
    ));
  }
}

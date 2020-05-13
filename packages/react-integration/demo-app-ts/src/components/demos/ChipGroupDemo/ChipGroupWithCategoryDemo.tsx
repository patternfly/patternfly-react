import React, { Component } from 'react';
import { Chip, ChipGroup } from '@patternfly/react-core';

interface ChipWithCategoryGroupState {
  chipGroups: {
    chips: string[];
    category: string;
  }[];
}

export class ChipWithCategoryGroupDemo extends Component<{}, ChipWithCategoryGroupState> {
  deleteItem: (id: string) => void;
  deleteCategory: (category: string) => void;

  constructor(props: {}) {
    super(props);
    this.state = {
      chipGroups: [
        {
          category: 'Category 1',
          chips: ['Chip 1', 'Chip 2']
        },
        {
          category: 'Category 2',
          chips: ['Chip 3', 'Chip 4']
        },
        {
          category: 'Category 3 has a very long name',
          chips: ['Chip 5', 'Chip 6', 'Chip 7', 'Chip 8']
        }
      ]
    };

    this.deleteItem = (id: string) => {
      const copyOfChipGroups = this.state.chipGroups;
      for (let i = 0; copyOfChipGroups.length > i; i++) {
        const index = copyOfChipGroups[i].chips.indexOf(id);
        if (index !== -1) {
          copyOfChipGroups[i].chips.splice(index, 1);
          // check if this is the last item in the group category
          if (copyOfChipGroups[i].chips.length === 0) {
            copyOfChipGroups.splice(i, 1);
            this.setState({ chipGroups: copyOfChipGroups });
          } else {
            this.setState({ chipGroups: copyOfChipGroups });
          }
        }
      }
    };

    this.deleteCategory = (category: string) => {
      const copyOfChipGroups = this.state.chipGroups;
      for (let i = 0; copyOfChipGroups.length > i; i++) {
        if (copyOfChipGroups[i].category === category) {
          copyOfChipGroups.splice(i, 1);
          this.setState({ chipGroups: copyOfChipGroups });
        }
      }
    };
  }
  render() {
    const { chipGroups } = this.state;

    return chipGroups.map(currentGroup => (
      <ChipGroup
        key={currentGroup.category}
        categoryName={currentGroup.category}
        isClosable
        onClick={() => this.deleteCategory(currentGroup.category)}
        closeBtnAriaLabel="Close category demo"
        tooltipPosition="bottom"
      >
        {currentGroup.chips.map(chip => (
          <Chip key={chip} onClick={() => this.deleteItem(chip)}>
            {chip}
          </Chip>
        ))}
      </ChipGroup>
    ));
  }
}

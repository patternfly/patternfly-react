import { Badge, Chip, ChipGroup } from '@patternfly/react-core';
import React, { Component } from 'react';

interface BadgeChipState {
  badgeChipArray: {
    name: string;
    isRead: boolean;
    count: number;
  }[];
}

export class ChipGroupDemo extends Component<{}, BadgeChipState> {
  deleteItem: (id: string) => void;
  constructor(props: {}) {
    super(props);
    this.state = {
      badgeChipArray: [
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
      const copyOfbadgeChipArray = this.state.badgeChipArray;
      const index = copyOfbadgeChipArray.findIndex(chipObj => chipObj.name === id);

      if (index !== -1) {
        copyOfbadgeChipArray.splice(index, 1);
        this.setState({ badgeChipArray: copyOfbadgeChipArray });
      }
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { badgeChipArray } = this.state;
    return (
      <ChipGroup>
        {badgeChipArray.map(chip => (
          <Chip key={chip.name} onClick={() => this.deleteItem(chip.name)}>
            {chip.name}
            <Badge isRead={chip.isRead}>{chip.count}</Badge>
          </Chip>
        ))}
      </ChipGroup>
    );
  }
}

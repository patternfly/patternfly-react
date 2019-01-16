import React from 'react';
import { Badge, ChipGroup, Chip } from '@patternfly/react-core';

class BadgeChip extends React.Component {
  state = {
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

  deleteItem = id => {
    debugger;
    const copyOfbadgeChipArray = this.state.badgeChipArray;
    const index = copyOfbadgeChipArray.findIndex(chipObj => chipObj.name === id);

    if (index !== -1) {
      copyOfbadgeChipArray.splice(index, 1);
      this.setState({ badgeChipArray: copyOfbadgeChipArray });
    }
  };

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

export default BadgeChip;

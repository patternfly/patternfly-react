import React, { Component } from 'react';
import { Chip, ChipGroup } from '@patternfly/react-core';

interface ChipGroupWithOverflowChipEventHandlerState {
  chipArray: {
    name: string;
  }[];
  shouldShowAdditionalText: boolean;
}

export class ChipGroupWithOverflowChipEventHandler extends Component<{}, ChipGroupWithOverflowChipEventHandlerState> {
  deleteItem: (id: string) => void;

  constructor(props: {}) {
    super(props);
    this.state = {
      chipArray: [
        {
          name: 'Lemons'
        },
        {
          name: 'Limes'
        },
        {
          name: 'Peaches'
        },
        {
          name: 'Pears'
        },
        {
          name: 'Tangerines'
        }
      ],
      shouldShowAdditionalText: false
    };

    this.deleteItem = (id: string) => {
      const copyOfChipArray = this.state.chipArray;
      const index = copyOfChipArray.findIndex((chipObj) => chipObj.name === id);

      if (index !== -1) {
        copyOfChipArray.splice(index, 1);
        this.setState({ chipArray: copyOfChipArray });
      }
    };

    this.handleOverflowChipClick = this.handleOverflowChipClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleOverflowChipClick() {
    this.setState({ shouldShowAdditionalText: !this.state.shouldShowAdditionalText });
  }

  render() {
    const { chipArray } = this.state;
    return (
      <>
        <ChipGroup onOverflowChipClick={() => this.handleOverflowChipClick()}>
          {chipArray.map((chip) => (
            <Chip key={chip.name} onClick={() => this.deleteItem(chip.name)}>
              {chip.name}
            </Chip>
          ))}
        </ChipGroup>
        {this.state.shouldShowAdditionalText && (
          <h1 className="pf-v5-c-title pf-m-2xl pf-v5-u-p-lg">Full results are currently expanded.</h1>
        )}
      </>
    );
  }
}

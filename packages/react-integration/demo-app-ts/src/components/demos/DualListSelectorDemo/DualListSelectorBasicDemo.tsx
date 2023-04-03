import React from 'react';
import { DualListSelector, DualListSelectorProps } from '@patternfly/react-core';
interface DualListSelectorState {
  availableOptions: React.ReactNode[];
  chosenOptions: React.ReactNode[];
}

export class DualListSelectorBasicDemo extends React.Component<DualListSelectorProps, DualListSelectorState> {
  static displayName = 'DualListSelectorDemo';
  onListChange: (
    event: React.MouseEvent<HTMLElement>,
    newAvailableOptions: React.ReactNode[],
    newChosenOptions: React.ReactNode[]
  ) => void;

  constructor(props: DualListSelectorProps) {
    super(props);
    this.state = {
      availableOptions: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      chosenOptions: []
    };

    this.onListChange = (event, newAvailableOptions, newChosenOptions) => {
      this.setState({
        availableOptions: newAvailableOptions,
        chosenOptions: newChosenOptions
      });
    };
  }

  render() {
    return (
      <DualListSelector
        isSearchable
        availableOptions={this.state.availableOptions}
        chosenOptions={this.state.chosenOptions}
        onListChange={this.onListChange}
        addAllTooltip="Add all options"
        addAllTooltipProps={{ position: 'top' }}
        addSelectedTooltip="Add selected options"
        addSelectedTooltipProps={{ position: 'right' }}
        removeSelectedTooltip="Remove selected options"
        removeSelectedTooltipProps={{ position: 'left' }}
        removeAllTooltip="Remove all options"
        removeAllTooltipProps={{ position: 'bottom' }}
      />
    );
  }
}

import React, { Component } from 'react';
import {
  DualListSelector as DLSDeprecated,
  DualListSelectorProps as DLSPropsDeprecated
} from '@patternfly/react-core/deprecated';
interface DualListSelectorState {
  availableOptions: React.ReactNode[];
  chosenOptions: React.ReactNode[];
}

class DualListSelectorDeprecatedBasicDemo extends Component<DLSPropsDeprecated, DualListSelectorState> {
  static displayName = 'DualListSelectorDemo';
  onListChange: (
    event: React.MouseEvent<HTMLElement>,
    newAvailableOptions: React.ReactNode[],
    newChosenOptions: React.ReactNode[]
  ) => void;

  constructor(props: DLSPropsDeprecated) {
    super(props);
    this.state = {
      availableOptions: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      chosenOptions: []
    };

    this.onListChange = (_event, newAvailableOptions, newChosenOptions) => {
      this.setState({
        availableOptions: newAvailableOptions,
        chosenOptions: newChosenOptions
      });
    };
  }

  render() {
    return (
      <DLSDeprecated
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

DualListSelectorDeprecatedBasicDemo.displayName = 'DualListSelectorDemo';

export { DualListSelectorDeprecatedBasicDemo };

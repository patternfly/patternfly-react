import React from 'react';
import { DualListSelector, DualListSelectorProps } from '@patternfly/react-core';
interface DualListSelectorState {
  availableOptions: React.ReactNode[];
  chosenOptions: React.ReactNode[];
}

export class DualListSelectorTreeDemo extends React.Component<DualListSelectorProps, DualListSelectorState> {
  static displayName = 'DualListSelectorTreeDemo';
  onListChange: (newAvailableOptions: React.ReactNode[], newChosenOptions: React.ReactNode[]) => void;

  constructor(props: DualListSelectorProps) {
    super(props);
    this.state = {
      availableOptions: [
        { text: 'Folder 1', children: [{ text: 'Option 1' }] },
        { text: 'Option 2' },
        {
          text: 'Folder 2',
          children: [{ text: 'Folder 3', children: [{ text: 'Option 3' }, { text: 'Option 4' }] }, { text: 'Option 5' }]
        }
      ],
      chosenOptions: []
    };

    this.onListChange = (newAvailableOptions, newChosenOptions) => {
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
        isTree
        hasChecks
      />
    );
  }
}

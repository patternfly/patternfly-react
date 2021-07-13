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
        { id: 'F1', text: 'Folder 1', children: [{ id: 'O1', text: 'Option 1' }] },
        { id: 'O2', text: 'Option 2' },
        {
          id: 'F2',
          text: 'Folder 2',
          children: [
            {
              id: 'F3',
              text: 'Folder 3',
              children: [
                { id: 'O3', text: 'Option 3' },
                { id: 'O4', text: 'Option 4' }
              ]
            },
            { id: 'O5', text: 'Option 5' }
          ]
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
      />
    );
  }
}

import React from 'react';
import { DualListSelector, DualListSelectorProps, DualListSelectorTreeItemData } from '@patternfly/react-core';
interface DualListSelectorState {
  availableOptions: DualListSelectorTreeItemData[];
  chosenOptions: DualListSelectorTreeItemData[];
}

export class DualListSelectorTreeDemo extends React.Component<DualListSelectorProps, DualListSelectorState> {
  static displayName = 'DualListSelectorTreeDemo';
  onListChange: (
    event: React.MouseEvent<HTMLElement>,
    newAvailableOptions: DualListSelectorTreeItemData[],
    newChosenOptions: DualListSelectorTreeItemData[]
  ) => void;

  constructor(props: DualListSelectorProps) {
    super(props);
    this.state = {
      availableOptions: [
        { id: 'F1', text: 'Folder 1', isChecked: false, children: [{ id: 'O1', text: 'Option 1', isChecked: false }] },
        { id: 'O2', text: 'Option 2', isChecked: false },
        {
          id: 'F2',
          text: 'Folder 2',
          isChecked: false,
          children: [
            {
              id: 'F3',
              text: 'Folder 3',
              isChecked: false,
              children: [
                { id: 'O3', text: 'Option 3', isChecked: false },
                { id: 'O4', text: 'Option 4', isChecked: false }
              ]
            },
            { id: 'O5', text: 'Option 5', isChecked: false }
          ]
        }
      ],
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
        onListChange={this.onListChange as any}
        isTree
      />
    );
  }
}

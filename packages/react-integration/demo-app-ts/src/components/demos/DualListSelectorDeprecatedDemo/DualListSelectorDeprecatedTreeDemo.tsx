import React, { Component } from 'react';
import {
  DualListSelector as DLSDeprecated,
  DualListSelectorProps as DLSPropsDeprecated,
  DualListSelectorTreeItemData as DLSTreeItemDataDeprecated
} from '@patternfly/react-core/deprecated';
interface DualListSelectorState {
  availableOptions: DLSTreeItemDataDeprecated[];
  chosenOptions: DLSTreeItemDataDeprecated[];
}

class DualListSelectorDeprecatedTreeDemo extends Component<DLSPropsDeprecated, DualListSelectorState> {
  static displayName = 'DualListSelectorTreeDemo';
  onListChange: (
    event: React.MouseEvent<HTMLElement>,
    newAvailableOptions: DLSTreeItemDataDeprecated[],
    newChosenOptions: DLSTreeItemDataDeprecated[]
  ) => void;

  constructor(props: DLSPropsDeprecated) {
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
        onListChange={this.onListChange as any}
        isTree
      />
    );
  }
}

DualListSelectorDeprecatedTreeDemo.displayName = 'DualListSelectorDemo';

export { DualListSelectorDeprecatedTreeDemo };

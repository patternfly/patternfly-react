import * as React from 'react';
import { DataToolbarItem, DataToolbarItemProps } from './DataToolbarItem';
import { ChipGroup, Chip } from '../../../components/ChipGroup';

export interface DataToolbarItemWithChipGroupProps extends DataToolbarItemProps {
  /** An array of strings to be displayed as chips in the expandable content */
  chips?: string[];
  /** A flag indicating if the expandable content is currently expanded */
  isExpanded: boolean;
  /** A flag indicating the item is being displayed inside expandable content rather than a content row TODO */
  isInExpandableContent?: boolean;
  /** Content to be rendered inside the Data toolbar item associated with the chip group */
  children: React.ReactNode;
}

export interface DataToolbarItemWithChipGroupState {
  /** An array of strings being displayed as chips in the expandable content */
  chips?: string[];
}

export class DataToolbarItemWithChipGroup extends React.Component<DataToolbarItemWithChipGroupProps, DataToolbarItemWithChipGroupState> {

  static defaultProps = {
    isInExpandableContent: false
  };

  constructor(props: DataToolbarItemWithChipGroupProps) {
    super(props);
    this.state = {
      chips: this.props.chips
    }
  }

  deleteItem = (id: string) => {
    const copyOfChips = this.state.chips;
      const index = copyOfChips.indexOf(id);
      if (index !== -1) {
        copyOfChips.splice(index, 1);
        this.setState({ chips: copyOfChips });
    }
  };

  render() {
    const { isExpanded, isInExpandableContent, children, ...props } = this.props;
    const { chips } = this.state;


    return (
      <React.Fragment>
        {(!isInExpandableContent || isExpanded) &&
        <DataToolbarItem {...props}>
          {children}
        </DataToolbarItem>
        }
        {isInExpandableContent && <DataToolbarItem>
          <ChipGroup withToolbar>
            {chips.map(chip => (
              <Chip key={chip} onClick={() => this.deleteItem(chip)}>
                {chip}
              </Chip>
            ))}
          </ChipGroup>
        </DataToolbarItem>
        }
      </React.Fragment>
    );
  }

};

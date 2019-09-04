import * as React from 'react';
import { DataToolbarItem, DataToolbarItemProps } from './DataToolbarItem';
import { ChipGroup, Chip } from '../../../components/ChipGroup';

export interface DataToolbarItemWithChipGroupProps extends DataToolbarItemProps {
  /** TODO */
  chips?: string[];
  /** TODO */
  isExpanded: boolean;
  /** TODO */
  isInExpandableContent?: boolean;
  /** TODO */
  children: React.ReactNode;
}

export interface DataToolbarItemWithChipGroupState {
  /** TODO */
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

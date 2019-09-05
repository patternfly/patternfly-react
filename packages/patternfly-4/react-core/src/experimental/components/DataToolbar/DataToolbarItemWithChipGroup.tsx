import * as React from 'react';
import { DataToolbarItem, DataToolbarItemProps } from './DataToolbarItem';
import { ChipGroup, Chip } from '../../../components/ChipGroup';
import { DataToolbarContext } from './DataToolbarUtils';

export interface DataToolbarItemWithChipGroupProps extends DataToolbarItemProps {
  /** An array of strings to be displayed as chips in the expandable content */
  chips?: string[];
  /** A flag indicating the item is being displayed inside expandable content rather than a content row
   * TODO: Figure out how and when to set this flag */
  isInExpandableContent?: boolean;
  /** Content to be rendered inside the Data toolbar item associated with the chip group */
  children: React.ReactNode;
}

export interface DataToolbarItemWithChipGroupState {
  /** An array of strings being displayed as chips in the expandable content
   * TODO: Allow the item (filter, input, etc) to somehow update this array */
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
    const { isInExpandableContent, children, ...props } = this.props;
    const { chips } = this.state;


    return (
      <DataToolbarContext.Consumer>
        {({ isExpanded, updateExpandableContent }) => {

          const chipGroup = <ChipGroup withToolbar>
            {chips.map(chip => (
              <Chip key={chip} onClick={() => this.deleteItem(chip)}>
                {chip}
              </Chip>
            ))}
          </ChipGroup>;

          /** TODO: make sure if multiple chip groups in a DataToolbar, they are EACH displayed in the expandable content **/
          if (!isExpanded) {
            updateExpandableContent([chipGroup]);
          }

          return (
            <React.Fragment>
              {(!isInExpandableContent || isExpanded) &&
              <DataToolbarItem {...props}>
                {children}
              </DataToolbarItem>
              }
              {isInExpandableContent && <DataToolbarItem>
                {chipGroup}
              </DataToolbarItem>
              }
            </React.Fragment>);
        }}
      </DataToolbarContext.Consumer>
    );
  }

};

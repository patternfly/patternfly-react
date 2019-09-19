import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DataToolbarItem, DataToolbarItemProps } from './DataToolbarItem';
import { ChipGroup, Chip, ChipGroupToolbarItem } from '../../../components/ChipGroup';
import { DataToolbarContext } from './DataToolbarUtils';

export interface DataToolbarItemWithChipGroupProps extends DataToolbarItemProps {
  /** An array of strings to be displayed as chips in the expandable content */
  chips?: string[];
  /** Callback passed by consumer used to delete a chip from the chips[] */
  deleteChip?: (chip: string) => void;
  /** Content to be rendered inside the Data toolbar item associated with the chip group */
  children: React.ReactNode;
  /** Unique label for the chip group */
  label: string;
}

interface DataToolbarItemWithChipGroupState {
  isMounted: boolean;
}

export class DataToolbarItemWithChipGroup
  extends React.Component<DataToolbarItemWithChipGroupProps, DataToolbarItemWithChipGroupState> {

  static defaultProps = {
    chips: [] as string[]
  };

  constructor(props: DataToolbarItemWithChipGroupProps) {
    super(props);
    this.state = {
      isMounted: false
    };
  }

  componentDidMount() {
    /* eslint-disable-next-line */
    this.setState({ isMounted: true });
  }

  render() {
    const { children, chips, deleteChip, label, ...props } = this.props;

    return (
      <DataToolbarContext.Consumer>
        {({ isExpanded, chipGroupContentRef, updateShowClearFiltersButton }) => {

          if (chips.length > 0) {
            updateShowClearFiltersButton(true);
          }

          const chipGroup =
            <DataToolbarItem variant="chip-group">
              <ChipGroup withToolbar>
                <ChipGroupToolbarItem key={label} categoryName={label}>
                  {chips.map((chip) => (
                    <Chip key={chip} onClick={() => deleteChip(chip)}>
                      {chip}
                    </Chip>
                  ))}
                </ChipGroupToolbarItem>
              </ChipGroup>
            </DataToolbarItem>;

          if (!isExpanded && this.state.isMounted) {
            chipGroupContentRef.current.hidden = false;
            return <React.Fragment>
              <DataToolbarItem {...props}>{children}</DataToolbarItem>
              {ReactDOM.createPortal(chipGroup, chipGroupContentRef.current.firstElementChild)}
            </React.Fragment>;
          }

          return (
            <React.Fragment>
              <DataToolbarItem {...props}>{children}</DataToolbarItem>
              {chipGroup}
            </React.Fragment>
          );
        }}
      </DataToolbarContext.Consumer>
    );
  }

}

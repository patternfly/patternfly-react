import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DataToolbarItem, DataToolbarItemProps } from './DataToolbarItem';
import { ChipGroup, Chip, ChipGroupToolbarItem } from '../../../components/ChipGroup';
import { DataToolbarContext } from './DataToolbarUtils';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { getModifier } from '@patternfly/react-styles';

export type DataToolbarChip = {
  /** A unique key to identify this chip */
  key: string;
  /** The ReactNode to display in the chip */
  node: React.ReactNode;
};

export interface DataToolbarFilterProps extends DataToolbarItemProps {
  /** An array of strings to be displayed as chips in the expandable content */
  chips?: (string | DataToolbarChip)[];
  /** Callback passed by consumer used to delete a chip from the chips[] */
  deleteChip?: (category: string, chip: DataToolbarChip | string) => void;
  /** Content to be rendered inside the Data toolbar item associated with the chip group */
  children: React.ReactNode;
  /** Unique category name to be used as a label for the chip group */
  categoryName: string;
}

interface DataToolbarFilterState {
  isMounted: boolean;
}

export class DataToolbarFilter
  extends React.Component<DataToolbarFilterProps, DataToolbarFilterState> {

  static defaultProps = {
    chips: [] as string[]
  };

  constructor(props: DataToolbarFilterProps) {
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
    const { children, chips, deleteChip, categoryName, ...props } = this.props;

    return (
      <DataToolbarContext.Consumer>
        {({ isExpanded, chipGroupContentRef }) => {

          const chipGroup =
            <DataToolbarItem variant="chip-group">
              <ChipGroup withToolbar>
                <ChipGroupToolbarItem key={categoryName} categoryName={categoryName}>
                  {chips.map((chip) => {
                    return typeof chip === 'string' ?
                      <Chip key={chip} onClick={() => deleteChip(categoryName, chip)}>
                        {chip}
                      </Chip> :
                      <Chip key={chip.key} onClick={() => deleteChip(categoryName, chip)}>
                        {chip.node}
                      </Chip>;
                  })}
                </ChipGroupToolbarItem>
              </ChipGroup>
            </DataToolbarItem>;

          if (!isExpanded && this.state.isMounted) {
            chipGroupContentRef.current.classList.remove(getModifier(styles, 'hidden'));
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

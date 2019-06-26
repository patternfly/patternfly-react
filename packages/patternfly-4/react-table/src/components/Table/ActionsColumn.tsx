import * as React from 'react';
import {
  Omit,
  Dropdown,
  KebabToggle,
  DropdownItem,
  DropdownItemProps,
  DropdownSeparator
} from '@patternfly/react-core';

//todo: export from react-core as enum
export enum DropdownPosition {
  right = 'right',
  left= 'left'
}

//todo: export from react-core as enum
export enum DropdownDirection {
  up = 'up',
  down = 'down',
}

export interface ActionsItem extends Omit<DropdownItemProps, 'title'> {
  isSeparator?: boolean;
  itemKey?: string;
  title?: string | React.ReactNode;
}

export interface ActionsColumnProps {
  children?: React.ReactNode;
  items: ActionsItem[];
  isDisabled?: boolean;
  dropdownPosition?: DropdownPosition;
  dropdownDirection?: DropdownDirection;
  rowData?: object | undefined;
  extraData?: { rowIndex: number, columnIndex: number, column: object, property: string };
};

export interface ActionsColumnState {
  isOpen: boolean;
}

class ActionsColumn extends React.Component<ActionsColumnProps, ActionsColumnState> {
  public static defaultProps = {
    children: null as React.ReactNode,
    items: [] as ActionsItem[],
    dropdownPosition: DropdownPosition.right,
    dropdownDirection: DropdownDirection.down,
    rowData: {},
    extraData: {}
  }
  constructor (props: ActionsColumnProps){
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onToggle = (isOpen: boolean): void => {
    this.setState({
      isOpen
    });
  }

  onSelect = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
    onClick: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, rowIndex: number | undefined, rowData: object | undefined, extraData: object | undefined) => void) | undefined): void => {
    const { rowData, extraData } = this.props;
    event.preventDefault();
    onClick && onClick(event, extraData && extraData.rowIndex, rowData, extraData);
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    const { items, children, dropdownPosition, dropdownDirection, isDisabled } = this.props;
    return (
      <React.Fragment>
        <Dropdown
          toggle={<KebabToggle isDisabled={isDisabled} onToggle={this.onToggle} />}
          position={dropdownPosition}
          direction={dropdownDirection}
          isOpen={isOpen}
          dropdownItems={items.map(
            ({ title, itemKey, onClick, isSeparator, ...props }, key) =>
              isSeparator ? (
                <DropdownSeparator {...props} key={itemKey || key} data-key={itemKey || key} />
              ) : (
                <DropdownItem
                  onClick={event => this.onSelect(event, onClick)}
                  {...props}
                  key={itemKey || key}
                  data-key={itemKey || key}
                >
                  {title}
                </DropdownItem>
              )
          )}
          isPlain
        />
        {children}
      </React.Fragment>
    );
  }
}

export default ActionsColumn;
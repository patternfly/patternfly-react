import * as React from 'react';
import { Dropdown } from '@patternfly/react-core/dist/js/components/Dropdown';
import { KebabToggle } from '@patternfly/react-core/dist/js/components/Dropdown/KebabToggle';
import { DropdownItem } from '@patternfly/react-core/dist/js/components/Dropdown/DropdownItem';
import { DropdownSeparator } from '@patternfly/react-core/dist/js/components/Dropdown/DropdownSeparator';
import {
  DropdownDirection,
  DropdownPosition
} from '@patternfly/react-core/dist/js/components/Dropdown/dropdownConstants';

import { IAction, IExtraData, IRowData } from './Table';

export interface ActionsColumnProps {
  children?: React.ReactNode;
  items: IAction[];
  isDisabled?: boolean;
  dropdownPosition?: DropdownPosition;
  dropdownDirection?: DropdownDirection;
  rowData?: IRowData;
  extraData?: IExtraData;
}

export interface ActionsColumnState {
  isOpen: boolean;
}

export class ActionsColumn extends React.Component<ActionsColumnProps, ActionsColumnState> {
  static defaultProps = {
    children: null as React.ReactNode,
    items: [] as IAction[],
    dropdownPosition: DropdownPosition.right,
    dropdownDirection: DropdownDirection.down,
    rowData: {} as IRowData,
    extraData: {} as IExtraData
  };
  constructor(props: ActionsColumnProps) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onToggle = (isOpen: boolean): void => {
    this.setState({
      isOpen
    });
  };

  onSelect = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    onClick:
      | ((event: React.MouseEvent, rowIndex: number | undefined, rowData: IRowData, extraData: IExtraData) => void)
      | undefined
  ): void => {
    const { rowData, extraData } = this.props;
    // Only prevent default if onClick is provided.  This allows href support.
    if (onClick) {
      event.preventDefault();
      // tslint:disable-next-line:no-unused-expression
      onClick(event as React.MouseEvent, extraData && extraData.rowIndex, rowData, extraData);
    }
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

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
          dropdownItems={items.map(({ title, itemKey, onClick, isSeparator, ...props }, key) =>
            isSeparator ? (
              <DropdownSeparator {...props} key={itemKey || key} data-key={itemKey || key} />
            ) : (
              <DropdownItem
                component="button"
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

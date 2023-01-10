import * as React from 'react';
import { Dropdown } from '@patternfly/react-core/dist/esm/components/Dropdown';
import { KebabToggle } from '@patternfly/react-core/dist/esm/components/Dropdown/KebabToggle';
import { DropdownItem } from '@patternfly/react-core/dist/esm/components/Dropdown/DropdownItem';
import { DropdownSeparator } from '@patternfly/react-core/dist/esm/components/Dropdown/DropdownSeparator';
import { Button } from '@patternfly/react-core/dist/esm/components/Button/Button';

import {
  DropdownDirection,
  DropdownPosition
} from '@patternfly/react-core/dist/esm/components/Dropdown/dropdownConstants';

import { IAction, IExtraData, IRowData } from './TableTypes';

export interface CustomActionsToggleProps {
  onToggle: (isOpen: boolean) => void;
  isOpen: boolean;
  isDisabled: boolean;
}

export interface ActionsColumnProps {
  children?: React.ReactNode;
  items: IAction[];
  isDisabled?: boolean;
  menuAppendTo?: HTMLElement | (() => HTMLElement) | 'inline' | 'parent';
  dropdownPosition?: DropdownPosition;
  dropdownDirection?: DropdownDirection;
  rowData?: IRowData;
  extraData?: IExtraData;
  actionsToggle?: (props: CustomActionsToggleProps) => React.ReactNode;
}

export interface ActionsColumnState {
  isOpen: boolean;
}

export class ActionsColumn extends React.Component<ActionsColumnProps, ActionsColumnState> {
  static displayName = 'ActionsColumn';
  private toggleRef = React.createRef<HTMLButtonElement>();
  static defaultProps = {
    children: null as React.ReactNode,
    items: [] as IAction[],
    dropdownPosition: DropdownPosition.right,
    dropdownDirection: DropdownDirection.down,
    menuAppendTo: 'inline',
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

  onClick = (
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
  };

  render() {
    const { isOpen } = this.state;
    const {
      items,
      children,
      dropdownPosition,
      dropdownDirection,
      menuAppendTo,
      isDisabled,
      rowData,
      actionsToggle
    } = this.props;

    const actionsToggleClone = actionsToggle ? (
      actionsToggle({ onToggle: this.onToggle, isOpen, isDisabled })
    ) : (
      <KebabToggle isDisabled={isDisabled} onToggle={this.onToggle} />
    );

    return (
      <React.Fragment>
        {items
          .filter(item => item.isOutsideDropdown)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .map(({ title, itemKey, onClick, isOutsideDropdown, ...props }, key) =>
            typeof title === 'string' ? (
              <Button
                onClick={event => this.onClick(event, onClick)}
                {...(props as any)}
                isDisabled={isDisabled}
                key={itemKey || `outside_dropdown_${key}`}
                data-key={itemKey || `outside_dropdown_${key}`}
              >
                {title}
              </Button>
            ) : (
              React.cloneElement(title as React.ReactElement, { onClick, isDisabled, ...props })
            )
          )}
        <Dropdown
          toggle={actionsToggleClone}
          position={dropdownPosition}
          direction={dropdownDirection}
          menuAppendTo={menuAppendTo}
          isOpen={isOpen}
          dropdownItems={items
            .filter(item => !item.isOutsideDropdown)
            .map(({ title, itemKey, onClick, isSeparator, ...props }, key) =>
              isSeparator ? (
                <DropdownSeparator {...props} key={itemKey || key} data-key={itemKey || key} />
              ) : (
                <DropdownItem
                  component="button"
                  onClick={event => {
                    this.onClick(event, onClick);
                    this.onToggle(!isOpen);
                  }}
                  {...props}
                  key={itemKey || key}
                  data-key={itemKey || key}
                >
                  {title}
                </DropdownItem>
              )
            )}
          isPlain
          {...(rowData && rowData.actionProps)}
        />
        {children}
      </React.Fragment>
    );
  }
}

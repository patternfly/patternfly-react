import * as React from 'react';
import { Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core/dist/esm/components/Dropdown';
import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import { Divider } from '@patternfly/react-core/dist/esm/components/Divider';
import { MenuToggle } from '@patternfly/react-core/dist/esm/components/MenuToggle';
import { IAction, IExtraData, IRowData } from './TableTypes';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { Tooltip } from '@patternfly/react-core/dist/esm/components/Tooltip';

export interface CustomActionsToggleProps {
  onToggle: (event: React.MouseEvent | React.KeyboardEvent) => void;
  isOpen: boolean;
  isDisabled: boolean;
  toggleRef: React.Ref<any>;
}
export interface ActionsColumnProps extends Omit<React.HTMLProps<HTMLElement>, 'label'> {
  /** Actions to be rendered within or without the action dropdown */
  items: IAction[];
  /** Indicates whether the actions dropdown is disabled */
  isDisabled?: boolean;
  /** Data of the row the action dropdown is located */
  rowData?: IRowData;
  /** Extra data of a row */
  extraData?: IExtraData;
  /** Custom actions toggle for the actions dropdown */
  actionsToggle?: (props: CustomActionsToggleProps) => React.ReactNode;
  /** Additional properties for the actions dropdown popper */
  popperProps?: any;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Ref to forward to the first item in the popup menu */
  firstActionItemRef?: React.Ref<HTMLButtonElement>;
  /** Flag indicating that the dropdown's onOpenChange callback should not be called. */
  isOnOpenChangeDisabled?: boolean;
}

const ActionsColumnBase: React.FunctionComponent<ActionsColumnProps> = ({
  items,
  isDisabled,
  rowData,
  extraData,
  actionsToggle,
  popperProps = {
    position: 'end',
    direction: 'down'
  },
  innerRef,
  firstActionItemRef,
  isOnOpenChangeDisabled = false,
  ...props
}: ActionsColumnProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onActionClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    onClick:
      | ((event: React.MouseEvent, rowIndex: number | undefined, rowData: IRowData, extraData: IExtraData) => void)
      | undefined
  ): void => {
    // Only prevent default if onClick is provided.  This allows href support.
    if (onClick) {
      event.preventDefault();
      // tslint:disable-next-line:no-unused-expression
      onClick(event as React.MouseEvent, extraData && extraData.rowIndex, rowData, extraData);
    }
  };

  return (
    <React.Fragment>
      {items
        .filter((item) => item.isOutsideDropdown)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ title, itemKey, onClick, isOutsideDropdown, ...props }, key) =>
          typeof title === 'string' ? (
            <Button
              onClick={(event: MouseEvent | React.MouseEvent<any, MouseEvent> | React.KeyboardEvent<Element>) =>
                onActionClick(event, onClick)
              }
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
        isOpen={isOpen}
        onOpenChange={!isOnOpenChangeDisabled ? (isOpen: boolean) => setIsOpen(isOpen) : undefined}
        toggle={(toggleRef: any) =>
          actionsToggle ? (
            actionsToggle({ onToggle, isOpen, isDisabled, toggleRef })
          ) : (
            <MenuToggle
              aria-label="Kebab toggle"
              ref={toggleRef}
              onClick={onToggle}
              isExpanded={isOpen}
              isDisabled={isDisabled}
              variant="plain"
            >
              <EllipsisVIcon />
            </MenuToggle>
          )
        }
        {...(rowData && rowData.actionProps)}
        ref={innerRef}
        {...props}
        popperProps={popperProps}
      >
        <DropdownList>
          {items
            .filter((item) => !item.isOutsideDropdown)
            .map(
              ({ title, itemKey, onClick, tooltipProps, isSeparator, shouldCloseOnClick = true, ...props }, index) => {
                if (isSeparator) {
                  return <Divider key={itemKey || index} data-key={itemKey || index} />;
                }
                const item = (
                  <DropdownItem
                    onClick={(event: any) => {
                      onActionClick(event, onClick);
                      shouldCloseOnClick && onToggle();
                    }}
                    {...props}
                    key={itemKey || index}
                    data-key={itemKey || index}
                    ref={index === 0 ? firstActionItemRef : undefined}
                  >
                    {title}
                  </DropdownItem>
                );

                if (tooltipProps?.content) {
                  return (
                    <Tooltip key={itemKey || index} {...tooltipProps}>
                      {item}
                    </Tooltip>
                  );
                } else {
                  return item;
                }
              }
            )}
        </DropdownList>
      </Dropdown>
    </React.Fragment>
  );
};

export const ActionsColumn = React.forwardRef((props: ActionsColumnProps, ref: React.Ref<HTMLElement>) => (
  <ActionsColumnBase {...props} innerRef={ref} />
));
ActionsColumn.displayName = 'ActionsColumn';

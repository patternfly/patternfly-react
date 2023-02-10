import * as React from 'react';
import { Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core/dist/esm/next/components';
import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import { Divider } from '@patternfly/react-core/dist/esm/components/Divider';
import { MenuToggle } from '@patternfly/react-core/dist/esm/components/MenuToggle';
import { IAction, IExtraData, IRowData } from './TableTypes';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export interface CustomActionsToggleProps {
  onToggle: (event: React.MouseEvent) => void;
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
}

const ActionsColumnBase: React.FunctionComponent<ActionsColumnProps> = ({
  items,
  isDisabled,
  rowData,
  extraData,
  actionsToggle,
  popperProps = {
    position: 'right',
    direction: 'down',
    popperMatchesTriggerWidth: false
  },
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
        .filter(item => item.isOutsideDropdown)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ title, itemKey, onClick, isOutsideDropdown, ...props }, key) =>
          typeof title === 'string' ? (
            <Button
              onClick={event => onActionClick(event, onClick)}
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
        onOpenChange={isOpen => setIsOpen(isOpen)}
        toggle={toggleRef =>
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
        {...props}
        popperProps={popperProps}
      >
        <DropdownList>
          {items
            .filter(item => !item.isOutsideDropdown)
            .map(({ title, itemKey, onClick, isSeparator, ...props }, key) =>
              isSeparator ? (
                <Divider key={itemKey || key} data-key={itemKey || key} />
              ) : (
                <DropdownItem
                  onClick={event => {
                    onActionClick(event, onClick);
                    onToggle();
                  }}
                  {...props}
                  key={itemKey || key}
                  data-key={itemKey || key}
                >
                  {title}
                </DropdownItem>
              )
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

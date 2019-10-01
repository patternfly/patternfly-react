import * as React from 'react';
import { InternalDropdownItemProps, InternalDropdownItem } from './InternalDropdownItem';
import { DropdownArrowContext } from './dropdownConstants';

export interface DropdownItemProps extends InternalDropdownItemProps {
  /** Anything which can be rendered as dropdown item */
  children?: React.ReactNode;
  /** Classes applied to root element of dropdown item */
  className?: string;
  /** Class to be applied to list item */
  listItemClassName?: string;
  /** Indicates which component will be used as dropdown item */
  component?: React.ReactNode;
  /** Render dropdown item as disabled option */
  isDisabled?: boolean;
  /** Forces display of the hover state of the element */
  isHovered?: boolean;
  /** Default hyperlink location */
  href?: string;
  /** Tooltip to display when hovered over the item */
  tooltip?: React.ReactNode;
  /** Additional tooltip props forwarded to the Tooltip component */
  tooltipProps?: any;
}

export const DropdownItem: React.FunctionComponent<DropdownItemProps> = ({
  children = null,
  className = '',
  component = 'a',
  isDisabled = false,
  isHovered = false,
  href = '',
  tooltip = null,
  tooltipProps = {},
  listItemClassName,
  onClick,
  ref, // Types of Ref are different for React.FC vs React.Component
  ...props
}: DropdownItemProps) => (
  <DropdownArrowContext.Consumer>
    {context => (
      <InternalDropdownItem
        context={context}
        role="menuitem"
        tabIndex={-1}
        children={children}
        className={className}
        component={component}
        isDisabled={isDisabled}
        isHovered={isHovered}
        href={href}
        tooltip={tooltip}
        tooltipProps={tooltipProps}
        listItemClassName={listItemClassName}
        onClick={onClick}
        {...props}
      />
    )}
  </DropdownArrowContext.Consumer>
);

import React from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownItemProps
} from '@patternfly/react-core/dist/esm/components/Dropdown';
import { MenuToggle, MenuToggleElement } from '@patternfly/react-core/dist/esm/components/MenuToggle';
import { Divider } from '@patternfly/react-core/dist/esm/components/Divider';

export interface DropdownSimpleItem extends Omit<DropdownItemProps, 'content'> {
  /** Content of the dropdown item. If the isDivider prop is true, this prop will be ignored. */
  content?: React.ReactNode;
  /** Unique identifier for the dropdown item, which is used in the dropdown onSelect callback */
  value: string | number;
  /** Callback for when the dropdown item is clicked. */
  onClick?: (event?: any) => void;
  /** URL to redirect to when the dropdown item is clicked. */
  to?: string;
  /** Flag indicating whether the dropdown item should render as a divider. If true, the item will be rendered without
   * the dropdown item wrapper.
   */
  isDivider?: boolean;
}

export interface DropdownSimpleProps {
  /** Initial items of the dropdown. */
  initialItems?: DropdownSimpleItem[];
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
  /** Flag indicating the dropdown should be disabled. */
  isDisabled?: boolean;
  /** Flag indicated whether the dropdown toggle should take up the full width of its parent. */
  isToggleFullWidth?: boolean;
  /** Callback triggered when any dropdown item is clicked. */
  onSelect?: (event?: React.MouseEvent<Element, MouseEvent>, value?: string | number) => void;
  /** Callback triggered when the dropdown toggle opens or closes. */
  onToggle?: (nextIsOpen: boolean) => void;
  /** Flag indicating the dropdown toggle should be focused after a dropdown item is clicked. */
  shouldFocusToggleOnSelect?: boolean;
  /** Adds an accessible name to the dropdown toggle. Required when the dropdown toggle does not
   * have any text content.
   */
  toggleAriaLabel?: string;
  /** Content of the toggle. */
  toggleContent: React.ReactNode;
  /** Variant style of the dropdown toggle. */
  toggleVariant?: 'default' | 'plain' | 'plainText';
}

const DropdownSimpleBase: React.FC<DropdownSimpleProps> = ({
  innerRef,
  initialItems,
  onSelect: onSelectProp,
  onToggle: onToggleProp,
  isDisabled,
  toggleAriaLabel,
  toggleContent,
  isToggleFullWidth,
  toggleVariant = 'default',
  shouldFocusToggleOnSelect,
  ...props
}: DropdownSimpleProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onSelect = (event: React.MouseEvent<Element, MouseEvent>, value: string | number) => {
    onSelectProp && onSelectProp(event, value);
    setIsOpen(false);
  };

  const onToggle = () => {
    onToggleProp && onToggleProp(!isOpen);
    setIsOpen(!isOpen);
  };

  const dropdownToggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle
      ref={toggleRef}
      onClick={onToggle}
      isExpanded={isOpen}
      isDisabled={isDisabled}
      variant={toggleVariant}
      aria-label={toggleAriaLabel}
      isFullWidth={isToggleFullWidth}
    >
      {toggleContent}
    </MenuToggle>
  );

  const dropdownSimpleItems = initialItems?.map((item) => {
    const { content, onClick, to, value, isDivider, ...itemProps } = item;

    return isDivider ? (
      <Divider component="li" key={value} />
    ) : (
      <DropdownItem onClick={onClick} to={to} key={value} value={value} {...itemProps}>
        {content}
      </DropdownItem>
    );
  });

  return (
    <Dropdown
      toggle={dropdownToggle}
      isOpen={isOpen}
      onSelect={onSelect}
      shouldFocusToggleOnSelect={shouldFocusToggleOnSelect}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      ref={innerRef}
      {...props}
    >
      <DropdownList>{dropdownSimpleItems}</DropdownList>
    </Dropdown>
  );
};

export const DropdownSimple = React.forwardRef((props: DropdownSimpleProps, ref: React.Ref<any>) => (
  <DropdownSimpleBase {...props} innerRef={ref} />
));

DropdownSimple.displayName = 'DropdownSimple';

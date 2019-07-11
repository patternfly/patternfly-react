import * as React from 'react';
import { CaretDownIcon } from '@patternfly/react-icons';
import { Toggle } from './Toggle';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { css } from '@patternfly/react-styles';

export interface DropdownToggleProps extends React.HTMLProps<HTMLButtonElement> {
  /** HTML ID of dropdown toggle */
  id?: string; 
  /** Anything which can be rendered as dropdown toggle button */
  children?: React.ReactNode; 
  /** Classes applied to root element of dropdown toggle button */
  className?: string; 
  /** Flag to indicate if menu is opened */
  isOpen?: boolean; 
  /** Callback called when toggle is clicked */
  onToggle?: (isOpen: boolean) => void; 
  /** Element which wraps toggle */
  parentRef?: HTMLElement; 
  /** Forces focus state */
  isFocused?: boolean; 
  /** Forces hover state */
  isHovered?: boolean; 
  /** Forces active state */
  isActive?: boolean; 
  /** Display the toggle with no border or background */
  isPlain?: boolean;
  /** Whether or not the <div> has a disabled state */
  isDisabled?: boolean; 
  /** The icon to display for the toggle. Defaults to CaretDownIcon. Set to null to not show an icon. */
  iconComponent?: React.ReactType | null; 
  /** Elements to display before the toggle button. When included, renders the toggle as a split button. */
  splitButtonItems?: React.ReactNode[]; 
  /** Accessible label for the dropdown toggle button */
  'aria-label'?: string;
  /** Type to put on the button */
  type?: 'button' | 'submit' | 'reset';
}

export const DropdownToggle: React.FunctionComponent<DropdownToggleProps> = ({
  id = '',
  children = null,
  className = '',
  isOpen = false,
  parentRef = null,
  isFocused = false,
  isHovered = false,
  isActive = false,
  isDisabled = false,
  isPlain = false,
  onToggle = (_isOpen: boolean) => undefined as any,
  iconComponent: IconComponent = CaretDownIcon,
  splitButtonItems,
  ref, // Types of Ref are different for React.FC vs React.Component
  ...props
}: DropdownToggleProps) => {
  const toggle = (
    <Toggle id={id}
      className={className}
      isOpen={isOpen}
      parentRef={parentRef}
      isFocused={isFocused}
      isHovered={isHovered}
      isActive={isActive}
      isDisabled={isDisabled}
      isPlain={isPlain}
      onToggle={onToggle}
      {...splitButtonItems && { isSplitButton: true, 'aria-label': props['aria-label'] || 'Select' }}>
      {children && <span className={IconComponent && css(styles.dropdownToggleText)}>{children}</span>}
      {IconComponent && <IconComponent className={css(children && styles.dropdownToggleIcon)} />}
    </Toggle>
  );

  if (splitButtonItems) {
    return (
      <div
        className={css(
          styles.dropdownToggle,
          styles.modifiers.splitButton,
          isDisabled && styles.modifiers.disabled
        )}
      >
        {splitButtonItems}
        {toggle}
      </div>
    );
  }

  return toggle;
};
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
  onToggle?: Function; 
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
  /** The icon to display for the toggle. Defaults to CaretDownIcon. Set to null to not show an icon. */
  iconComponent?: React.ReactType | null; 
  /** Elements to display before the toggle button. When included, renders the toggle as a split button. */
  splitButtonItems?: React.ReactNode[]; 
  /** Accessible label for the dropdown toggle button */
  'aria-label'?: string; 
}

export const DropdownToggle: React.Component<DropdownToggleProps> = ({
  id = '',
  children = null,
  className = '',
  isOpen = false,
  parentRef = null,
  isFocused = false,
  isHovered = false,
  isActive = false,
  isPlain = false,
  onToggle = Function.prototype,
  iconComponent: IconComponent = CaretDownIcon,
  splitButtonItems,
  ...props
}: DropdownToggleProps) => {
  const toggle = (
    <Toggle {...props} {...splitButtonItems && { isSplitButton: true, 'aria-label': props['aria-label'] || 'Select' }}>
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
          props.isDisabled && styles.modifiers.disabled
        )}
      >
        {splitButtonItems}
        {toggle}
      </div>
    );
  }

  return toggle;
};
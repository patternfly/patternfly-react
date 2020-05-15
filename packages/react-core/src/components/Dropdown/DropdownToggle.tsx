import * as React from 'react';
import CaretDownIcon from '@patternfly/react-icons/dist/js/icons/caret-down-icon';
import { Toggle } from './Toggle';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { DropdownContext } from './dropdownConstants';
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
  /** Forces active state */
  isActive?: boolean;
  /** Display the toggle with no border or background */
  isPlain?: boolean;
  /** Whether or not the <div> has a disabled state */
  isDisabled?: boolean;
  /** Whether or not the dropdown toggle button should have primary button styling */
  isPrimary?: boolean;
  /** An image to display within the dropdown toggle, appearing before any component children */
  icon?: React.ReactNode;
  /** The icon to display for the toggle, appearing after any component children. Defaults to CaretDownIcon. Set to null to not show an icon. */
  toggleIndicator?: React.ElementType | null;
  /** Elements to display before the toggle button. When included, renders the toggle as a split button. */
  splitButtonItems?: React.ReactNode[];
  /** Variant of split button toggle */
  splitButtonVariant?: 'action' | 'checkbox';
  /** Accessible label for the dropdown toggle button */
  'aria-label'?: string;
  /** Accessibility property to indicate correct has popup */
  'aria-haspopup'?: boolean | 'listbox' | 'menu' | 'dialog' | 'grid' | 'tree';
  /** Type to put on the button */
  type?: 'button' | 'submit' | 'reset';
  /** Callback called when the Enter key is pressed */
  onEnter?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DropdownToggle: React.FunctionComponent<DropdownToggleProps> = ({
  id = '',
  children = null,
  className = '',
  isOpen = false,
  parentRef = null,
  isDisabled = false,
  isPlain = false,
  isPrimary = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isActive = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onToggle = (_isOpen: boolean) => undefined as any,
  icon = null,
  toggleIndicator: ToggleIndicator = CaretDownIcon,
  splitButtonItems,
  splitButtonVariant = 'checkbox',
  'aria-haspopup': ariaHasPopup,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref, // Types of Ref are different for React.FC vs React.Component
  ...props
}: DropdownToggleProps) => {
  const toggle = (
    <DropdownContext.Consumer>
      {({ toggleTextClass, toggleIndicatorClass, toggleIconClass }) => (
        <Toggle
          {...props}
          id={id}
          className={className}
          isOpen={isOpen}
          parentRef={parentRef}
          isActive={isActive}
          isDisabled={isDisabled}
          isPlain={isPlain}
          isPrimary={isPrimary}
          onToggle={onToggle}
          aria-haspopup={ariaHasPopup}
          {...(splitButtonItems && { isSplitButton: true, 'aria-label': props['aria-label'] || 'Select' })}
        >
          {icon && <span className={css(toggleIconClass)}>{icon}</span>}
          {children && <span className={ToggleIndicator && css(toggleTextClass)}>{children}</span>}
          {ToggleIndicator && (
            <span className={css(toggleIndicatorClass)}>
              <ToggleIndicator />
            </span>
          )}
        </Toggle>
      )}
    </DropdownContext.Consumer>
  );

  if (splitButtonItems) {
    return (
      <div
        className={css(
          styles.dropdownToggle,
          styles.modifiers.splitButton,
          splitButtonVariant === 'action' && styles.modifiers.action,
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

import * as React from 'react';
import { DropdownToggle, DropdownContext } from '../Dropdown';

export interface OptionsMenuToggleProps extends React.HTMLProps<HTMLButtonElement> {
  /** Id of the parent Options menu component */
  parentId?: string;
  /** Callback for when this Options menu is toggled */
  onToggle?: (isOpen: boolean) => void;
  /** Flag to indicate if menu is open */
  isOpen?: boolean;
  /** Flag to indicate if the button is plain */
  isPlain?: boolean;
  /** Forces display of the hover state of the Options menu */
  isFocused?: boolean;
  /** Forces display of the hover state of the Options menu */
  isHovered?: boolean;
  isSplitButton?: boolean;
  /** Forces display of the active state of the Options menu */
  isActive?: boolean;
  /** Disables the options menu toggle */
  isDisabled?: boolean;
  /** hide the toggle caret */
  hideCaret?: boolean;
  /** Provides an accessible name for the button when an icon is used instead of text */
  'aria-label'?: string;
  /** Internal function to implement enter click */
  onEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Internal parent reference */
  parentRef?: HTMLElement;
  /** Content to be rendered in the Options menu toggle button */
  toggleTemplate?: React.ReactNode;
}

export const OptionsMenuToggle: React.FunctionComponent<OptionsMenuToggleProps> = ({
  isPlain = false,
  isHovered = false,
  isActive = false,
  isFocused = false,
  isDisabled = false,
  isOpen = false,
  parentId = '',
  toggleTemplate = <React.Fragment />,
  hideCaret = false,
  isSplitButton = false,
  type,
  'aria-label': ariaLabel = 'Options menu',
  ...props
}: OptionsMenuToggleProps) => {
  return (
    <DropdownContext.Consumer>
      {({ id: contextId }) => (
        <DropdownToggle
          {...((isPlain || hideCaret) && { iconComponent: null })}
          {...props}
          isPlain={isPlain}
          isOpen={isOpen}
          isDisabled={isDisabled}
          isHovered={isHovered}
          isActive={isActive}
          isFocused={isFocused}
          id={parentId ? `${parentId}-toggle` : `${contextId}-toggle`}
          ariaHasPopup="listbox"
          aria-label={ariaLabel}
          aria-expanded={isOpen}
          {...(toggleTemplate ? { children: toggleTemplate } : {})}
        />
      )}
    </DropdownContext.Consumer>
  );
};

import {
  Fragment,
  type FunctionComponent,
  type HTMLProps,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactNode
} from 'react';
import { DropdownToggle, DropdownContext } from '../Dropdown';

export interface OptionsMenuToggleProps extends HTMLProps<HTMLButtonElement> {
  /** Id of the parent options menu component */
  parentId?: string;
  /** Callback for when this options menu is toggled */
  onToggle?: (
    event: MouseEvent | TouchEvent | KeyboardEvent | ReactKeyboardEvent<any> | ReactMouseEvent<HTMLButtonElement>,
    isOpen: boolean
  ) => void;
  /** Flag to indicate if menu is open */
  isOpen?: boolean;
  /** Flag to indicate if the button is plain */
  isPlain?: boolean;
  isSplitButton?: boolean;
  /** Forces display of the active state of the options menu */
  isActive?: boolean;
  /** Disables the options menu toggle */
  isDisabled?: boolean;
  /** hide the toggle caret */
  hideCaret?: boolean;
  /** Provides an accessible name for the button when an icon is used instead of text */
  'aria-label'?: string;
  /** @hide Internal function to implement enter click */
  onEnter?: (event: ReactMouseEvent<HTMLButtonElement>) => void;
  /** @hide Internal parent reference */
  parentRef?: HTMLElement;
  /** Content to be rendered in the options menu toggle button */
  toggleTemplate?: ReactNode;
}

export const OptionsMenuToggle: FunctionComponent<OptionsMenuToggleProps> = ({
  isPlain = false,
  isDisabled = false,
  isOpen = false,
  parentId = '',
  toggleTemplate = <Fragment />,
  hideCaret = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isActive = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isSplitButton = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  'aria-label': ariaLabel = 'Options menu',
  ...props
}: OptionsMenuToggleProps) => (
  <DropdownContext.Consumer>
    {({ id: contextId }) => (
      <DropdownToggle
        {...((isPlain || hideCaret) && { toggleIndicator: null })}
        {...props}
        isPlain={isPlain}
        isOpen={isOpen}
        isDisabled={isDisabled}
        isActive={isActive}
        id={parentId ? `${parentId}-toggle` : `${contextId}-toggle`}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        {...(toggleTemplate ? { children: toggleTemplate } : {})}
      />
    )}
  </DropdownContext.Consumer>
);
OptionsMenuToggle.displayName = 'OptionsMenuToggle';

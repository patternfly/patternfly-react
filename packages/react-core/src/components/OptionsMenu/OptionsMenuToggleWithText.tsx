import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';

export interface OptionsMenuToggleWithTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Id of the parent options menu component */
  parentId?: string;
  /** Content to be rendered inside the options menu toggle as text or another non-interactive element */
  toggleText: React.ReactNode;
  /** classes to be added to the options menu toggle text */
  toggleTextClassName?: string;
  /** Content to be rendered inside the options menu toggle button */
  toggleButtonContents?: React.ReactNode;
  /** Classes to be added to the options menu toggle button */
  toggleButtonContentsClassName?: string;
  /** Callback for when this options menu is toggled */
  onToggle?: (event: boolean) => void;
  /** Inner function to indicate open on Enter */
  onEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Flag to indicate if menu is open */
  isOpen?: boolean;
  /** Flag to indicate if the button is plain */
  isPlain?: boolean;
  /** Forces display of the active state of the options menu button */
  isActive?: boolean;
  /** Disables the options menu toggle */
  isDisabled?: boolean;
  /** Internal parent reference */
  parentRef?: HTMLElement;
  /** Indicates that the element has a popup context menu or sub-level menu */
  'aria-haspopup'?: boolean | 'dialog' | 'menu' | 'listbox' | 'tree' | 'grid';
  /** Provides an accessible name for the button when an icon is used instead of text */
  'aria-label'?: string;
}

export const OptionsMenuToggleWithText: React.FunctionComponent<OptionsMenuToggleWithTextProps> = ({
  parentId = '',
  toggleText,
  toggleTextClassName = '',
  toggleButtonContents,
  toggleButtonContentsClassName = '',
  onToggle = () => null as any,
  isOpen = false,
  isPlain = false,
  isDisabled = false,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  isActive = false,
  'aria-haspopup': ariaHasPopup,
  parentRef,
  onEnter,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  'aria-label': ariaLabel = 'Options menu',
  ...props
}: OptionsMenuToggleWithTextProps) => (
  <div
    className={css(
      styles.optionsMenuToggle,
      styles.modifiers.text,
      isPlain && styles.modifiers.plain,
      isDisabled && styles.modifiers.disabled,
      isActive && styles.modifiers.active
    )}
    {...props}
  >
    <span className={css(styles.optionsMenuToggleText, toggleTextClassName)}>{toggleText}</span>
    <button
      className={css(styles.optionsMenuToggleButton, toggleButtonContentsClassName)}
      id={`${parentId}-toggle`}
      aria-haspopup="listbox"
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      onClick={() => onToggle(!isOpen)}
    >
      <span className={css(styles.optionsMenuToggleButtonIcon)}>{toggleButtonContents}</span>
    </button>
  </div>
);

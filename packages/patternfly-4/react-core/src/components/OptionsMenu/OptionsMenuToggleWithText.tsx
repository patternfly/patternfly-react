import * as React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';

export interface OptionsMenuToggleWithTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Id of the parent Options menu component */
  parentId?: string;
  /** Content to be rendered inside the Options menu toggle as text or another non-interactive element */
  toggleText: React.ReactNode;
  /** classes to be added to the Options menu toggle text */
  toggleTextClassName?: string;
  /** Content to be rendered inside the Options menu toggle button */
  toggleButtonContents: React.ReactNode;
  /** Classes to be added to the Options menu toggle button */
  toggleButtonContentsClassName?: string;
  /** Callback for when this Options menu is toggled */
  onToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Flag to indicate if menu is open */
  isOpen?: boolean;
  /** Flag to indicate if the button is plain */
  isPlain?: boolean;
  /** Forces display of the focused state of the Options menu button */
  isFocused?: boolean;
  /** Forces display of the hover state of the Options menu button */
  isHovered?: boolean;
  /** Forces display of the active state of the Options menu button */
  isActive?: boolean;
  /** Disables the options menu toggle */
  isDisabled?: boolean;
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
  isHovered = false,
  isActive = false,
  isFocused = false,
  isDisabled = false,
  'aria-label': ariaLabel = 'Options menu',
  ...props
}: OptionsMenuToggleWithTextProps) => (

  <div className={css(styles.optionsMenuToggle,
    getModifier(styles, 'text'),
    isPlain && getModifier(styles, 'plain'),
    isHovered && getModifier(styles, 'hover'),
    isActive && getModifier(styles, 'active'),
    isFocused && getModifier(styles, 'focus'),
    isDisabled && getModifier(styles, 'disabled'))}
    {...props}>
    <span className={css(styles.optionsMenuToggleText, toggleTextClassName)}>{toggleText}</span>
    <button className={css(styles.optionsMenuToggleButton, toggleButtonContentsClassName)}
            id={`${parentId}-toggle`}
            aria-haspopup="listbox"
            aria-label={ariaLabel}
            aria-expanded={isOpen}
            onClick={onToggle}>
      {toggleButtonContents}
    </button>
  </div>
);

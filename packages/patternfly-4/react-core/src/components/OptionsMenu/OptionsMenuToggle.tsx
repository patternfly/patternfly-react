import * as React from 'react';
import { CaretDownIcon } from '@patternfly/react-icons';
import styles from '@patternfly/react-styles/css/components/OptionsMenu/options-menu';
import { css, getModifier } from '@patternfly/react-styles';

export interface OptionsMenuToggleProps  extends React.HTMLProps<HTMLButtonElement>{
  /** Id of the parent Options menu component */
  parentId?: string;
  /** Callback for when this Options menu is toggled */
  onToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Flag to indicate if menu is open */
  isOpen?: boolean;
  /** Flag to indicate if the button is plain */
  isPlain?: boolean;
  /** Forces display of the hover state of the Options menu */
  isFocused?: boolean;
  /** Forces display of the hover state of the Options menu */
  isHovered?: boolean;
  /** Forces display of the active state of the Options menu */
  isActive?: boolean;
  /** Disables the options menu toggle */
   isDisabled?: boolean;
  /** hide the toggle caret */
  hideCaret?: boolean;
  /** Provides an accessible name for the button when an icon is used instead of text */
  'aria-label'?: string;
  /** Content to be rendered in the Options menu toggle button */
  toggleTemplate?: React.ReactElement<any>
}

export const OptionsMenuToggle: React.FunctionComponent<OptionsMenuToggleProps> = ({
    parentId = '',
    onToggle = () => null as any,
    isOpen = false,
    isPlain = false,
    isHovered = false,
    isActive = false,
    isFocused = false,
    isDisabled = false,
    toggleTemplate = <React.Fragment/>,
    hideCaret = false,
    'aria-label': ariaLabel = 'Options menu',
}: OptionsMenuToggleProps) => {

  return (
    <button
      className={css(styles.optionsMenuToggle,
        isPlain && getModifier(styles, 'plain'),
        isHovered && getModifier(styles, 'hover'),
        isActive && getModifier(styles, 'active'),
        isFocused && getModifier(styles, 'focus'),
        isDisabled && getModifier(styles, 'disabled')
      )}
      id={`${parentId}-toggle`}
      aria-haspopup="listbox"
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      {toggleTemplate && (!isPlain
        ? <span className={css(styles.optionsMenuToggleText)}>{toggleTemplate}</span>
        : <React.Fragment>{toggleTemplate}</React.Fragment>)}
      {!hideCaret && <CaretDownIcon aria-hidden className={css(styles.optionsMenuToggleIcon)}/>}
    </button>
  );
};

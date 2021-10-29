import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';

export interface TextInputGroupMainProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the text input group main div */
  children?: React.ReactNode;
  /** Additional classes applied to the text input group main container */
  className?: string;
  /** Icon to be shown on the left side of the text input group main container */
  icon?: React.ReactNode;
  /** Callback for when there is a change in the input field*/
  onChange?: () => void;
  /** Accessibility label for the input */
  'aria-label'?: string;
}

export const TextInputGroupMain: React.FunctionComponent<TextInputGroupMainProps> = ({
  children,
  className,
  icon,
  onChange,
  'aria-label': ariaLabel,
  value: inputValue,
  ...props
}: TextInputGroupMainProps) => (
  <div className={css(styles.textInputGroupMain, icon && styles.modifiers.icon, className)} {...props}>
    {children}
    <span className={css(styles.textInputGroupText)}>
      {icon && <span className={css(styles.textInputGroupIcon)}>{icon}</span>}
      <input
        type="text"
        className={css(styles.textInputGroupTextInput)}
        aria-label={ariaLabel}
        onChange={onChange}
        value={inputValue}
      />
    </span>
  </div>
);

TextInputGroupMain.defaultProps = { 'aria-label': 'Type to filter' };
TextInputGroupMain.displayName = 'TextInputGroupMain';

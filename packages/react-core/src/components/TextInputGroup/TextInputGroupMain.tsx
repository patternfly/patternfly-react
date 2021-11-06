import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';
import { TextInputGroupContext } from './TextInputGroup';

export interface TextInputGroupMainProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the text input group main div */
  children?: React.ReactNode;
  /** Additional classes applied to the text input group main container */
  className?: string;
  /** Icon to be shown on the left side of the text input group main container */
  icon?: React.ReactNode;
  /** Type that the input accepts. */
  type?:
    | 'text'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'time'
    | 'url';
  /** Callback for when there is a change in the input field*/
  onChange?: () => void;
  /** Callback for when the input field is focused*/
  onFocus?: () => void;
  /** Callback for when focus is lost on the input field*/
  onBlur?: () => void;
  /** Accessibility label for the input */
  'aria-label'?: string;
}

export const TextInputGroupMain: React.FunctionComponent<TextInputGroupMainProps> = ({
  children,
  className,
  icon,
  type,
  onChange,
  onFocus,
  onBlur,
  'aria-label': ariaLabel,
  value: inputValue,
  ...props
}: TextInputGroupMainProps) => {
  const { isDisabled } = React.useContext(TextInputGroupContext);

  return (
    <div className={css(styles.textInputGroupMain, icon && styles.modifiers.icon, className)} {...props}>
      {children}
      <span className={css(styles.textInputGroupText)}>
        {icon && <span className={css(styles.textInputGroupIcon)}>{icon}</span>}
        <input
          type={type}
          className={css(styles.textInputGroupTextInput)}
          aria-label={ariaLabel}
          disabled={isDisabled}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={inputValue}
        />
      </span>
    </div>
  );
};

TextInputGroupMain.defaultProps = { 'aria-label': 'Type to filter', type: 'text' };
TextInputGroupMain.displayName = 'TextInputGroupMain';

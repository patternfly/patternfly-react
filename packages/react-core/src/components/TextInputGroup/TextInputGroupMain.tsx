import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';
import { TextInputGroupContext } from './TextInputGroup';

export interface TextInputGroupMainProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
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
  /** Suggestion that will show up like a placeholder even with text in the input */
  hint?: string;
  /** Callback for when there is a change in the input field*/
  onChange?: (event: React.FormEvent<HTMLInputElement>, value: string) => void;
  /** Callback for when the input field is focused*/
  onFocus?: (event?: any) => void;
  /** Callback for when focus is lost on the input field*/
  onBlur?: (event?: any) => void;
  /** Accessibility label for the input */
  'aria-label'?: string;
  /** Value for the input */
  value?: string | number;
  /** Placeholder value for the input */
  placeholder?: string;
  /** @hide A reference object to attach to the input box */
  innerRef?: React.RefObject<any>;
  /** Name for the input */
  name?: string;
}

export const TextInputGroupMainBase: React.FunctionComponent<TextInputGroupMainProps> = ({
  children,
  className,
  icon,
  type = 'text',
  hint,
  onChange = (): any => undefined,
  onFocus,
  onBlur,
  'aria-label': ariaLabel = 'Type to filter',
  value: inputValue,
  placeholder: inputPlaceHolder,
  innerRef,
  name,
  ...props
}: TextInputGroupMainProps) => {
  const { isDisabled } = React.useContext(TextInputGroupContext);
  const ref = React.useRef(null);
  const textInputGroupInputInputRef = innerRef || ref;

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event, event.currentTarget.value);
  };

  return (
    <div className={css(styles.textInputGroupMain, icon && styles.modifiers.icon, className)} {...props}>
      {children}
      <span className={css(styles.textInputGroupText)}>
        {hint && (
          <input
            className={css(styles.textInputGroupTextInput, styles.modifiers.hint)}
            type="text"
            disabled
            aria-hidden="true"
            value={hint}
          />
        )}
        {icon && <span className={css(styles.textInputGroupIcon)}>{icon}</span>}
        <input
          ref={textInputGroupInputInputRef}
          type={type}
          className={css(styles.textInputGroupTextInput)}
          aria-label={ariaLabel}
          disabled={isDisabled}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          value={inputValue || ''}
          placeholder={inputPlaceHolder}
          name={name}
        />
      </span>
    </div>
  );
};

export const TextInputGroupMain = React.forwardRef((props: TextInputGroupMainProps, ref: React.Ref<HTMLInputElement>) => (
  <TextInputGroupMainBase innerRef={ref as React.MutableRefObject<any>} {...props} />
));

TextInputGroupMain.displayName = 'TextInputGroupMain';

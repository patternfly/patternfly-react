import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';
import { TextInputGroupContext } from './TextInputGroup';
import { TextInputGroupIcon } from './TextInputGroupIcon';
import { statusIcons, ValidatedOptions } from '../../helpers';

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
  /** The id of the active element. Required if role has a value of "combobox", and focus
   * should remain on the input.
   */
  'aria-activedescendant'?: string;
  /** Determines the accessible role of the input. */
  role?: string;
  /** Flag for whether an associated element controlled by the input is visible. Required if
   * role has a value of "combobox".
   */
  isExpanded?: boolean;
  /** The id of the element(s) controlled by the input. Required if role has a value of "combobox". */
  'aria-controls'?: string;
  /** The id of the input element */
  inputId?: string;
}

const TextInputGroupMainBase: React.FunctionComponent<TextInputGroupMainProps> = ({
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
  'aria-activedescendant': ariaActivedescendant,
  role,
  isExpanded,
  'aria-controls': ariaControls,
  inputId,
  ...props
}: TextInputGroupMainProps) => {
  const { isDisabled, validated } = React.useContext(TextInputGroupContext);
  const ref = React.useRef(null);
  const textInputGroupInputInputRef = innerRef || ref;
  const StatusIcon = statusIcons[validated === ValidatedOptions.error ? 'danger' : validated];

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
            id={inputId}
          />
        )}
        {icon && <TextInputGroupIcon>{icon}</TextInputGroupIcon>}
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
          aria-activedescendant={ariaActivedescendant}
          id={inputId}
          {...(role && { role })}
          {...(isExpanded !== undefined && { 'aria-expanded': isExpanded })}
          {...(ariaControls && { 'aria-controls': ariaControls })}
        />
        {validated && <TextInputGroupIcon isStatus>{<StatusIcon aria-hidden="true" />}</TextInputGroupIcon>}
      </span>
    </div>
  );
};

export const TextInputGroupMain = React.forwardRef(
  (props: TextInputGroupMainProps, ref: React.Ref<HTMLInputElement>) => (
    <TextInputGroupMainBase innerRef={ref as React.MutableRefObject<any>} {...props} />
  )
);

TextInputGroupMain.displayName = 'TextInputGroupMain';

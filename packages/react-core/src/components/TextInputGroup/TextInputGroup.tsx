import { createContext, useRef } from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';
import { ValidatedOptions } from '../../helpers/constants';

export interface TextInputGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the text input group */
  children?: React.ReactNode;
  /** Additional classes applied to the text input group container */
  className?: string;
  /** Adds disabled styling and a disabled context value which text input group main hooks into for the input itself */
  isDisabled?: boolean;
  /** Flag to indicate the toggle has no border or background */
  isPlain?: boolean;
  /** Value to indicate if the text input group is modified to show that validation state.
   * If set to success, warning, or error, the group will show that state.
   * If set to default, no validation styling is applied (use to clear a prior validation state).
   */
  validated?: 'success' | 'warning' | 'error' | 'default' | ValidatedOptions;
  /** @hide A reference object to attach to the input box */
  innerRef?: React.RefObject<any>;
}

export const TextInputGroupContext = createContext<Partial<TextInputGroupProps>>({
  isDisabled: false
});

export const TextInputGroup: React.FunctionComponent<TextInputGroupProps> = ({
  children,
  className,
  isDisabled,
  isPlain,
  validated,
  innerRef,
  ...props
}: TextInputGroupProps) => {
  const ref = useRef(null);
  const textInputGroupRef = innerRef || ref;
  const hasValidatedModifier = ['success', 'error', 'warning'].includes(validated);

  return (
    <TextInputGroupContext.Provider value={{ isDisabled, validated }}>
      <div
        ref={textInputGroupRef}
        className={css(
          styles.textInputGroup,
          isDisabled && styles.modifiers.disabled,
          isPlain && styles.modifiers.plain,
          hasValidatedModifier && styles.modifiers[validated as 'success' | 'warning' | 'error'],
          className
        )}
        {...props}
      >
        {children}
      </div>
    </TextInputGroupContext.Provider>
  );
};

TextInputGroup.displayName = 'TextInputGroup';

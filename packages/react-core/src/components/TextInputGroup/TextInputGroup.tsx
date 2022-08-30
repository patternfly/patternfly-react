import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';

export interface TextInputGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the text input group */
  children?: React.ReactNode;
  /** Additional classes applied to the text input group container */
  className?: string;
  /** Adds disabled styling and a disabled context value which text input group main hooks into for the input itself */
  isDisabled?: boolean;
  /** Flag to indicate the toggle has no border or background */
  isPlain?: boolean;
  /** @hide A reference object to attach to the input box */
  innerRef?: React.RefObject<any>;
}

export const TextInputGroupContext = React.createContext<Partial<TextInputGroupProps>>({
  isDisabled: false
});

export const TextInputGroup: React.FunctionComponent<TextInputGroupProps> = ({
  children,
  className,
  isDisabled,
  isPlain,
  innerRef,
  ...props
}: TextInputGroupProps) => {
  const ref = React.useRef(null);
  const textInputGroupRef = innerRef || ref;

  return (
    <TextInputGroupContext.Provider value={{ isDisabled }}>
      <div
        ref={textInputGroupRef}
        className={css(
          styles.textInputGroup,
          isDisabled && styles.modifiers.disabled,
          isPlain && styles.modifiers.plain,
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

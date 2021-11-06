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
}

export const TextInputGroupContext = React.createContext<Partial<TextInputGroupProps>>({
  isDisabled: false
});

export const TextInputGroup: React.FunctionComponent<TextInputGroupProps> = ({
  children,
  className,
  isDisabled,
  ...props
}: TextInputGroupProps) => (
  <TextInputGroupContext.Provider value={{ isDisabled }}>
    <div className={css(styles.textInputGroup, isDisabled && styles.modifiers.disabled, className)} {...props}>
      {children}
    </div>
  </TextInputGroupContext.Provider>
);

TextInputGroup.displayName = 'TextInputGroup';

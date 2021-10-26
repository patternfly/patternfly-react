import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';

export interface TextInputGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the text input group */
  children?: React.ReactNode;
  /** Additional classes applied to the text input group container */
  className?: string;
}

export const TextInputGroup: React.FunctionComponent<TextInputGroupProps> = ({
  children,
  className,
  ...props
}: TextInputGroupProps) => (
  <div className={css(styles.textInputGroup, className)} {...props}>
    {children}
  </div>
);

TextInputGroup.displayName = 'TextInputGroup';

import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';

export interface TextInputGroupUtilitiesProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the text input group utilities div */
  children?: ReactNode;
  /** Additional classes applied to the text input group utilities container */
  className?: string;
}

export const TextInputGroupUtilities: FunctionComponent<TextInputGroupUtilitiesProps> = ({
  children,
  className,
  ...props
}: TextInputGroupUtilitiesProps) => (
  <div className={css(styles.textInputGroupUtilities, className)} {...props}>
    {children}
  </div>
);

TextInputGroupUtilities.displayName = 'TextInputGroupUtilities';

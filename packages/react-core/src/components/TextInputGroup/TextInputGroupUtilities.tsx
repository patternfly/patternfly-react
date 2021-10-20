import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import { css } from '@patternfly/react-styles';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

export interface TextInputGroupUtilitiesProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the text input group utilities div */
  children?: React.ReactNode;
  /** Additional classes applied to the text input group utilities container */
  className?: string;
  /** Callback for the built in clear button */
  clearSelection?: () => void;
  /** Accessibility label for the clear button */
  'aria-label'?: string;
}

export const TextInputGroupUtilities: React.FunctionComponent<TextInputGroupUtilitiesProps> = ({
  children,
  className,
  clearSelection,
  'aria-label': ariaLabel,
  ...props
}: TextInputGroupUtilitiesProps) => (
  <div className={css(styles.textInputGroupUtilities, className)} {...props}>
    {children}
    {clearSelection && (
      <button className={css(styles.button)} type="button" aria-label={ariaLabel} onClick={clearSelection}>
        <TimesIcon />
      </button>
    )}
  </div>
);

TextInputGroupUtilities.defaultProps = { 'aria-label': 'Clear input' };
TextInputGroupUtilities.displayName = 'TextInputGroupUtilities';

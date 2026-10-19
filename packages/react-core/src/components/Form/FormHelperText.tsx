import { css } from '@rh-felt/react-styles';
import styles from '@rh-felt/react-styles/css/components/Form/form';

export interface FormHelperTextProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the helper text wrapper */
  children?: React.ReactNode;
  /** Additional classes added to the helper text wrapper  */
  className?: string;
}

export const FormHelperText: React.FunctionComponent<FormHelperTextProps> = ({
  children = null,
  className = '',
  ...props
}: FormHelperTextProps) => (
  <div className={css(styles.formHelperText, className)} {...props}>
    {children}
  </div>
);
FormHelperText.displayName = 'FormHelperText';

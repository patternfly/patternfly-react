import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { css } from '@patternfly/react-styles';
import RhUiCheckCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';
import RhUiErrorFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-error-fill-icon';
import RhUiWarningFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-warning-fill-icon';

export const statusIcons = {
  success: RhUiCheckCircleFillIcon,
  error: RhUiErrorFillIcon,
  warning: RhUiWarningFillIcon
};

export interface FormControlIconProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional class names added to the text input icon wrapper. */
  className?: string;
  /** A custom icon to render instead of a status icon. */
  customIcon?: React.ReactNode;
  /** The status icon to render. */
  status?: 'success' | 'error' | 'warning';
}

export const FormControlIcon = ({ status, customIcon, className, ...props }: FormControlIconProps) => {
  const StatusIcon = status && statusIcons[status];

  return (
    <span className={css(styles.formControlIcon, status && styles.modifiers.status, className)} {...props}>
      {customIcon || <StatusIcon />}
    </span>
  );
};

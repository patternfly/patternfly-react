import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import RhUiCheckCircleFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-check-circle-fill-icon';
import RhUiErrorFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-error-fill-icon';
import RhUiWarningFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-warning-fill-icon';
import RhUiInformationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-information-fill-icon';
import RhUiNotificationFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-notification-fill-icon';

export const variantIcons = {
  success: RhUiCheckCircleFillIcon,
  danger: RhUiErrorFillIcon,
  warning: RhUiWarningFillIcon,
  info: RhUiInformationFillIcon,
  custom: RhUiNotificationFillIcon
};

export interface AlertIconProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional class names added to the alert icon. */
  className?: string;
  /** A custom icon. If not set the icon is set according to the variant. */
  customIcon?: React.ReactNode;
  /** Variant of the alert icon. */
  variant: 'success' | 'danger' | 'warning' | 'info' | 'custom';
}

export const AlertIcon = ({ variant, customIcon, className = '', ...props }: AlertIconProps) => {
  const Icon = variantIcons[variant];
  return Icon ? (
    <div {...props} className={css(styles.alertIcon, className)}>
      {customIcon || <Icon />}
    </div>
  ) : null;
};

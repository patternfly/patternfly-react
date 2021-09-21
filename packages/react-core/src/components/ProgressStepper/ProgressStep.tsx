import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/ProgressStepper/progress-stepper';
import { css } from '@patternfly/react-styles';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ResourcesFullIcon from '@patternfly/react-icons/dist/esm/icons/resources-full-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';

export interface ProgressStepProps
  extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  /** Content rendered inside the progress step */
  children?: React.ReactNode;
  /** Additional classes applied to the progress step container. */
  className?: string;
  /** Variant of the progress step. Each variant has a default icon. */
  variant?: 'default' | 'success' | 'info' | 'pending' | 'warning' | 'danger';
  /** Flag indicating the progress step is the current step. */
  isCurrent?: boolean;
  /** Custom icon of a progress step. Will override default icons provided by the variant. */
  icon?: React.ReactNode;
  /** Description text of a progress step. */
  description?: string;
}

const variantIcons = {
  default: undefined as any,
  pending: undefined as any,
  success: <CheckCircleIcon />,
  info: <ResourcesFullIcon />,
  warning: <ExclamationTriangleIcon />,
  danger: <ExclamationCircleIcon />
};

const variantStyle = {
  default: '',
  info: styles.modifiers.info,
  success: styles.modifiers.success,
  pending: styles.modifiers.pending,
  warning: styles.modifiers.warning,
  danger: styles.modifiers.danger
};

export const ProgressStep: React.FunctionComponent<ProgressStepProps> = ({
  children,
  className,
  variant,
  isCurrent,
  description,
  icon,
  ...props
}: ProgressStepProps) => {
  const _icon = icon !== undefined ? icon : variantIcons[variant];

  return (
    <li
      className={css(
        styles.progressStepperStep,
        variantStyle[variant],
        isCurrent && styles.modifiers.current,
        className
      )}
      {...props}
    >
      <div className={css(styles.progressStepperStepConnector)}>
        <span className={css(styles.progressStepperStepIcon)}>{_icon && _icon}</span>
      </div>
      <div className={css(styles.progressStepperStepMain)}>
        <div className={css(styles.progressStepperStepTitle)}>{children}</div>
        {description && <div className={css(styles.progressStepperStepDescription)}>{description}</div>}
      </div>
    </li>
  );
};
ProgressStep.displayName = 'ProgressStep';

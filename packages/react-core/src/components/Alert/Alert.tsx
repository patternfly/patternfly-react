import * as React from 'react';
import { useState } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { AlertIcon } from './AlertIcon';
import { capitalize, getOUIAProps, OUIAProps } from '../../helpers';
import { AlertContext } from './AlertContext';

export enum AlertVariant {
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  default = 'default'
}

export interface AlertProps extends Omit<React.HTMLProps<HTMLDivElement>, 'action' | 'title'>, OUIAProps {
  /** Adds Alert variant styles  */
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'default';
  /** Flag to indicate if the Alert is inline */
  isInline?: boolean;
  /** Title of the Alert  */
  title: React.ReactNode;
  /** Close button; use the AlertActionCloseButton component  */
  actionClose?: React.ReactNode;
  /** Action links; use a single AlertActionLink component or multiple wrapped in an array or React.Fragment */
  actionLinks?: React.ReactNode;
  /** Content rendered inside the Alert */
  children?: React.ReactNode;
  /** Additional classes added to the Alert  */
  className?: string;
  /** Adds accessible text to the Alert */
  'aria-label'?: string;
  /** Variant label text for screen readers */
  variantLabel?: string;
  /** Flag to indicate if the Alert is in a live region */
  isLiveRegion?: boolean;
  /** If set to true, the time out is 8000 milliseconds.  If a number is provided, alert will be dismissed after that amount of time in milliseconds. */
  timeout?: number | boolean;
}

export const Alert: React.FunctionComponent<AlertProps> = ({
  variant = AlertVariant.default,
  isInline = false,
  isLiveRegion = false,
  variantLabel = `${capitalize(variant)} alert:`,
  'aria-label': ariaLabel = `${capitalize(variant)} Alert`,
  actionClose,
  actionLinks,
  title,
  children = '',
  className = '',
  ouiaId,
  ouiaSafe = true,
  timeout = false,
  ...props
}: AlertProps) => {
  const getHeadingContent = (
    <React.Fragment>
      <span className={css(accessibleStyles.screenReader)}>{variantLabel}</span>
      {title}
    </React.Fragment>
  );

  const [disableAlert, setDisableAlert] = useState(false);

  const customClassName = css(
    styles.alert,
    isInline && styles.modifiers.inline,
    variant !== AlertVariant.default && styles.modifiers[variant as 'success' | 'danger' | 'warning' | 'info'],
    className
  );

  if (disableAlert === false && timeout && timeout !== 0) {
    setTimeout(
      () => {
        setDisableAlert(true);
      },
      timeout === true ? 8000 : timeout
    );
  }

  if (disableAlert === false) {
    return (
      <div
        {...props}
        className={customClassName}
        aria-label={ariaLabel}
        {...getOUIAProps(Alert.displayName, ouiaId, ouiaSafe)}
        {...(isLiveRegion && {
          'aria-live': 'polite',
          'aria-atomic': 'false'
        })}
      >
        <AlertIcon variant={variant} />
        <h4 className={css(styles.alertTitle)}>{getHeadingContent}</h4>
        {actionClose && (
          <AlertContext.Provider value={{ title, variantLabel }}>
            <div className={css(styles.alertAction)}>{actionClose}</div>
          </AlertContext.Provider>
        )}
        {children && <div className={css(styles.alertDescription)}>{children}</div>}
        {actionLinks && <div className={css(styles.alertActionGroup)}>{actionLinks}</div>}
      </div>
    );
  } else {
    return null;
  }
};
Alert.displayName = 'Alert';

import * as React from 'react';
import { useState } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { AlertIcon } from './AlertIcon';
import { capitalize, getOUIAProps, OUIAProps, useOUIAId } from '../../helpers';
import { AlertContext } from './AlertContext';
import maxLines from '@patternfly/react-tokens/dist/js/c_alert__title_max_lines';

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
  /** Truncate title to number of lines */
  truncateTitle?: number;
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
  truncateTitle = 0,
  ...props
}: AlertProps) => {
  // const [ouiaStateId] = React.useState(React.useCallback(() => getDefaultOUIAId(Alert.displayName, variant), []));
  const getHeadingContent = (
    <React.Fragment>
      <span className={css(accessibleStyles.screenReader)}>{variantLabel}</span>
      {title}
    </React.Fragment>
  );

  const [disableAlert, setDisableAlert] = useState(false);
  const titleRef = React.useRef(null);
  React.useEffect(() => {
    if (!titleRef.current || !truncateTitle) {
      return;
    }
    titleRef.current.style.setProperty(maxLines.name, truncateTitle.toString());
  }, [titleRef, truncateTitle]);
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
        {...getOUIAProps(Alert.displayName, useOUIAId(ouiaId, Alert.displayName, variant), ouiaSafe)}
        {...(isLiveRegion && {
          'aria-live': 'polite',
          'aria-atomic': 'false'
        })}
      >
        <AlertIcon variant={variant} />
        <h4 ref={titleRef} className={css(styles.alertTitle, truncateTitle && styles.modifiers.truncate)}>
          {getHeadingContent}
        </h4>
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

import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { AlertIcon } from './AlertIcon';
import { capitalize, getOUIAProps, OUIAProps } from '../../helpers';
import { Omit } from '../../helpers/typeUtils';

export enum AlertVariant {
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  default = 'default'
}

export interface AlertProps extends Omit<React.HTMLProps<HTMLDivElement>, 'action' | 'title'> {
  /** Adds Alert variant styles  */
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'default';
  /** Flag to indicate if the Alert is inline */
  isInline?: boolean;
  /** Title of the Alert  */
  title: React.ReactNode;
  /** Action button to put in the Alert. Should be <AlertActionLink> or <AlertActionCloseButton> */
  action?: React.ReactNode;
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
}

export const Alert: React.FunctionComponent<AlertProps & OUIAProps> = ({
  variant = AlertVariant.default,
  isInline = false,
  isLiveRegion = false,
  variantLabel = `${capitalize(variant)} alert:`,
  'aria-label': ariaLabel = `${capitalize(variant)} Alert`,
  action = null,
  title,
  children = '',
  className = '',
  ouiaId,
  ...props
}: AlertProps & OUIAProps) => {
  const readerTitle = (
    <React.Fragment>
      <span className={css(accessibleStyles.screenReader)}>{variantLabel}</span>
      {title}
    </React.Fragment>
  );

  const customClassName = css(
    styles.alert,
    isInline && styles.modifiers.inline,
    variant !== AlertVariant.default && styles.modifiers[variant as 'success' | 'danger' | 'warning' | 'info'],
    className
  );

  return (
    <div
      {...props}
      className={customClassName}
      aria-label={ariaLabel}
      {...getOUIAProps('Alert', ouiaId)}
      {...(isLiveRegion && {
        'aria-live': 'polite',
        'aria-atomic': 'false'
      })}
    >
      <AlertIcon variant={variant} />
      <h4 className={css(styles.alertTitle)}>{readerTitle}</h4>
      {children && <div className={css(styles.alertDescription)}>{children}</div>}
      {action && (
        <div className={css(styles.alertAction)}>{React.cloneElement(action as any, { title, variantLabel })}</div>
      )}
    </div>
  );
};

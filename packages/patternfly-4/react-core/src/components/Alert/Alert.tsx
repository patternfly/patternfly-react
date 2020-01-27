import * as React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { AlertIcon } from './AlertIcon';
import { capitalize } from '../../helpers/util';
import { Omit } from '../../helpers/typeUtils';
import { InjectedOuiaProps, withOuiaContext } from '../withOuia';

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

const Alert: React.FunctionComponent<AlertProps & InjectedOuiaProps> = ({
  variant = AlertVariant.info,
  isInline = false,
  isLiveRegion = false,
  variantLabel = `${capitalize(variant)} alert:`,
  'aria-label': ariaLabel = `${capitalize(variant)} Alert`,
  action = null,
  title,
  children = '',
  className = '',
  ouiaContext = null,
  ouiaId = null,
  ...props
}: AlertProps & InjectedOuiaProps) => {
  const readerTitle = (
    <React.Fragment>
      <span className={css(accessibleStyles.screenReader)}>{variantLabel}</span>
      {title}
    </React.Fragment>
  );

  const customClassName = css(
    styles.alert,
    isInline && styles.modifiers.inline,
    variant !== AlertVariant.default && getModifier(styles, variant, styles.modifiers.info),
    className
  );

  return (
    <div
      {...props}
      className={customClassName}
      aria-label={ariaLabel}
      {...(ouiaContext.isOuia && {
        'data-ouia-component-type': 'Alert',
        'data-ouia-component-id': ouiaId || ouiaContext.ouiaId
      })}
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

const AlertWithOuiaContext = withOuiaContext(Alert);
export { AlertWithOuiaContext as Alert };

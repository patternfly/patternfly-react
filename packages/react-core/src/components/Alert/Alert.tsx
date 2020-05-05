import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { AlertIcon } from './AlertIcon';
import { capitalize, getOUIAProps, OUIAProps } from '../../helpers';
import { AlertContext } from './AlertContext';
import { AlertActionCloseButton, AlertActionCloseButtonProps } from './AlertActionCloseButton';
import { AlertActionLink, AlertActionLinkProps } from './AlertActionLink';

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
  /** Close button; either use an object like { onClose: () => {} } or use the AlertActionCloseButton component  */
  actionClose?: AlertActionCloseButtonProps;
  /** Action links; either use an object like { children: 'Action', onClick: () => {} } or use the AlertActionCloseButton component */
  actionLinks?: AlertActionLinkProps[];
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
  actionClose,
  actionLinks,
  title,
  children = '',
  className = '',
  ouiaId,
  ...props
}: AlertProps & OUIAProps) => {
  const getHeadingContent = (
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
      <h4 className={css(styles.alertTitle)}>{getHeadingContent}</h4>
      {actionClose && (
        <AlertContext.Provider value={{ title, variantLabel }}>
          <div className={css(styles.alertAction)}>
            {React.isValidElement(actionClose) ? actionClose : <AlertActionCloseButton {...actionClose} />}
          </div>
        </AlertContext.Provider>
      )}
      {children && <div className={css(styles.alertDescription)}>{children}</div>}
      {actionLinks && (
        <div className={css(styles.alertActionGroup)}>
          {actionLinks.map((item: AlertActionLinkProps, index: number) => {
            if (React.isValidElement(item)) {
              return React.cloneElement(item, {
                key: item.key || index
              });
            } else {
              return <AlertActionLink key={index} {...item} />;
            }
          })}
        </div>
      )}
    </div>
  );
};

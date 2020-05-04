import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { AlertIcon } from './AlertIcon';
import { capitalize, getOUIAProps, OUIAProps } from '../../helpers';
import { AlertContext } from './AlertContext';
import { AlertActionCloseButton } from './AlertActionCloseButton';
import { AlertActionLink } from './AlertActionLink';
import { ButtonProps } from '../Button';

export enum AlertVariant {
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  default = 'default'
}

export interface ActionItem extends ButtonProps {
  text: string;
}

export interface AlertProps extends Omit<React.HTMLProps<HTMLDivElement>, 'action' | 'title'> {
  /** Adds Alert variant styles  */
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'default';
  /** Flag to indicate if the Alert is inline */
  isInline?: boolean;
  /** Title of the Alert  */
  title: React.ReactNode;
  /** Adds a close button to the alert and defines the callback for when it is clicked  */
  onClose?: () => void;
  /** Action item links */
  actionItems?: ActionItem[];
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
  onClose,
  actionItems,
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
      {onClose && (
        <AlertContext.Provider value={{ title, variantLabel }}>
          <div className={css(styles.alertAction)}>
            <AlertActionCloseButton onClose={onClose} />
          </div>
        </AlertContext.Provider>
      )}
      {children && <div className={css(styles.alertDescription)}>{children}</div>}
      {actionItems && (
        <div className={css(styles.alertActionGroup)}>
          {actionItems.map((item: ActionItem, index: number) => {
            const { text, ...rest } = item;
            return (
              <AlertActionLink key={index} {...rest}>
                {text}
              </AlertActionLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

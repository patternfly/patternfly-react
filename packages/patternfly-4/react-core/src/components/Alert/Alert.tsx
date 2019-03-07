import React, { HTMLProps, ReactNode, ReactElement } from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Alert/alert.css';
import accessibleStyles from '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import { capitalize } from '../../helpers/util';
import { AlertIcon, AlertVariant } from './AlertIcon';
import { Omit } from '../../typeUtils';

export interface AlertProps extends Omit<HTMLProps<HTMLDivElement>, 'action'> {
  /** Adds Alert variant styles  */
  variant: AlertVariant;
  /** Title of the Alert  */
  title: string;
  /** Action button to put in the Alert.  Should be <AlertActionLink> or <AlertActionCloseButton>  */
  action?: ReactElement<any>;
  /** content rendered inside the Alert  */
  children?: ReactNode;
  /** additional classes added to the Alert  */
  className?: string;
  /** Variant label text for screen readers  */
  variantLabel?: string;
};

export const defaultAlertProps = {
  'aria-label': undefined,
  action: null,
  children: '',
  className: '',
  variantLabel: null
};

const getDefaultAriaLabel = variant => `${capitalize(variant)} Alert`;

export const Alert: React.FunctionComponent<AlertProps> = ({
  variant,
  variantLabel,
  'aria-label': ariaLabel = getDefaultAriaLabel(variant),
  action,
  title,
  children,
  className,
  ...props
}) => {
  variantLabel = variantLabel || capitalize(variant);
  const readerTitle = (
    <React.Fragment>
      <span className={css(accessibleStyles.screenReader)}>{`${variantLabel} alert:`}</span>
      {title}
    </React.Fragment>
  );

  const customClassName = css(styles.alert, getModifier(styles, variant, styles.modifiers.info) as string, className);

  return (
    <div {...props} className={customClassName} aria-label={ariaLabel}>
      <AlertIcon variant={variant} />
      <h4 className={css(styles.alertTitle)}>{readerTitle}</h4>
      {children && (
        <div className={css(styles.alertDescription)}>
          <p>{children}</p>
        </div>
      )}
      {action && (
        <div className={css(styles.alertAction, className)}>{React.cloneElement(action, { title, variantLabel })}</div>
      )}
    </div>
  );
};

Alert.defaultProps = defaultAlertProps;

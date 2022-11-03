import * as React from 'react';
import { Button, ButtonVariant, ButtonProps } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import { AlertContext } from './AlertContext';

/** Renders a close button for a dismissable alert when this sub-component is passed into
 * the alert's actionClose property.
 */

export interface AlertActionCloseButtonProps extends ButtonProps {
  /** Accessible label for the close button */
  'aria-label'?: string;
  /** Additional classes added to the alert action close button. */
  className?: string;
  /** A callback for when the close button is clicked. */
  onClose?: () => void;
  /** Variant Label for the close button. */
  variantLabel?: string;
}

export const AlertActionCloseButton: React.FunctionComponent<AlertActionCloseButtonProps> = ({
  className,
  onClose = () => undefined as any,
  'aria-label': ariaLabel = '',
  variantLabel,
  ...props
}: AlertActionCloseButtonProps) => (
  <AlertContext.Consumer>
    {({ title, variantLabel: alertVariantLabel }) => (
      <Button
        variant={ButtonVariant.plain}
        onClick={onClose}
        aria-label={ariaLabel === '' ? `Close ${variantLabel || alertVariantLabel} alert: ${title}` : ariaLabel}
        className={className}
        {...props}
      >
        <TimesIcon />
      </Button>
    )}
  </AlertContext.Consumer>
);
AlertActionCloseButton.displayName = 'AlertActionCloseButton';

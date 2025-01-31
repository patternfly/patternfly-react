import { Button, ButtonVariant, ButtonProps } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import { AlertContext } from './AlertContext';
import { AlertGroupContext } from './AlertGroupContext';
import alertGroupStyles from '@patternfly/react-styles/css/components/Alert/alert-group';
import fadeShort from '@patternfly/react-tokens/dist/esm/t_global_motion_duration_fade_short';

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
}: AlertActionCloseButtonProps) => {
  const [alertIsDismissed, setAlertIsDismissed] = React.useState(false);
  const closeButtonRef = React.useRef(null);
  const { hasAnimations } = React.useContext(AlertGroupContext);

  React.useEffect(() => {
    if (alertIsDismissed && hasAnimations) {
      closeButtonRef.current
        ?.closest(`.${alertGroupStyles.alertGroupItem}`)
        ?.classList.add(alertGroupStyles.modifiers.offstageRight);
    }
  }, [alertIsDismissed]);

  const handleOnClose = () => {
    if (hasAnimations) {
      setAlertIsDismissed(true);
      setTimeout(() => onClose(), parseInt(fadeShort.value));
    } else {
      onClose();
    }
  };

  return (
    <AlertContext.Consumer>
      {({ title, variantLabel: alertVariantLabel }) => (
        <Button
          ref={closeButtonRef}
          variant={ButtonVariant.plain}
          onClick={handleOnClose}
          aria-label={ariaLabel === '' ? `Close ${variantLabel || alertVariantLabel} alert: ${title}` : ariaLabel}
          className={className}
          icon={<TimesIcon />}
          {...props}
        />
      )}
    </AlertContext.Consumer>
  );
};
AlertActionCloseButton.displayName = 'AlertActionCloseButton';

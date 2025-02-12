import { Button, ButtonVariant, ButtonProps } from '../Button';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import { AlertContext } from './AlertContext';
import { AlertGroupContext } from './AlertGroupContext';
import alertGroupStyles from '@patternfly/react-styles/css/components/Alert/alert-group';

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
  const [shouldDismissOnTransition, setShouldDismissOnTransition] = React.useState(false);
  const closeButtonRef = React.useRef(null);
  const { hasAnimations } = React.useContext(AlertGroupContext);
  const { offstageRight } = alertGroupStyles.modifiers;

  const getParentAlertGroupItem = () => closeButtonRef.current?.closest(`.${alertGroupStyles.alertGroupItem}`);
  const handleOnClick = () => {
    if (hasAnimations) {
      getParentAlertGroupItem()?.classList.add(offstageRight);
      setShouldDismissOnTransition(true);
    } else {
      onClose();
    }
  };

  React.useEffect(() => {
    const handleOnTransitionEnd = (event: TransitionEvent) => {
      const prefersReducedMotion = !window.matchMedia('(prefers-reduced-motion: no-preference)')?.matches;
      const parentAlertGroupItem = getParentAlertGroupItem();
      if (
        shouldDismissOnTransition &&
        parentAlertGroupItem?.contains(event.target as Node) &&
        // If a user has no motion preference, we want to target the grid template rows transition
        // so that the onClose is called after the "slide up" animation of other alerts finishes. Otherwise
        // we want to target the opacity transition since no other transition with be firing.
        ((prefersReducedMotion && event.propertyName === 'opacity') ||
          (!prefersReducedMotion && event.propertyName === 'grid-template-rows')) &&
        (event.target as HTMLElement).className.includes(offstageRight)
      ) {
        onClose();
      }
    };

    if (hasAnimations) {
      window.addEventListener('transitionend', handleOnTransitionEnd);
    }

    return () => {
      window.removeEventListener('transitionend', handleOnTransitionEnd);
    };
  }, [hasAnimations, shouldDismissOnTransition]);

  return (
    <AlertContext.Consumer>
      {({ title, variantLabel: alertVariantLabel }) => (
        <Button
          ref={closeButtonRef}
          variant={ButtonVariant.plain}
          onClick={handleOnClick}
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

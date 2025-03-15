import { Children, useState } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert-group';
import { AlertGroupProps } from './AlertGroup';
import { AlertProps } from '../Alert';
import { AlertGroupContext } from './AlertGroupContext';

export const AlertGroupInline: React.FunctionComponent<AlertGroupProps> = ({
  className,
  children,
  hasAnimations,
  isToast,
  isLiveRegion,
  onOverflowClick,
  overflowMessage,
  ...props
}: AlertGroupProps) => {
  const [handleTransitionEnd, setHandleTransitionEnd] = useState(() => () => {});
  const updateTransitionEnd = (onTransitionEnd: () => void) => {
    setHandleTransitionEnd(() => onTransitionEnd);
  };

  const onTransitionEnd = (event: React.TransitionEvent<HTMLLIElement>) => {
    if (!hasAnimations) {
      return;
    }

    const prefersReducedMotion = !window.matchMedia('(prefers-reduced-motion: no-preference)')?.matches;
    if (
      // If a user has no motion preference, we want to target the grid template rows transition
      // so that the onClose is called after the "slide up" animation of other alerts finishes.
      // If they have motion preference, we don't need to check for a specific transition since only opacity should fire.
      (prefersReducedMotion || (!prefersReducedMotion && event.propertyName === 'grid-template-rows')) &&
      (event.target as HTMLElement).className.includes(styles.modifiers.offstageRight)
    ) {
      handleTransitionEnd();
    }
  };

  return (
    <AlertGroupContext.Provider value={{ hasAnimations, updateTransitionEnd }}>
      <ul
        role="list"
        aria-live={isLiveRegion ? 'polite' : null}
        aria-atomic={isLiveRegion ? false : null}
        className={css(styles.alertGroup, className, isToast ? styles.modifiers.toast : '')}
        {...props}
      >
        {Children.toArray(children).map((alert, index) => (
          <li
            onTransitionEnd={onTransitionEnd}
            className={css(styles.alertGroupItem, hasAnimations && styles.modifiers.offstageTop)}
            key={
              (alert as React.ReactElement<AlertProps>).props?.id ||
              `alertGroupItem-${(alert as React.ReactElement<AlertProps>).key}` ||
              index
            }
          >
            {alert}
          </li>
        ))}
        {overflowMessage && (
          <li>
            <button onClick={onOverflowClick} className={css(styles.alertGroupOverflowButton)}>
              {overflowMessage}
            </button>
          </li>
        )}
      </ul>
    </AlertGroupContext.Provider>
  );
};

AlertGroupInline.displayName = 'AlertGroupInline';

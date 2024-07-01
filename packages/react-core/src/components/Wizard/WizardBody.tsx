import React from 'react';

import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { css } from '@patternfly/react-styles';
import { WizardContext } from './WizardContext';
import { debounce } from '../../helpers/util';
import { getResizeObserver } from '../../helpers/resizeObserver';

/**
 * Used as a wrapper for WizardStep content, where the wrapping element is customizable.
 */

export interface WizardBodyProps extends React.HTMLProps<HTMLElement> {
  /** Anything that can be rendered in the Wizard body */
  children: React.ReactNode;
  /** Additional classes spread to the wizard body */
  className?: string;
  /** Flag to remove the default body padding */
  hasNoPadding?: boolean;
  /** Adds an accessible name to the wrapper element when the content overflows and renders
   * a scrollbar.
   */
  'aria-label'?: string;
  /** Adds an accessible name to the wrapper element by passing the the id of one or more elements.
   * The aria-labelledby will only be applied when the content overflows and renders a scrollbar.
   */
  'aria-labelledby'?: string;
  /** Component used as the wrapping content container */
  component?: React.ElementType;
}

export const WizardBody = ({
  children,
  className,
  hasNoPadding = false,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  component = 'div',
  ...props
}: WizardBodyProps) => {
  const [hasScrollbar, setHasScrollbar] = React.useState(false);
  const [previousWidth, setPreviousWidth] = React.useState<number | undefined>(undefined);
  const WrapperComponent = component;
  const { activeStep, shouldFocusContent, mainWrapperRef } = React.useContext(WizardContext);
  const defaultAriaLabel = ariaLabel || `${activeStep?.name} content`;

  React.useEffect(() => {
    const resize = () => {
      if (mainWrapperRef?.current) {
        const { offsetWidth, offsetHeight, scrollHeight } = mainWrapperRef.current;

        if (previousWidth !== offsetWidth) {
          setPreviousWidth(offsetWidth);
          setHasScrollbar(offsetHeight < scrollHeight);
        }
      }
    };

    const handleResizeWithDelay = debounce(resize, 250);
    let observer = () => {};

    if (mainWrapperRef?.current) {
      observer = getResizeObserver(mainWrapperRef.current, handleResizeWithDelay);
      const { offsetHeight, scrollHeight } = mainWrapperRef.current;

      setHasScrollbar(offsetHeight < scrollHeight);
      setPreviousWidth((mainWrapperRef.current as HTMLElement).offsetWidth);
    }

    return () => {
      observer();
    };
  }, [previousWidth]);

  return (
    <WrapperComponent
      ref={mainWrapperRef}
      {...(shouldFocusContent && { tabIndex: -1 })}
      {...(component === 'div' && hasScrollbar && { role: 'region' })}
      {...(hasScrollbar && { 'aria-label': defaultAriaLabel, 'aria-labelledby': ariaLabelledBy, tabIndex: 0 })}
      className={css(styles.wizardMain, className)}
      {...props}
    >
      <div className={css(styles.wizardMainBody, hasNoPadding && styles.modifiers.noPadding)}>{children}</div>
    </WrapperComponent>
  );
};

WizardBody.displayName = 'WizardBody';

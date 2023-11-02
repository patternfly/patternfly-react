import React from 'react';

import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { css } from '@patternfly/react-styles';
import { WizardContext } from './WizardContext';
import { debounce } from '../../helpers/util';
import { getResizeObserver } from '../../helpers/resizeObserver';

/**
 * Used as a wrapper for WizardStep content, where the wrapping element is customizable.
 */

export interface WizardBodyProps {
  /** Anything that can be rendered in the Wizard body */
  children: React.ReactNode;
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
  hasNoPadding = false,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  component = 'div'
}: WizardBodyProps) => {
  const [hasScrollbar, setHasScrollbar] = React.useState(false);
  const [previousWidth, setPreviousWidth] = React.useState<number | undefined>(undefined);
  const wrapperRef = React.useRef(null);
  const WrapperComponent = component;
  const { activeStep } = React.useContext(WizardContext);
  const defaultAriaLabel = ariaLabel || `${activeStep?.name} content`;

  React.useEffect(() => {
    const resize = () => {
      if (wrapperRef?.current) {
        const { offsetWidth, offsetHeight, scrollHeight } = wrapperRef.current;

        if (previousWidth !== offsetWidth) {
          setPreviousWidth(offsetWidth);
          setHasScrollbar(offsetHeight < scrollHeight);
        }
      }
    };

    const handleResizeWithDelay = debounce(resize, 250);
    let observer = () => {};

    if (wrapperRef?.current) {
      observer = getResizeObserver(wrapperRef.current, handleResizeWithDelay);
      const { offsetHeight, scrollHeight } = wrapperRef.current;

      setHasScrollbar(offsetHeight < scrollHeight);
      setPreviousWidth((wrapperRef.current as HTMLElement).offsetWidth);
    }

    return () => {
      observer();
    };
  }, [previousWidth]);

  return (
    <WrapperComponent
      ref={wrapperRef}
      {...(component === 'div' && hasScrollbar && { role: 'region' })}
      {...(hasScrollbar && { 'aria-label': defaultAriaLabel, 'aria-labelledby': ariaLabelledBy, tabIndex: 0 })}
      className={css(styles.wizardMain)}
    >
      <div className={css(styles.wizardMainBody, hasNoPadding && styles.modifiers.noPadding)}>{children}</div>
    </WrapperComponent>
  );
};

WizardBody.displayName = 'WizardBody';

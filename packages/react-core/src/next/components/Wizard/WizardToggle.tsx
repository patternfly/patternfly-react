import React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';

import { KeyTypes } from '../../../helpers/constants';
import { WizardNav, WizardNavItem } from '../Wizard';
import {
  WizardControlStep,
  CustomWizardNavFunction,
  DefaultWizardNavProps,
  isWizardBasicStep,
  isWizardParentStep,
  isWizardSubStep,
  isCustomWizardNav
} from './types';

/**
 * Used to toggle between step content, including the body and footer. This is also where the nav and its expandability is controlled.
 */

export interface WizardToggleProps {
  /** List of steps and/or sub-steps */
  steps: WizardControlStep[];
  /** The currently active WizardStep */
  activeStep: WizardControlStep;
  /** The WizardFooter */
  footer: React.ReactElement;
  /** Custom WizardNav or callback used to create a default WizardNav */
  nav: DefaultWizardNavProps | CustomWizardNavFunction;
  /** Navigate using the step index */
  goToStepByIndex: (index: number) => void;
  /** The button's aria-label */
  'aria-label'?: string;
  /** Flag to unmount inactive steps instead of hiding. Defaults to true */
  unmountInactiveSteps?: boolean;
}

export const WizardToggle = ({
  steps,
  activeStep,
  footer,
  nav,
  goToStepByIndex,
  unmountInactiveSteps = true,
  'aria-label': ariaLabel = 'Wizard toggle'
}: WizardToggleProps) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const isActiveSubStep = isWizardSubStep(activeStep);

  const handleKeyClicks = React.useCallback(
    (event: KeyboardEvent): void => {
      if (isNavOpen && event.key === KeyTypes.Escape) {
        setIsNavOpen(!isNavOpen);
      }
    },
    [isNavOpen]
  );

  // Open/close collapsable nav on keydown event
  React.useEffect(() => {
    const target = typeof document !== 'undefined' ? document.body : null;
    target?.addEventListener('keydown', handleKeyClicks, false);

    return () => {
      target?.removeEventListener('keydown', handleKeyClicks, false);
    };
  }, [handleKeyClicks]);

  // Only render the active step when unmountInactiveSteps is true
  const bodyContent = unmountInactiveSteps
    ? activeStep?.component
    : steps.map(step => {
        if (activeStep?.name === step.name) {
          return step.component;
        }

        return (
          <div key={step.id} style={{ display: 'none' }}>
            {step.component}
          </div>
        );
      });

  const wizardNav = isCustomWizardNav(nav)
    ? nav(isNavOpen, steps, activeStep, goToStepByIndex)
    : React.useMemo(() => {
        const props = {
          isOpen: isNavOpen,
          'aria-label': nav?.ariaLabel || 'Wizard nav',
          ...(nav?.ariaLabelledBy && { 'aria-labelledby': nav?.ariaLabelledBy })
        };

        return (
          <WizardNav {...props}>
            {steps.map((step, index) => {
              const stepIndex = index + 1;
              const stepNavItem = step.navItem && <React.Fragment key={step.id}>{step.navItem}</React.Fragment>;

              if (isWizardParentStep(step)) {
                let firstSubStepIndex;
                let hasActiveChild = false;

                const subNavItems = step.subStepIds?.map((subStepId, index) => {
                  const subStep = steps.find(step => step.id === subStepId);
                  const subStepIndex = steps.indexOf(subStep) + 1;

                  if (index === 0) {
                    firstSubStepIndex = subStepIndex;
                  }

                  if (activeStep?.id === subStep.id) {
                    hasActiveChild = true;
                  }

                  return subStep.navItem ? (
                    <React.Fragment key={subStep.id}>{subStep.navItem}</React.Fragment>
                  ) : (
                    <WizardNavItem
                      key={subStep.id}
                      id={subStep.id}
                      content={subStep.name}
                      isCurrent={activeStep?.id === subStep.id}
                      isDisabled={subStep.isDisabled || (nav?.forceStepVisit && !subStep.visited)}
                      step={subStepIndex}
                      onNavItemClick={goToStepByIndex}
                    />
                  );
                });

                const hasEnabledChildren = React.Children.toArray(subNavItems).some(
                  child => React.isValidElement(child) && !child.props.isDisabled
                );

                return (
                  stepNavItem || (
                    <WizardNavItem
                      key={step.id}
                      id={step.id}
                      content={step.name}
                      isExpandable={nav?.isExpandable}
                      isCurrent={hasActiveChild}
                      isDisabled={!hasEnabledChildren}
                      step={firstSubStepIndex}
                      onNavItemClick={goToStepByIndex}
                    >
                      <WizardNav {...props} returnList>
                        {subNavItems}
                      </WizardNav>
                    </WizardNavItem>
                  )
                );
              }

              if (isWizardBasicStep(step)) {
                return (
                  stepNavItem || (
                    <WizardNavItem
                      key={step.id}
                      id={step.id}
                      content={step.name}
                      isCurrent={activeStep?.id === step.id}
                      isDisabled={step.isDisabled || (nav?.forceStepVisit && !step.visited)}
                      step={stepIndex}
                      onNavItemClick={goToStepByIndex}
                    />
                  )
                );
              }
            })}
          </WizardNav>
        );
      }, [activeStep?.id, goToStepByIndex, isNavOpen, nav, steps]);

  return (
    <>
      <button
        onClick={() => setIsNavOpen(prevIsOpen => !prevIsOpen)}
        className={css(styles.wizardToggle, isNavOpen && 'pf-m-expanded')}
        aria-label={ariaLabel}
        aria-expanded={isNavOpen}
      >
        <span className={css(styles.wizardToggleList)}>
          <span className={css(styles.wizardToggleListItem)}>
            {activeStep?.name}
            {isActiveSubStep && <AngleRightIcon className={css(styles.wizardToggleSeparator)} aria-hidden="true" />}
          </span>
          {isActiveSubStep && <span className={css(styles.wizardToggleListItem)}>{activeStep?.name}</span>}
        </span>

        <span className={css(styles.wizardToggleIcon)}>
          <CaretDownIcon aria-hidden="true" />
        </span>
      </button>
      <div className={css(styles.wizardOuterWrap)}>
        <div className={css(styles.wizardInnerWrap)}>
          {wizardNav}
          {bodyContent}
        </div>

        {footer}
      </div>
    </>
  );
};

WizardToggle.displayName = 'WizardToggle';

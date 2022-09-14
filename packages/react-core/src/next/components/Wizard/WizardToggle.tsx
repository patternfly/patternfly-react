import React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';

import { KeyTypes } from '../../../helpers/constants';
import { WizardNav, WizardNavItem, WizardNavProps } from '../Wizard';
import {
  WizardControlStep,
  isWizardBasicStep,
  isWizardParentStep,
  isWizardSubStep,
  isCustomWizardNav,
  DefaultWizardNavProps,
  CustomWizardNavFunction
} from './types';
import { useWizardContext } from './WizardContext';

/**
 * Used to toggle between step content, including the body and footer. This is also where the nav and its expandability is controlled.
 */

export interface WizardToggleProps {
  /** List of steps and/or sub-steps */
  steps: WizardControlStep[];
  /** The currently active WizardStep */
  activeStep: WizardControlStep;
  /** Wizard footer */
  footer: React.ReactElement;
  /** Wizard nav */
  nav: React.ReactElement<WizardNavProps>;
  /** The expandable dropdown button's aria-label */
  'aria-label'?: string;
  /** Flag to unmount inactive steps instead of hiding. Defaults to true */
  unmountInactiveSteps?: boolean;
  /** Flag to determine whether the dropdown nav is expanded */
  isNavExpanded?: boolean;
  /** Callback to expand or collapse the dropdown nav */
  toggleNavExpanded?: () => void;
}

export const WizardToggle = ({
  steps,
  activeStep,
  footer,
  nav,
  isNavExpanded,
  toggleNavExpanded,
  unmountInactiveSteps = true,
  'aria-label': ariaLabel = 'Wizard toggle'
}: WizardToggleProps) => {
  const isActiveSubStep = isWizardSubStep(activeStep);

  const handleKeyClicks = React.useCallback(
    (event: KeyboardEvent): void => {
      if (isNavExpanded && event.key === KeyTypes.Escape) {
        toggleNavExpanded();
      }
    },
    [isNavExpanded, toggleNavExpanded]
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

  return (
    <>
      <button
        onClick={toggleNavExpanded}
        className={css(styles.wizardToggle, isNavExpanded && 'pf-m-expanded')}
        aria-label={ariaLabel}
        aria-expanded={isNavExpanded}
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
          {nav}
          {bodyContent}
        </div>

        {footer}
      </div>
    </>
  );
};

interface WizardToggleInternalProps extends Pick<WizardToggleProps, 'unmountInactiveSteps'> {
  /** Custom WizardNav or callback used to create a default WizardNav */
  nav?: DefaultWizardNavProps | CustomWizardNavFunction;
}

export const WizardToggleInternal = ({ nav, unmountInactiveSteps }: WizardToggleInternalProps) => {
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);
  const { activeStep, steps, footer, goToStepByIndex } = useWizardContext();

  const wizardNav = React.useMemo(() => {
    if (isCustomWizardNav(nav)) {
      return nav(isNavExpanded, steps, activeStep, goToStepByIndex);
    }

    const navProps = {
      isExpanded: isNavExpanded,
      'aria-label': nav?.ariaLabel || 'Wizard nav',
      ...(nav?.ariaLabelledBy && { 'aria-labelledby': nav?.ariaLabelledBy })
    };

    return (
      <WizardNav {...navProps}>
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
                  <WizardNav {...navProps} returnList>
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
  }, [activeStep, goToStepByIndex, isNavExpanded, nav, steps]);

  return (
    <WizardToggle
      nav={wizardNav}
      footer={footer}
      steps={steps}
      activeStep={activeStep}
      isNavExpanded={isNavExpanded}
      toggleNavExpanded={() => setIsNavExpanded(prevIsExpanded => !prevIsExpanded)}
      unmountInactiveSteps={unmountInactiveSteps}
    />
  );
};

WizardToggle.displayName = 'WizardToggle';

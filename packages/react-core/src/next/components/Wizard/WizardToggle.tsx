import React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';

import { KeyTypes } from '../../../helpers/constants';
import { WizardNavProps, WizardBody, WizardStep, WizardStepProps } from '../Wizard';
import { WizardStepType, isWizardSubStep } from './types';

/**
 * Used to toggle between step content, including the body and footer. This is also where the navigation and its expandability is controlled.
 */

export interface WizardToggleProps {
  /** List of steps and/or sub-steps */
  steps: WizardStepType[];
  /** The current step */
  activeStep: WizardStepType;
  /** Wizard footer */
  footer: React.ReactElement;
  /** Wizard navigation */
  nav: React.ReactElement<WizardNavProps>;
  /** The expandable dropdown button's aria-label */
  'aria-label'?: string;
  /** Flag to determine whether the dropdown navigation is expanded */
  isNavExpanded?: boolean;
  /** Callback to expand or collapse the dropdown navigation */
  toggleNavExpanded?: (event: React.MouseEvent<HTMLButtonElement> | KeyboardEvent) => void;
}

export const WizardToggle = ({
  steps,
  activeStep,
  footer,
  nav,
  isNavExpanded,
  toggleNavExpanded,
  'aria-label': ariaLabel = 'Wizard toggle'
}: WizardToggleProps) => {
  const isActiveSubStep = isWizardSubStep(activeStep);
  const nonSubSteps = steps.filter(step => !isWizardSubStep(step));
  const wizardToggleIndex =
    nonSubSteps.indexOf(
      isWizardSubStep(activeStep) ? steps.find(step => step.id === activeStep.parentId) : activeStep
    ) + 1;

  const handleKeyClicks = React.useCallback(
    (event: KeyboardEvent): void => {
      if (isNavExpanded && event.key === KeyTypes.Escape) {
        toggleNavExpanded?.(event);
      }
    },
    [isNavExpanded, toggleNavExpanded]
  );

  // Open/close collapsable navigation on keydown event
  React.useEffect(() => {
    const target = typeof document !== 'undefined' ? document.body : null;
    target?.addEventListener('keydown', handleKeyClicks, false);

    return () => {
      target?.removeEventListener('keydown', handleKeyClicks, false);
    };
  }, [handleKeyClicks]);

  const bodyContent = steps.map(step => {
    const props: WizardStepProps = step.component?.props || {};
    const { children, body, ...propsWithoutChildren } = props;

    return (
      <React.Fragment key={step.id}>
        {activeStep?.name === step.name &&
          (body || body === undefined ? <WizardBody {...body}>{children}</WizardBody> : children)}

        <div key={step.id} style={{ display: 'none' }}>
          <WizardStep {...propsWithoutChildren} />
        </div>
      </React.Fragment>
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
            <span className={css(styles.wizardToggleNum)}>{wizardToggleIndex}</span> {activeStep?.name}
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

WizardToggle.displayName = 'WizardToggle';

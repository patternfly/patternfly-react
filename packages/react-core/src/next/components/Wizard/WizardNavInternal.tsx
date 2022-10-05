import React from 'react';

import { isCustomWizardNavItem, isWizardBasicStep, isWizardParentStep } from './types';
import { WizardProps } from './Wizard';
import { useWizardContext } from './WizardContext';
import { WizardNav, WizardNavProps } from './WizardNav';
import { WizardNavItem } from './WizardNavItem';

/**
 * Hosts deafult wizard navigation logic by utilizing the wizard's context and WizardNav/WizardNavItem.
 * This component is not exposed to consumers.
 */

interface WizardNavInternalProps extends Pick<WizardProps, 'isStepVisitRequired'> {
  nav: Partial<WizardNavProps>;
  isNavExpanded: boolean;
}

export const WizardNavInternal = ({ nav, isStepVisitRequired, isNavExpanded }: WizardNavInternalProps) => {
  const { currentStep, steps, goToStepByIndex } = useWizardContext();

  const wizardNavProps: WizardNavProps = {
    isExpanded: isNavExpanded,
    'aria-label': nav?.['aria-label'] || 'Wizard steps',
    ...(nav?.['aria-labelledby'] && {
      'aria-labelledby': nav['aria-labelledby']
    })
  };

  return (
    <WizardNav {...wizardNavProps}>
      {steps.map((step, index) => {
        const stepIndex = index + 1;
        const customStepNavItem = isCustomWizardNavItem(step.navItem) && (
          <React.Fragment key={step.id}>
            {typeof step.navItem === 'function'
              ? step.navItem(step, currentStep, steps, goToStepByIndex)
              : step.navItem}
          </React.Fragment>
        );

        if (isWizardParentStep(step) && !step.isHidden) {
          let firstSubStepIndex;
          let hasActiveChild = false;

          const subNavItems = step.subStepIds?.map((subStepId, subStepIndex) => {
            const subStep = steps.find(step => step.id === subStepId);
            const subStepOrderIndex = steps.indexOf(subStep) + 1;
            const customSubStepNavItem = isCustomWizardNavItem(subStep.navItem) && (
              <React.Fragment key={subStep.id}>
                {typeof subStep.navItem === 'function'
                  ? subStep.navItem(subStep, currentStep, steps, goToStepByIndex)
                  : subStep.navItem}
              </React.Fragment>
            );

            // Don't render the sub-step navigation item if the hidden property is enabled
            if (subStep.isHidden) {
              return;
            }

            // Store the first sub-step index so that when its parent is clicked, the first sub-step is focused
            if (subStepIndex === 0) {
              firstSubStepIndex = subStepOrderIndex;
            }

            // When a sub-step is active, use this flag to set the parent step as active (isCurrent)
            if (currentStep?.id === subStep.id) {
              hasActiveChild = true;
            }

            return (
              customSubStepNavItem || (
                <WizardNavItem
                  key={subStep.id}
                  id={subStep.id}
                  content={subStep.name}
                  isCurrent={currentStep?.id === subStep.id}
                  isDisabled={subStep.isDisabled || (isStepVisitRequired && !subStep.isVisited)}
                  isVisited={subStep.isVisited}
                  stepIndex={subStepOrderIndex}
                  onNavItemClick={goToStepByIndex}
                  status={subStep.status}
                  {...subStep.navItem}
                />
              )
            );
          });
          const hasEnabledChildren = React.Children.toArray(subNavItems).some(
            child => React.isValidElement(child) && !child.props.isDisabled
          );

          return (
            customStepNavItem || (
              <WizardNavItem
                key={step.id}
                id={step.id}
                content={step.name}
                isExpandable={true}
                isCurrent={hasActiveChild}
                isDisabled={!hasEnabledChildren}
                isVisited={step.isVisited}
                stepIndex={firstSubStepIndex}
                onNavItemClick={goToStepByIndex}
                status={step.status}
                {...step.navItem}
              >
                <WizardNav {...wizardNavProps} isInnerList>
                  {subNavItems}
                </WizardNav>
              </WizardNavItem>
            )
          );
        }

        if (isWizardBasicStep(step) && !step.isHidden) {
          return (
            customStepNavItem || (
              <WizardNavItem
                key={step.id}
                id={step.id}
                content={step.name}
                isCurrent={currentStep?.id === step.id}
                isDisabled={step.isDisabled || (isStepVisitRequired && !step.isVisited)}
                isVisited={step.isVisited}
                stepIndex={stepIndex}
                onNavItemClick={goToStepByIndex}
                status={step.status}
                {...step.navItem}
              />
            )
          );
        }
      })}
    </WizardNav>
  );
};

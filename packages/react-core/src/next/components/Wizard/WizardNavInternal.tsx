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

interface WizardNavInternalProps extends Pick<WizardProps, 'isVisitRequired' | 'isProgressive'> {
  nav: Partial<WizardNavProps>;
  isNavExpanded: boolean;
}

export const WizardNavInternal = ({ nav, isVisitRequired, isProgressive, isNavExpanded }: WizardNavInternalProps) => {
  const { activeStep, steps, goToStepByIndex } = useWizardContext();

  const wizardNavProps: WizardNavProps = {
    isExpanded: isNavExpanded,
    'aria-label': nav?.['aria-label'] || 'Wizard steps',
    ...(nav?.['aria-labelledby'] && {
      'aria-labelledby': nav['aria-labelledby']
    })
  };

  return (
    <WizardNav {...wizardNavProps}>
      {steps.map((step, stepIndex) => {
        const hasVisitedNextStep = steps.some(step => step.index > stepIndex + 1 && step.isVisited);
        const isStepDisabled = step.isDisabled || (isVisitRequired && !step.isVisited && !hasVisitedNextStep);
        const customStepNavItem = isCustomWizardNavItem(step.navItem) && (
          <React.Fragment key={step.id}>
            {typeof step.navItem === 'function' ? step.navItem(step, activeStep, steps, goToStepByIndex) : step.navItem}
          </React.Fragment>
        );

        if (isWizardParentStep(step) && !step.isHidden) {
          let firstSubStepIndex: number;
          let hasActiveChild = false;

          const subNavItems = step.subStepIds?.map((subStepId, subStepIndex) => {
            const subStep = steps.find(step => step.id === subStepId);
            const hasVisitedNextStep = steps.some(step => step.index > subStep.index && step.isVisited);
            const isSubStepDisabled =
              subStep.isDisabled || (isVisitRequired && !subStep.isVisited && !hasVisitedNextStep);
            const customSubStepNavItem = isCustomWizardNavItem(subStep.navItem) && (
              <React.Fragment key={subStep.id}>
                {typeof subStep.navItem === 'function'
                  ? subStep.navItem(subStep, activeStep, steps, goToStepByIndex)
                  : subStep.navItem}
              </React.Fragment>
            );

            // Don't render the sub-step navigation item if the hidden property is enabled
            if (subStep.isHidden) {
              return;
            }

            // Store the first sub-step index so that when its parent is clicked, the first sub-step is focused
            if (subStepIndex === 0) {
              firstSubStepIndex = subStep.index;
            }

            // When a sub-step is active, use this flag to set the parent step as active (isCurrent)
            if (activeStep?.id === subStep.id) {
              hasActiveChild = true;
            }

            if (!isProgressive || (isProgressive && subStep.index <= activeStep.index)) {
              return (
                customSubStepNavItem || (
                  <WizardNavItem
                    key={subStep.id}
                    id={subStep.id}
                    content={subStep.name}
                    isCurrent={activeStep?.id === subStep.id}
                    isDisabled={isSubStepDisabled}
                    isVisited={subStep.isVisited}
                    stepIndex={subStep.index}
                    onClick={() => goToStepByIndex(subStep.index)}
                    status={subStep.status}
                    {...subStep.navItem}
                  />
                )
              );
            }
          });
          const hasEnabledChildren = React.Children.toArray(subNavItems).some(
            child => React.isValidElement(child) && !child.props.isDisabled
          );

          if (!isProgressive || (isProgressive && step.index <= activeStep.index)) {
            return (
              customStepNavItem || (
                <WizardNavItem
                  key={step.id}
                  id={step.id}
                  content={step.name}
                  isExpandable={step.isExpandable}
                  isCurrent={hasActiveChild}
                  isDisabled={!hasEnabledChildren}
                  isVisited={step.isVisited}
                  stepIndex={firstSubStepIndex}
                  onClick={() => goToStepByIndex(firstSubStepIndex)}
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
        }

        if (
          isWizardBasicStep(step) &&
          !step.isHidden &&
          (!isProgressive || (isProgressive && step.index <= activeStep.index))
        ) {
          return (
            customStepNavItem || (
              <WizardNavItem
                key={step.id}
                id={step.id}
                content={step.name}
                isCurrent={activeStep?.id === step.id}
                isDisabled={isStepDisabled}
                isVisited={step.isVisited}
                stepIndex={step.index}
                onClick={() => goToStepByIndex(step.index)}
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

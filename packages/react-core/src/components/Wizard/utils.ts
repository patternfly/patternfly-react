import React from 'react';

import { isWizardParentStep, isWizardSubStep, WizardStepType } from './types';
import { WizardStep, WizardStepProps } from './WizardStep';

/**
 * Accumulate list of step & sub-step props pulled from child components
 * @param children
 * @returns WizardStepType[]
 */
export const buildSteps = (children: React.ReactNode) =>
  React.Children.toArray(children).reduce((acc: WizardStepType[], child: React.ReactNode, index: number) => {
    if (isWizardStep(child)) {
      const { props: childProps } = child;
      const { steps: childStepComponents, id } = childProps;
      const stepIndex = acc.length + 1;
      const subSteps: WizardStepType[] = [];

      acc.push(
        {
          index: stepIndex,
          component: child,
          ...(index === 0 && !childStepComponents?.length && { isVisited: true }),
          ...(childStepComponents && {
            subStepIds: childStepComponents?.map((childStepComponent, subStepIndex) => {
              subSteps.push({
                index: stepIndex + subStepIndex + 1,
                component: childStepComponent,
                parentId: id,
                ...(index === 0 && subStepIndex === 0 && { isVisited: true }),
                ...normalizeStepProps(childStepComponent.props)
              });

              return childStepComponent.props.id;
            })
          }),
          ...normalizeStepProps(childProps)
        },
        ...subSteps
      );
    } else {
      throw new Error('Wizard only accepts children of type WizardStep.');
    }

    return acc;
  }, []);

export function isWizardStep(
  child: any | React.ReactElement<WizardStepProps>
): child is React.ReactElement<WizardStepProps> {
  return React.isValidElement(child) && (child as React.ReactElement<WizardStepProps>).type === WizardStep;
}

// Omit "children" and "steps" when building steps for the Wizard's context
export const normalizeStepProps = ({
  children: _children,
  steps: _steps,
  ...controlStep
}: WizardStepProps): Omit<WizardStepType, 'index'> => controlStep;

/**
 * Determines whether a step is navigable based on disabled/hidden properties
 * @param steps All steps
 * @param step
 * @returns boolean
 */
export const isStepEnabled = (steps: WizardStepType[], step: WizardStepType): boolean => {
  // Skip over parent steps since they are merely containers of sub-steps
  if (!isWizardParentStep(step) && !step.isHidden && !step.isDisabled) {
    if (isWizardSubStep(step)) {
      const parentStep = steps.find((otherStep) => otherStep.id === step.parentId);

      if (!parentStep.isHidden && !parentStep.isDisabled) {
        return true;
      }
    } else {
      return true;
    }
  }

  return false;
};

import React from 'react';

import { WizardControlStep, WizardNavStepData } from './types';
import { WizardStep, WizardStepProps } from './WizardStep';

/**
 * Accumulate list of step & sub-step props pulled from child components
 * @param children
 * @returns WizardControlStep[]
 */
export const buildSteps = (children: React.ReactElement<WizardStepProps> | React.ReactElement<WizardStepProps>[]) =>
  React.Children.toArray(children).reduce((acc: WizardControlStep[], child: React.ReactNode) => {
    if (isWizardStep(child)) {
      const { steps: subSteps, id, isHidden, isDisabled } = child.props;
      const subControlledSteps: WizardControlStep[] = [];
      const stepIndex = acc.length + 1;

      acc.push(
        {
          index: stepIndex,
          component: child,
          ...(stepIndex === 1 && { isVisited: true }),
          ...(subSteps && {
            subStepIds: subSteps?.map((subStep, subStepIndex) => {
              subControlledSteps.push({
                isHidden,
                isDisabled,
                component: subStep,
                parentId: id,
                index: stepIndex + subStepIndex + 1,
                ...normalizeStep(subStep.props)
              });

              return subStep.props.id;
            })
          }),
          ...normalizeStep(child.props)
        },
        ...subControlledSteps
      );
    } else {
      throw new Error('Wizard only accepts children with required WizardStepProps.');
    }

    return acc;
  }, []);

export function isWizardStep(
  child: any | React.ReactElement<WizardStepProps>
): child is React.ReactElement<WizardStepProps> {
  return (
    (React.isValidElement(child) && (child as React.ReactElement<WizardStepProps>).type === WizardStep) ||
    (child.props?.name !== undefined && child.props?.id !== undefined)
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const normalizeStep = ({ children, steps, ...controlStep }: WizardStepProps): Omit<WizardControlStep, 'index'> =>
  controlStep;

export const normalizeNavStep = (navStep: WizardControlStep): WizardNavStepData => ({
  id: navStep.id,
  index: navStep.index,
  name: navStep.name.toString()
});

export const getActiveStep = (steps: WizardControlStep[], activeStepIndex: number) =>
  steps.find(step => step.index === activeStepIndex);

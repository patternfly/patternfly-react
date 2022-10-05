import React from 'react';

import { WizardControlStep, WizardNavStepData } from './types';
import { WizardStep, WizardStepProps } from './WizardStep';

/**
 * Accumulate list of step & sub-step props pulled from child components
 * @param children
 * @returns WizardControlStep[]
 */
export const buildSteps = (children: React.ReactElement<WizardStepProps> | React.ReactElement<WizardStepProps>[]) =>
  React.Children.toArray(children).reduce((acc: WizardControlStep[], child: React.ReactChild | React.ReactFragment) => {
    if (isWizardStep(child)) {
      const { steps: subSteps, id } = child.props;

      acc.push({
        component: child,
        ...normalizeStep(child.props),
        ...(subSteps && {
          subStepIds: subSteps?.map(subStep => {
            acc.push({
              ...normalizeStep(subStep.props),
              component: subStep,
              parentId: id
            });

            return subStep.props.id;
          })
        })
      });
    } else {
      throw new Error('Wizard only accepts children of type WizardStep');
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
export const normalizeStep = ({ children, steps, body, ...controlStep }: WizardStepProps): WizardControlStep =>
  controlStep;

export const normalizeNavStep = (navStep: WizardControlStep, steps: WizardControlStep[]): WizardNavStepData => ({
  id: navStep.id,
  name: navStep.name.toString(),
  index: steps.indexOf(navStep) + 1
});

export const getCurrentStep = (steps: WizardControlStep[], currentStepIndex: number) =>
  steps.find((_, index) => index + 1 === currentStepIndex);

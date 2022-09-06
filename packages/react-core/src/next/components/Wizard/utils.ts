import React from 'react';

import { WizardControlStep, WizardNavStepData } from './types';
import { WizardStep, WizardStepProps } from './WizardStep';

function hasWizardStepProps(props: WizardStepProps | any): props is WizardStepProps {
  return props.name !== undefined && props.id !== undefined;
}

/**
 * Accumulate list of step & sub-step props pulled from child components
 * @param children
 * @returns WizardControlStep[]
 */
export const buildSteps = (children: React.ReactElement<WizardStepProps> | React.ReactElement<WizardStepProps>[]) =>
  React.Children.toArray(children).reduce((acc: WizardControlStep[], child) => {
    if (React.isValidElement(child) && (child.type === WizardStep || hasWizardStepProps(child.props))) {
      // Omit "children" and use the whole "child" (WizardStep) for the component prop. Sub-steps will do the same.
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { steps: subSteps, id, children, ...stepProps } = child.props as WizardStepProps;

      acc.push({
        id,
        component: child,
        ...stepProps,
        ...(subSteps && {
          subStepIds: subSteps?.map(subStep => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { children, ...subStepProps } = subStep.props;
            acc.push({
              ...subStepProps,
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

export const normalizeNavStep = ({ id, name }: WizardNavStepData) => ({ id, name });
export const getActiveStep = (steps: WizardControlStep[], currentStepIndex: number) =>
  steps.find((_, index) => index + 1 === currentStepIndex);

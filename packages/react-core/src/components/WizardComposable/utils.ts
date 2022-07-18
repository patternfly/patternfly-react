import React from 'react';

import { Step, SubStep, WizardNavStepData } from './types';
import { WizardComposableStep, WizardComposableStepProps } from './WizardComposableStep';

/**
 * Accumulate list of step & sub-step props pulled from child components
 * @param children
 * @returns (Step | SubStep)[]
 */
export const buildSteps = (
  children: React.ReactElement<WizardComposableStepProps> | React.ReactElement<WizardComposableStepProps>[]
) =>
  React.Children.toArray(children).reduce((acc: (Step | SubStep)[], child) => {
    if (React.isValidElement(child) && typeof child.type !== 'string') {
      if (child.type === WizardComposableStep) {
        // Omit "children" and use the whole "child" (WizardStep) for the component prop. Sub-steps will do the same.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { steps: subSteps, id, children, ...stepProps } = child.props as WizardComposableStepProps;

        acc.push({
          id,
          component: child,
          ...stepProps,
          ...(subSteps && {
            subStepIds: subSteps?.map(subStep => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { children, ...subStepProps } = subStep.props;
              acc.push({ ...subStepProps, component: subStep, parentId: id });

              return subStep.props.id;
            })
          })
        });
      } else {
        throw new Error('Wizard only accepts children of type WizardComposableStep');
      }
    }

    return acc;
  }, []);

export const normalizeNavStep = ({ id, name }: WizardNavStepData) => ({ id, name });
export const getActiveStep = (steps: (Step | SubStep)[], currentStepIndex: number) =>
  steps.find((_, index) => index + 1 === currentStepIndex);

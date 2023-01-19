import React from 'react';
import isEqual from 'fast-deep-equal';
import { WizardStepType } from '../types';

/**
 * Get stable ref of combined initial (prop provided) and current (context stored) steps.
 * @param initialSteps
 * @param currentSteps
 * @returns WizardStepType[]
 */
export const useGetMergedSteps = (initialSteps: WizardStepType[], currentSteps: WizardStepType[]): WizardStepType[] => {
  const initialStepsRef = React.useRef(initialSteps);
  const currentStepsRef = React.useRef(currentSteps);

  // Check each value within the array of initialSteps (props) and currentSteps (context).
  // If any value changes for either of these, update the reference.
  if (!isEqual(initialStepsRef.current, initialSteps)) {
    initialStepsRef.current = initialSteps;
  }
  if (!isEqual(currentStepsRef.current, currentSteps)) {
    currentStepsRef.current = currentSteps;
  }

  // Combine both initial and current steps, where prop provided values
  // take precedence over what's stored in context.
  const mergedSteps = React.useMemo(
    () =>
      initialSteps.reduce((acc, initialStepProps, index) => {
        const currentStepProps = currentSteps[index];

        if (initialStepProps.id === currentStepProps.id) {
          acc.push({
            ...currentStepProps,
            ...initialStepProps
          });
        }

        return acc;
      }, []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initialStepsRef.current, currentStepsRef.current]
  );

  return mergedSteps;
};

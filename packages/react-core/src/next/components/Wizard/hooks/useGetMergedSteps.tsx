import React from 'react';
import isEqual from 'lodash/isEqual';
import { WizardControlStep } from '../types';

/**
 * Get stable ref of combined initial and current state steps.
 * @param initialSteps
 * @param currentSteps
 * @returns
 */
export const useGetMergedSteps = (
  initialSteps: WizardControlStep[],
  currentSteps: WizardControlStep[]
): WizardControlStep[] => {
  const initialStepsRef = React.useRef(initialSteps);
  const currentStepsRef = React.useRef(currentSteps);

  if (!isEqual(initialStepsRef.current, initialSteps)) {
    initialStepsRef.current = initialSteps;
  }

  if (!isEqual(currentStepsRef.current, currentSteps)) {
    currentStepsRef.current = currentSteps;
  }

  const mergedSteps = React.useMemo(
    () =>
      currentSteps.map((currentStepProps, index) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { isVisited, ...initialStepProps } = initialSteps[index];

        return {
          ...currentStepProps,
          ...initialStepProps
        };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initialStepsRef.current, currentStepsRef.current]
  );

  return mergedSteps;
};

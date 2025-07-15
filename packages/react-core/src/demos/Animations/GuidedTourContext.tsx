import { createContext, useContext, useCallback, useEffect, useState } from 'react';
import { Button, ButtonVariant, Flex, FlexItem, Popover } from '../..';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import { GuidedTourStep } from './types';

interface GuidedTourContextType {
  onStart: () => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  onFinish: () => void;
  tourStep: GuidedTourStep | undefined;
  setCustomStepContent: (customContent: React.ReactNode) => void;
  renderTourStepElement: (forStepId: string, child: React.ReactElement) => React.ReactElement;
}

const GuidedTourContext = createContext<GuidedTourContextType>({
  onStart: () => {},
  onNextStep: () => {},
  onPrevStep: () => {},
  onFinish: () => {},
  setCustomStepContent: () => {},
  renderTourStepElement: () => null,
  tourStep: undefined
});

export const GuidedTourProvider: React.FC<{ steps: GuidedTourStep[]; children: React.ReactNode }> = ({
  steps,
  children
}) => {
  const [currentStep, setCurrentStep] = useState<number | undefined>();
  const [customStepContent, setCustomStepContent] = useState<React.ReactNode | undefined>();

  useEffect(() => {
    setCurrentStep(undefined);
    setCustomStepContent(undefined);
  }, [steps]);

  const onStart = useCallback(() => {
    setCustomStepContent(undefined);
    setCurrentStep(0);
  }, []);

  const onFinish = useCallback(() => {
    setCustomStepContent(undefined);
    setCurrentStep(undefined);
  }, []);

  const onNextStep = useCallback(() => {
    setCustomStepContent(undefined);
    setCurrentStep((prev) => {
      if (prev === undefined || prev === steps.length) {
        return prev;
      }
      return prev + 1;
    });
  }, [steps]);

  const onPrevStep = useCallback(() => {
    setCustomStepContent(undefined);
    setCurrentStep((prev) => {
      if (prev === undefined || prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  }, []);

  const tourStep = currentStep !== undefined ? steps[currentStep] : undefined;

  const renderTourStepElement = useCallback(
    (forStepId: string, child: React.ReactElement) => {
      if (!tourStep || forStepId !== tourStep.stepId) {
        return child;
      }
      return (
        <Popover
          isVisible
          showClose
          hideOnOutsideClick={false}
          headerContent={
            <>
              {tourStep.header}
              {
                // Had to add a close button here rather than using the showClose property to include the close button
                // Using the provided close button requires the 'shouldClose' property to handle the close click, but it also
                // gets called on a triggerRef click which we don't want since we ask the user to click the button in order
                // to see the animation. I don't see how to distinguish between the close button click and the triggerRef click.
              }
              <div className="pf-v6-c-popover__close">
                <Button
                  onClick={onFinish}
                  variant="plain"
                  aria-label="close guided tour"
                  style={{ pointerEvents: 'auto' }}
                  icon={<TimesIcon />}
                />
              </div>
            </>
          }
          bodyContent={customStepContent || tourStep.content}
          footerContent={
            <Flex spaceItems={{ default: 'spaceItemsMd' }} justifyContent={{ default: 'justifyContentSpaceBetween' }}>
              <FlexItem>
                Step {currentStep + 1}/{steps.length}
              </FlexItem>
              <FlexItem>
                <Flex spaceItems={{ default: 'spaceItemsMd' }}>
                  <FlexItem>
                    <Button variant={ButtonVariant.secondary} onClick={onPrevStep} isDisabled={currentStep === 0}>
                      Back
                    </Button>
                  </FlexItem>
                  <FlexItem>
                    <Button
                      variant={ButtonVariant.primary}
                      onClick={() => (currentStep < steps.length ? onNextStep() : onFinish())}
                    >
                      {currentStep < steps.length - 1 ? 'Next' : 'Finish'}
                    </Button>
                  </FlexItem>
                </Flex>
              </FlexItem>
            </Flex>
          }
        >
          {child}
        </Popover>
      );
    },
    [tourStep, currentStep, steps, onNextStep, onPrevStep, onFinish, customStepContent]
  );

  return (
    <GuidedTourContext.Provider
      value={{ onStart, onNextStep, onPrevStep, onFinish, setCustomStepContent, renderTourStepElement, tourStep }}
    >
      {children}
    </GuidedTourContext.Provider>
  );
};
GuidedTourProvider.displayName = 'GuidedTourProvider';

export const useGuidedTour = (): GuidedTourContextType => {
  const context = useContext(GuidedTourContext);

  if (!context) {
    throw new Error('useGuidedTour must be used within a GuidedTourProvider');
  }
  return context;
};

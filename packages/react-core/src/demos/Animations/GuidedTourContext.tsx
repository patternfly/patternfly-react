import { createContext, useContext, useCallback, useEffect, useState, useRef } from 'react';
import { Button, ButtonVariant, debounce, Flex, FlexItem, getResizeObserver, Popover } from '../..';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import { GuidedTourStep } from './types';

interface GuidedTourContextType {
  onStart: () => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  onFinish: () => void;
  tourStep: GuidedTourStep | undefined;
  isFinished: boolean;
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
  tourStep: undefined,
  isFinished: false
});

export const GuidedTourProvider: React.FC<{ steps: GuidedTourStep[]; children: React.ReactNode }> = ({
  steps,
  children
}) => {
  const [currentStep, setCurrentStep] = useState<number | undefined>();
  const [customStepContent, setCustomStepContent] = useState<React.ReactNode | undefined>();
  const [windowWidth, setWindowWidth] = useState<number>();
  const unObserver = useRef(null);

  const isMobile = windowWidth < 500;

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
      if (prev === undefined) {
        return prev;
      }
      return prev + 1;
    });
  }, []);

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
  const isFinished = currentStep !== undefined ? currentStep >= steps.length : false;

  const renderTourStepElement = useCallback(
    (forStepId: string, child: React.ReactElement) => {
      if (!tourStep || forStepId !== tourStep.stepId) {
        return child;
      }
      return (
        <Popover
          isVisible
          showClose
          maxWidth={isMobile ? undefined : '28rem'}
          hideOnOutsideClick={false}
          position={tourStep.position}
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
                    <Button variant={ButtonVariant.primary} onClick={onNextStep}>
                      Next
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
    [tourStep, currentStep, steps, onNextStep, onPrevStep, onFinish, customStepContent, isMobile]
  );

  const measureRef = (ref: HTMLDivElement) => {
    // Remove any previous observer
    if (unObserver.current) {
      unObserver.current();
    }

    if (!ref) {
      return;
    }

    const handleResize = () => setWindowWidth(ref.clientWidth);

    // Set size on initialization
    handleResize();

    const debounceResize = debounce(handleResize, 100);

    // Update graph size on resize events
    unObserver.current = getResizeObserver(ref, debounceResize);
  };

  useEffect(
    () => () => {
      if (unObserver.current) {
        unObserver.current();
      }
    },
    []
  );

  return (
    <GuidedTourContext.Provider
      value={{
        onStart,
        onNextStep,
        onPrevStep,
        onFinish,
        setCustomStepContent,
        renderTourStepElement,
        tourStep,
        isFinished
      }}
    >
      <div ref={measureRef} style={{ width: '100%' }} />
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

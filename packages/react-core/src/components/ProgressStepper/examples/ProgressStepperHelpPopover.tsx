import React from 'react';
import { ProgressStepper, ProgressStep, Popover } from '@patternfly/react-core';

export const PopoverProgressStep = () => (
  <ProgressStepper>
    <ProgressStep
      variant="success"
      id="popover-step1"
      titleId="popover-step1-title"
      aria-label="completed step with popover, step with success"
      popoverRender={stepRef => (
        <Popover
          aria-label="First step help"
          headerContent={<div>First step popover</div>}
          bodyContent={<div>Additional info or help text content.</div>}
          reference={stepRef}
          position="right"
        />
      )}
    >
      First step
    </ProgressStep>
    <ProgressStep
      variant="danger"
      id="popover-step2"
      titleId="popover-step2-title"
      aria-label="completed step with popover, step with danger"
      popoverRender={stepRef => (
        <Popover
          aria-label="Second step help"
          headerContent={<div>Second step popover</div>}
          bodyContent={<div>Additional info or help text content.</div>}
          reference={stepRef}
          position="right"
        />
      )}
    >
      Second step
    </ProgressStep>
    <ProgressStep
      variant="info"
      id="popover-step3"
      titleId="popover-step3-title"
      aria-label="step with popover"
      popoverRender={stepRef => (
        <Popover
          aria-label="Third step help"
          headerContent={<div>Third step popover</div>}
          bodyContent={<div>Additional info or help text content.</div>}
          reference={stepRef}
          position="right"
        />
      )}
      isCurrent
    >
      Third step
    </ProgressStep>
    <ProgressStep variant="pending" id="popover-step4" titleId="popover-step4-title" aria-label="pending step">
      Fourth step
    </ProgressStep>
  </ProgressStepper>
);

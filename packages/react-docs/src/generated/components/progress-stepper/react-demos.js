import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Progress stepper",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/progress-stepper/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/ProgressStepperDemo.md",
  "beta": true,
  "examples": [
    "Basic"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ProgressStepper, ProgressStep, Button, Stack, StackItem } from '@patternfly/react-core';\n\nProgressStepperDemo = () => {\n  const [currentStep, setCurrentStep] = React.useState(0);\n\n  const steps = [\n    { title: 'First step', id: 'step1' },\n    { title: 'Second step', id: 'step2' },\n    { title: 'Third step', id: 'step3' },\n    { title: 'Fourth step', id: 'step4' },\n    { title: 'Fifth step', id: 'step5' }\n  ];\n\n  const onStepForward = event => {\n    const next = currentStep + 1;\n    setCurrentStep(next <= 5 ? next : 4);\n  };\n\n  const onStepBack = event => {\n    const next = currentStep - 1;\n    setCurrentStep(next > 0 ? next : 0);\n  };\n\n  return (\n    <Stack>\n      <StackItem>\n        <Button onClick={onStepBack} isDisabled={currentStep === 0}>\n          Step back\n        </Button>{' '}\n        <Button onClick={onStepForward} isDisabled={currentStep === 5}>\n          Step forward\n        </Button>\n        <br />\n        <br />\n      </StackItem>\n      <StackItem>\n        <div className=\"pf-screen-reader\" aria-live=\"polite\">\n          {steps[currentStep] && `On ${steps[currentStep].title}.`}\n          {steps[currentStep - 1] && `${steps[currentStep - 1].title} was successful.`}\n        </div>\n        <ProgressStepper>\n          {steps.map((step, index) => {\n            let variant = 'pending';\n            let ariaLabel = 'pending step';\n            if (index < currentStep) {\n              variant = 'success';\n              ariaLabel = 'completed step, step with success';\n            } else if (index === currentStep) {\n              variant = 'info';\n              ariaLabel = 'current step';\n            }\n\n            return (\n              <ProgressStep\n                id={index}\n                titleId={step.id}\n                key={index}\n                variant={variant}\n                isCurrent={index === currentStep}\n                aria-label={ariaLabel}\n              >\n                {step.title}\n              </ProgressStep>\n            );\n          })}\n        </ProgressStepper>\n      </StackItem>\n    </Stack>\n  );\n};","title":"Basic","lang":"js"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsProgressStepperReactDemosDocs';
Component.pageData = pageData;

export default Component;

import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';
import PendingIcon from '@patternfly/react-icons/dist/esm/icons/pending-icon';
const pageData = {
  "id": "Progress stepper",
  "section": "components",
  "source": "react",
  "slug": "/components/progress-stepper/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/ProgressStepper/examples/ProgressStepper.md",
  "propComponents": [
    {
      "name": "ProgressStepper",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the progress stepper."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the progress stepper container."
        },
        {
          "name": "isCenterAligned",
          "type": "boolean",
          "description": "Flag indicating the progress stepper should be centered."
        },
        {
          "name": "isCompact",
          "type": "boolean",
          "description": "Flag indicating the progress stepper should be rendered compactly."
        },
        {
          "name": "isVertical",
          "type": "boolean",
          "description": "Flag indicating the progress stepper has a vertical layout."
        }
      ]
    },
    {
      "name": "ProgressStep",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Accessible label for the progress step. Should communicate all information being communicated by the progress\nstep's icon, including the variant and the completed status."
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the progress step."
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes applied to the progress step container."
        },
        {
          "name": "description",
          "type": "string",
          "description": "Description text of a progress step."
        },
        {
          "name": "icon",
          "type": "React.ReactNode",
          "description": "Custom icon of a progress step. Will override default icons provided by the variant."
        },
        {
          "name": "isCurrent",
          "type": "boolean",
          "description": "Flag indicating the progress step is the current step."
        },
        {
          "name": "popoverRender",
          "type": "(stepRef: React.RefObject<any>) => React.ReactNode",
          "description": "Forwards the step ref to rendered function.  Use this prop to add a popover to the step."
        },
        {
          "name": "titleId",
          "type": "string",
          "description": "ID of the title of the progress step."
        },
        {
          "name": "variant",
          "type": "'default' | 'success' | 'info' | 'pending' | 'warning' | 'danger'",
          "description": "Variant of the progress step. Each variant has a default icon."
        }
      ]
    }
  ],
  "beta": true,
  "cssPrefix": [
    "pf-c-progress-stepper"
  ],
  "examples": [
    "Basic",
    "Basic with descriptions",
    "Center aligned with descriptions",
    "Vertical with descriptions",
    "Compact",
    "Basic with an issue",
    "Basic with a failure",
    "Basic with Patternfly icons",
    "With help popover"
  ]
};
pageData.liveContext = {
  InProgressIcon,
  PendingIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ProgressStepper, ProgressStep } from '@patternfly/react-core';\n\nconst Basic = () => (\n  <ProgressStepper>\n    <ProgressStep\n      variant=\"success\"\n      id=\"basic-step1\"\n      titleId=\"basic-step1-title\"\n      aria-label=\"completed step, step with success\"\n    >\n      First step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"info\"\n      isCurrent\n      id=\"basic-step2\"\n      titleId=\"basic-step2-title\"\n      aria-label=\"step with info\"\n    >\n      Second step\n    </ProgressStep>\n    <ProgressStep variant=\"pending\" id=\"basic-step3\" titleId=\"basic-step3-title\" aria-label=\"pending step\">\n      Third step\n    </ProgressStep>\n  </ProgressStepper>\n)","title":"Basic","lang":"js"}}>
      
    </Example>,
  'Basic with descriptions': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ProgressStepper, ProgressStep } from '@patternfly/react-core';\n\nconst BasicWithDescriptions = () => (\n  <ProgressStepper>\n    <ProgressStep\n      variant=\"success\"\n      description=\"This is the first thing to happen\"\n      id=\"basic-desc-step1\"\n      titleId=\"basic-desc-step1-title\"\n      aria-label=\"completed step, step with success\"\n    >\n      First step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"info\"\n      isCurrent\n      description=\"This is the second thing to happen\"\n      id=\"basic-desc-step2\"\n      titleId=\"basic-desc-step2-title\"\n      aria-label=\"step with info\"\n    >\n      Second step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"pending\"\n      description=\"This is the last thing to happen\"\n      id=\"basic-desc-step3\"\n      titleId=\"basic-desc-step3-title\"\n      aria-label=\"pending step\"\n    >\n      Third step\n    </ProgressStep>\n  </ProgressStepper>\n)","title":"Basic with descriptions","lang":"js"}}>
      
    </Example>,
  'Center aligned with descriptions': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ProgressStepper, ProgressStep } from '@patternfly/react-core';\n\nconst CenterAlignedWithDescriptions = () => (\n  <ProgressStepper isCenterAligned>\n    <ProgressStep\n      variant=\"success\"\n      description=\"This is the first thing to happen\"\n      id=\"center-desc-step1\"\n      titleId=\"center-desc-step1-title\"\n      aria-label=\"completed step, step with success\"\n    >\n      First step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"info\"\n      isCurrent\n      description=\"This is the second thing to happen\"\n      id=\"center-desc-step2\"\n      titleId=\"center-desc-step2-title\"\n      aria-label=\"step with info\"\n    >\n      Second step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"pending\"\n      description=\"This is the last thing to happen\"\n      id=\"center-desc-step3\"\n      titleId=\"center-desc-step3-title\"\n      aria-label=\"pending step\"\n    >\n      Third step\n    </ProgressStep>\n  </ProgressStepper>\n)","title":"Center aligned with descriptions","lang":"js"}}>
      
    </Example>,
  'Vertical with descriptions': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ProgressStepper, ProgressStep } from '@patternfly/react-core';\n\nconst VerticalWithDescriptions = () => (\n  <ProgressStepper isVertical>\n    <ProgressStep\n      variant=\"success\"\n      description=\"This is the first thing to happen\"\n      id=\"vertical-desc-step1\"\n      titleId=\"vertical-desc-step1-title\"\n      aria-label=\"completed step, step with success\"\n    >\n      First step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"info\"\n      isCurrent\n      description=\"This is the second thing to happen\"\n      id=\"vertical-desc-step2\"\n      titleId=\"vertical-desc-step2-title\"\n      aria-label=\"step with info\"\n    >\n      Second step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"pending\"\n      description=\"This is the last thing to happen\"\n      id=\"vertical-desc-step3\"\n      titleId=\"vertical-desc-step3-title\"\n      aria-label=\"pending step\"\n    >\n      Third step\n    </ProgressStep>\n  </ProgressStepper>\n)","title":"Vertical with descriptions","lang":"js"}}>
      
    </Example>,
  'Compact': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ProgressStepper, ProgressStep } from '@patternfly/react-core';\n\nconst Compact = () => (\n  <ProgressStepper isCompact>\n    <ProgressStep\n      variant=\"success\"\n      id=\"compact-step1\"\n      titleId=\"compact-step1-title\"\n      aria-label=\"completed step, step with success\"\n    >\n      First step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"info\"\n      isCurrent\n      id=\"compact-step2\"\n      titleId=\"compact-step2-title\"\n      aria-label=\"step with info\"\n    >\n      Second step\n    </ProgressStep>\n    <ProgressStep variant=\"pending\" id=\"compact-step3\" titleId=\"compact-step3-title\" aria-label=\"pending step\">\n      Third step\n    </ProgressStep>\n  </ProgressStepper>\n)","title":"Compact","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Compact progress steppers will only display the current step's `}
        
        <code {...{"className":"ws-code"}}>
          {`title`}
        </code>
        {`, and will not display any steps' `}
        
        <code {...{"className":"ws-code"}}>
          {`description`}
        </code>
        {` texts.`}
      </p>
    </Example>,
  'Basic with an issue': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ProgressStepper, ProgressStep } from '@patternfly/react-core';\n\nconst BasicWithAnIssue = () => (\n  <ProgressStepper>\n    <ProgressStep\n      variant=\"success\"\n      id=\"basic-with-issue-step1\"\n      titleId=\"basic-with-issue-step1-title\"\n      aria-label=\"completed step, step with success\"\n    >\n      First step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"success\"\n      id=\"basic-with-issue-step2\"\n      titleId=\"basic-with-issue-step2-title\"\n      aria-label=\"completed step, step with success\"\n    >\n      Second step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"warning\"\n      id=\"basic-with-issue-step3\"\n      titleId=\"basic-with-issue-step3-title\"\n      aria-label=\"completed step, step with warning\"\n    >\n      Third step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"info\"\n      isCurrent\n      id=\"basic-with-issue-step4\"\n      titleId=\"basic-with-issue-step4-title\"\n      aria-label=\"step with info\"\n    >\n      Fourth step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"pending\"\n      id=\"basic-with-issue-step5\"\n      titleId=\"basic-with-issue-step5-title\"\n      aria-label=\"pending step\"\n    >\n      Fifth step\n    </ProgressStep>\n  </ProgressStepper>\n)","title":"Basic with an issue","lang":"js"}}>
      
    </Example>,
  'Basic with a failure': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ProgressStepper, ProgressStep } from '@patternfly/react-core';\n\nconst BasicWithAFailure = () => (\n  <ProgressStepper>\n    <ProgressStep\n      variant=\"success\"\n      id=\"basic-with-failure-step1\"\n      titleId=\"basic-with-failure-step1-title\"\n      aria-label=\"completed step, step with success\"\n    >\n      First step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"success\"\n      id=\"basic-with-failure-step2\"\n      titleId=\"basic-with-failure-step2-title\"\n      aria-label=\"completed step, step with success\"\n    >\n      Second step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"success\"\n      id=\"basic-with-failure-step3\"\n      titleId=\"basic-with-failure-step3-title\"\n      aria-label=\"completed step, step with success\"\n    >\n      Third step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"danger\"\n      isCurrent\n      id=\"basic-with-failure-step4\"\n      titleId=\"basic-with-failure-step4-title\"\n      aria-label=\"step with danger\"\n    >\n      Fourth step\n    </ProgressStep>\n    <ProgressStep\n      variant=\"pending\"\n      id=\"basic-with-failure-step5\"\n      titleId=\"basic-with-failure-step5-title\"\n      aria-label=\"pending step\"\n    >\n      Fifth step\n    </ProgressStep>\n  </ProgressStepper>\n)","title":"Basic with a failure","lang":"js"}}>
      
    </Example>,
  'Basic with Patternfly icons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ProgressStepper, ProgressStep } from '@patternfly/react-core';\nimport InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';\nimport PendingIcon from '@patternfly/react-icons/dist/esm/icons/pending-icon';\n\nconst BasicWithPatternflyIcons = () => (\n  <ProgressStepper>\n    <ProgressStep\n      variant=\"success\"\n      id=\"custom-step1\"\n      titleId=\"custom-step1-title\"\n      aria-label=\"completed step, step with success\"\n    >\n      Successful completion\n    </ProgressStep>\n    <ProgressStep\n      isCurrent\n      icon={<InProgressIcon />}\n      id=\"custom-step2\"\n      titleId=\"custom-step2-title\"\n      aria-label=\"in progress\"\n    >\n      In process\n    </ProgressStep>\n    <ProgressStep\n      variant=\"pending\"\n      icon={<PendingIcon />}\n      id=\"custom-step3\"\n      titleId=\"custom-step3-title\"\n      aria-label=\"pending step\"\n    >\n      Pending\n    </ProgressStep>\n  </ProgressStepper>\n)","title":"Basic with Patternfly icons","lang":"js"}}>
      
    </Example>,
  'With help popover': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { ProgressStepper, ProgressStep, Popover } from '@patternfly/react-core';\n\nPopoverProgressStep = () => {\n  return (\n    <ProgressStepper>\n      <ProgressStep\n        variant=\"success\"\n        id=\"popover-step1\"\n        titleId=\"popover-step1-title\"\n        aria-label=\"completed step with popover, step with success\"\n        popoverRender={( stepRef ) => (\n          <Popover\n            aria-label=\"First step help\"\n            headerContent={<div>First step popover</div>}\n            bodyContent={<div>Additional info or help text content.</div>}\n            reference={stepRef}\n            position=\"right\"\n          />\n           )}\n      >\n        First step\n      </ProgressStep>\n      <ProgressStep\n        variant=\"danger\"\n        id=\"popover-step2\"\n        titleId=\"popover-step2-title\"\n        aria-label=\"completed step with popover, step with danger\"\n        popoverRender={( stepRef ) => (\n          <Popover\n            aria-label=\"Second step help\"\n            headerContent={<div>Second step popover</div>}\n            bodyContent={<div>Additional info or help text content.</div>}\n            reference={stepRef}\n            position=\"right\"\n          />\n        )}\n      >\n        Second step\n      </ProgressStep>\n      <ProgressStep\n        variant=\"info\"\n        id=\"popover-step3\"\n        titleId=\"popover-step3-title\"\n        aria-label=\"step with popover\"\n        popoverRender={(stepRef) => (\n          <Popover\n            aria-label=\"Third step help\"\n            headerContent={<div>Third step popover</div>}\n            bodyContent={<div>Additional info or help text content.</div>}\n            reference={stepRef}\n            position=\"right\"\n          />\n        )}\n        isCurrent\n      >\n        Third step\n      </ProgressStep>\n      <ProgressStep variant=\"pending\" id=\"popover-step4\" titleId=\"popover-step4-title\" aria-label=\"pending step\">\n        Fourth step\n      </ProgressStep>\n    </ProgressStepper>\n  );\n};","title":"With help popover","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`To add a popover to a progress step, set the `}
        
        <code {...{"className":"ws-code"}}>
          {`popoverRender`}
        </code>
        {` properties on the `}
        
        <code {...{"className":"ws-code"}}>
          {`ProgressStep`}
        </code>
        {` component.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Progress steppers have default icons associated with the `}
      <code {...{"className":"ws-code"}}>
        {`variant`}
      </code>
      {` property, and may be overriden and customized using the `}
      <code {...{"className":"ws-code"}}>
        {`icon`}
      </code>
      {` property.`}
    </p>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Basic with descriptions"])}
    {React.createElement(pageData.examples["Center aligned with descriptions"])}
    {React.createElement(pageData.examples["Vertical with descriptions"])}
    {React.createElement(pageData.examples["Compact"])}
    {React.createElement(pageData.examples["Basic with an issue"])}
    {React.createElement(pageData.examples["Basic with a failure"])}
    {React.createElement(pageData.examples["Basic with Patternfly icons"])}
    {React.createElement(pageData.examples["With help popover"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsProgressStepperReactDocs';
Component.pageData = pageData;

export default Component;

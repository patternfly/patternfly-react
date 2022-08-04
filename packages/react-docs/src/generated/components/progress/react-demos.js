import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Progress",
  "section": "components",
  "source": "react-demos",
  "slug": "/components/progress/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/ProgressDemo.md",
  "examples": [
    "Basic",
    "With only increasing progress"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, Button, Stack, StackItem } from '@patternfly/react-core';\n\nProgressStepperDemo = () => {\n  const [currentValue, setCurrentValue] = React.useState(0);\n\n  const onProgressUpdate = nextValue => {\n    setCurrentValue(nextValue);\n  };\n\n  return (\n    <Stack>\n      <StackItem>\n        <Button onClick={() => onProgressUpdate(currentValue - 10)} isDisabled={currentValue === 0}>\n          Decrease value\n        </Button>{' '}\n        <Button onClick={() => onProgressUpdate(currentValue + 10)} isDisabled={currentValue === 100}>\n          Increase value\n        </Button>\n        <br />\n        <br />\n      </StackItem>\n      <StackItem>\n        <div className=\"pf-screen-reader\" aria-live=\"polite\">\n          {`Progress value is ${currentValue}%.`}\n        </div>\n        <Progress value={currentValue} title=\"Title\" />\n      </StackItem>\n    </Stack>\n  );\n};","title":"Basic","lang":"js"}}>
      
    </Example>,
  'With only increasing progress': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, Button, Stack, StackItem } from '@patternfly/react-core';\n\nProgressStepperDemo = () => {\n  const [currentValue, setCurrentValue] = React.useState(0);\n\n  const onProgressUpdate = nextValue => {\n    if (nextValue > currentValue) {\n      setCurrentValue(nextValue);\n    }\n  };\n\n  return (\n    <Stack>\n      <StackItem>\n        <Button onClick={() => onProgressUpdate(currentValue - 10)} isDisabled={currentValue === 0}>\n          Decrease value\n        </Button>{' '}\n        <Button onClick={() => onProgressUpdate(currentValue + 10)} isDisabled={currentValue === 100}>\n          Increase value\n        </Button>\n        <br />\n        <br />\n      </StackItem>\n      <StackItem>\n        <div className=\"pf-screen-reader\" aria-live=\"polite\">\n          {`Progress value is ${currentValue}%.`}\n        </div>\n        <Progress value={currentValue} title=\"Title\" />\n      </StackItem>\n    </Stack>\n  );\n};","title":"With only increasing progress","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Sometimes a progress bar should only show increases to progress state. In this case, before the next value is set it should be checked against the current progress. The `}
        
        <code {...{"className":"ws-code"}}>
          {`Decrease progress`}
        </code>
        {` button attempts to set a lower progress value, simulating an update to a progress state that isn't desired, but won't change the progress state due to this check.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["With only increasing progress"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsProgressReactDemosDocs';
Component.pageData = pageData;

export default Component;

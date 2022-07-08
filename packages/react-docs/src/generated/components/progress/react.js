import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Progress",
  "section": "components",
  "source": "react",
  "slug": "/components/progress/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Progress/examples/Progress.md",
  "propComponents": [
    {
      "name": "Progress",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds accessible text to the ProgressBar. Required when title not used and there is not any label associated with the progress bar",
          "defaultValue": "null"
        },
        {
          "name": "aria-labelledby",
          "type": "string",
          "description": "Associates the ProgressBar with it's label for accessibility purposes. Required when title not used",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Classname for progress component.",
          "defaultValue": "''"
        },
        {
          "name": "id",
          "type": "string",
          "description": "DOM id for progress component.",
          "defaultValue": "''"
        },
        {
          "name": "isTitleTruncated",
          "type": "boolean",
          "description": "Indicate whether to truncate the string title",
          "defaultValue": "false"
        },
        {
          "name": "label",
          "type": "React.ReactNode",
          "description": "Text description of current progress value to display instead of percentage.",
          "defaultValue": "null"
        },
        {
          "name": "max",
          "type": "number",
          "description": "Maximum value of progress.",
          "defaultValue": "100"
        },
        {
          "name": "measureLocation",
          "type": "'outside' | 'inside' | 'top' | 'none'",
          "description": "Where the measure percent will be located.",
          "defaultValue": "ProgressMeasureLocation.top"
        },
        {
          "name": "min",
          "type": "number",
          "description": "Minimal value of progress.",
          "defaultValue": "0"
        },
        {
          "name": "size",
          "type": "'sm' | 'md' | 'lg'",
          "description": "Size variant of progress.",
          "defaultValue": "null"
        },
        {
          "name": "title",
          "type": "React.ReactNode",
          "description": "Title above progress. The isTitleTruncated property will only affect string titles. Node title truncation must be handled manually.",
          "defaultValue": "''"
        },
        {
          "name": "tooltipPosition",
          "type": "'auto' | 'top' | 'bottom' | 'left' | 'right'",
          "description": "Position of the tooltip which is displayed if title is truncated",
          "defaultValue": "'top'"
        },
        {
          "name": "value",
          "type": "number",
          "description": "Actual value of progress.",
          "defaultValue": "0"
        },
        {
          "name": "valueText",
          "type": "string",
          "description": "Accessible text description of current progress value, for when value is not a percentage. Use with label.",
          "defaultValue": "null"
        },
        {
          "name": "variant",
          "type": "'danger' | 'success' | 'warning'",
          "description": "Status variant of progress.",
          "defaultValue": "null"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-progress"
  ],
  "examples": [
    "Basic",
    "Small",
    "Large",
    "Outside",
    "Inside",
    "Success",
    "Failure",
    "Warning",
    "Inside success",
    "Outside failure",
    "Single line",
    "Without measure",
    "Failure without measure",
    "Finite step",
    "Progress (step instruction)",
    "Truncate title",
    "Title outside of progress bar"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\nconst Basic = () => <Progress value={33} title=\"Title\" />","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Small': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\nconst Small = () => <Progress value={33} title=\"Title\" size={ProgressSize.sm} />","title":"Small","lang":"ts"}}>
      
    </Example>,
  'Large': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\nconst Large = () => <Progress value={33} title=\"Title\" size={ProgressSize.lg} />","title":"Large","lang":"ts"}}>
      
    </Example>,
  'Outside': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\nconst Outside = () => <Progress value={33} title=\"Title\" measureLocation={ProgressMeasureLocation.outside} />","title":"Outside","lang":"ts"}}>
      
    </Example>,
  'Inside': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\nconst Inside = () => <Progress value={33} title=\"Title\" measureLocation={ProgressMeasureLocation.inside} />","title":"Inside","lang":"ts"}}>
      
    </Example>,
  'Success': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\nconst Success = () => <Progress value={100} title=\"Title\" variant={ProgressVariant.success} />","title":"Success","lang":"ts"}}>
      
    </Example>,
  'Failure': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\nconst Failure = () => <Progress value={33} title=\"Title\" variant={ProgressVariant.danger} />","title":"Failure","lang":"ts"}}>
      
    </Example>,
  'Warning': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\nconst Warning = () => <Progress value={90} title=\"Title\" variant={ProgressVariant.warning} />","title":"Warning","lang":"ts"}}>
      
    </Example>,
  'Inside success': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\nconst InsideSuccess = () => (\n  <Progress\n    value={100}\n    title=\"Title\"\n    measureLocation={ProgressMeasureLocation.inside}\n    variant={ProgressVariant.success}\n  />\n)","title":"Inside success","lang":"ts"}}>
      
    </Example>,
  'Outside failure': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\nconst OutsideFailure = () => (\n  <Progress\n    value={33}\n    title=\"Title\"\n    measureLocation={ProgressMeasureLocation.outside}\n    variant={ProgressVariant.danger}\n  />\n)","title":"Outside failure","lang":"ts"}}>
      
    </Example>,
  'Single line': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\nconst SingleLine = () => <Progress value={33} measureLocation={ProgressMeasureLocation.outside} aria-label=\"Title\"/>","title":"Single line","lang":"ts"}}>
      
    </Example>,
  'Without measure': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, ProgressMeasureLocation } from '@patternfly/react-core';\n\nconst WithoutMeasure = () => <Progress value={33} title=\"Title\" measureLocation={ProgressMeasureLocation.none} />","title":"Without measure","lang":"ts"}}>
      
    </Example>,
  'Failure without measure': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';\n\nconst FailureWithoutMeasure = () => (\n  <Progress\n    value={33}\n    title=\"Title\"\n    measureLocation={ProgressMeasureLocation.none}\n    variant={ProgressVariant.danger}\n  />\n)","title":"Failure without measure","lang":"ts"}}>
      
    </Example>,
  'Finite step': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress, ProgressMeasureLocation } from '@patternfly/react-core';\n\nconst FiniteStep = () => <Progress value={2} min={0} max={5} title=\"Title\" measureLocation={ProgressMeasureLocation.top} label=\"2 of 5\" valueText=\"2 of 5\"/>","title":"Finite step","lang":"ts"}}>
      
    </Example>,
  'Progress (step instruction)': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress} from '@patternfly/react-core';\n\nconst ProgressstepInstruction = () => <Progress value={2} title=\"Title\" min={0} max={5} label=\"Step 2: Copying files\" valueText=\"Step 2: Copying files\" />","title":"Progress (step instruction)","lang":"ts"}}>
      
    </Example>,
  'Truncate title': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Progress } from '@patternfly/react-core';\n\nconst TruncateTitle = () => <Progress value={33} title=\"Very very very very very very very very very very very long title which should be truncated if it does not fit onto one line above the progress bar\" isTitleTruncated />","title":"Truncate title","lang":"ts"}}>
      
    </Example>,
  'Title outside of progress bar': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n    DescriptionList, \n    DescriptionListGroup, \n    DescriptionListTerm, \n    DescriptionListDescription,\n    Progress, \n    ProgressMeasureLocation,\n} from '@patternfly/react-core';\n\nconst TitleOutsideOfProgressBar = () => (\n  <DescriptionList>\n    <DescriptionListGroup>\n      <DescriptionListTerm id=\"progress-label\">\n          Title outside of progress bar\n      </DescriptionListTerm>\n      <DescriptionListDescription>\n        <Progress value={33} measureLocation={ProgressMeasureLocation.outside} aria-labelledby=\"progress-label\"/>\n      </DescriptionListDescription>\n    </DescriptionListGroup>\n  </DescriptionList>\n)","title":"Title outside of progress bar","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Small"])}
    {React.createElement(pageData.examples["Large"])}
    {React.createElement(pageData.examples["Outside"])}
    {React.createElement(pageData.examples["Inside"])}
    {React.createElement(pageData.examples["Success"])}
    {React.createElement(pageData.examples["Failure"])}
    {React.createElement(pageData.examples["Warning"])}
    {React.createElement(pageData.examples["Inside success"])}
    {React.createElement(pageData.examples["Outside failure"])}
    {React.createElement(pageData.examples["Single line"])}
    {React.createElement(pageData.examples["Without measure"])}
    {React.createElement(pageData.examples["Failure without measure"])}
    {React.createElement(pageData.examples["Finite step"])}
    {React.createElement(pageData.examples["Progress (step instruction)"])}
    {React.createElement(pageData.examples["Truncate title"])}
    {React.createElement(pageData.examples["Title outside of progress bar"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsProgressReactDocs';
Component.pageData = pageData;

export default Component;

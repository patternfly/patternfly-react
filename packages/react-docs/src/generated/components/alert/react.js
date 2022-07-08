import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../react-core/src/components/Alert/examples/./alert.css';
import UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';
import BoxIcon from '@patternfly/react-icons/dist/esm/icons/box-icon';
import DatabaseIcon from '@patternfly/react-icons/dist/esm/icons/database-icon';
import ServerIcon from '@patternfly/react-icons/dist/esm/icons/server-icon';
import LaptopIcon from '@patternfly/react-icons/dist/esm/icons/laptop-icon';
const pageData = {
  "id": "Alert",
  "section": "components",
  "source": "react",
  "slug": "/components/alert/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/Alert/examples/Alert.md",
  "propComponents": [
    {
      "name": "Alert",
      "description": "",
      "props": [
        {
          "name": "actionClose",
          "type": "React.ReactNode",
          "description": "Close button; use the alertActionCloseButton component"
        },
        {
          "name": "actionLinks",
          "type": "React.ReactNode",
          "description": "Action links; use a single alertActionLink component or multiple wrapped in an array or React.Fragment"
        },
        {
          "name": "aria-label",
          "type": "string",
          "description": "Adds accessible text to the alert",
          "defaultValue": "`${capitalize(variant)} Alert`"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the alert",
          "defaultValue": "''"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the alert",
          "defaultValue": "''"
        },
        {
          "name": "customIcon",
          "type": "React.ReactNode",
          "description": "Set a custom icon to the alert. If not set the icon is set according to the variant"
        },
        {
          "name": "isExpandable",
          "type": "boolean",
          "description": "Flag indicating that the alert is expandable",
          "defaultValue": "false"
        },
        {
          "name": "isInline",
          "type": "boolean",
          "description": "Flag to indicate if the alert is inline",
          "defaultValue": "false"
        },
        {
          "name": "isLiveRegion",
          "type": "boolean",
          "description": "Flag to indicate if the alert is in a live region",
          "defaultValue": "false"
        },
        {
          "name": "isPlain",
          "type": "boolean",
          "description": "Flag to indicate if the alert is plain",
          "defaultValue": "false"
        },
        {
          "name": "onMouseEnter",
          "type": "No type info",
          "defaultValue": "() => {}"
        },
        {
          "name": "onMouseLeave",
          "type": "No type info",
          "defaultValue": "() => {}"
        },
        {
          "name": "onTimeout",
          "type": "() => void",
          "description": "Function to be executed on alert timeout. Relevant when the timeout prop is set",
          "defaultValue": "() => {}"
        },
        {
          "name": "ouiaSafe",
          "type": "No type info",
          "defaultValue": "true"
        },
        {
          "name": "timeout",
          "type": "number | boolean",
          "description": "If set to true, the timeout is 8000 milliseconds. If a number is provided, alert will be dismissed after that amount of time in milliseconds.",
          "defaultValue": "false"
        },
        {
          "name": "timeoutAnimation",
          "type": "number",
          "description": "If the user hovers over the alert and `timeout` expires, this is how long to wait before finally dismissing the alert",
          "defaultValue": "3000"
        },
        {
          "name": "title",
          "type": "React.ReactNode",
          "description": "Title of the alert",
          "required": true
        },
        {
          "name": "titleHeadingLevel",
          "type": "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'",
          "description": "Sets the heading level to use for the alert title. Default is h4.",
          "defaultValue": "'h4'"
        },
        {
          "name": "toggleAriaLabel",
          "type": "string",
          "description": "Adds accessible text to the alert Toggle",
          "defaultValue": "`${capitalize(variant)} alert details`"
        },
        {
          "name": "tooltipPosition",
          "type": "TooltipPosition\n| 'auto'\n| 'top'\n| 'bottom'\n| 'left'\n| 'right'\n| 'top-start'\n| 'top-end'\n| 'bottom-start'\n| 'bottom-end'\n| 'left-start'\n| 'left-end'\n| 'right-start'\n| 'right-end'",
          "description": "Position of the tooltip which is displayed if text is truncated"
        },
        {
          "name": "truncateTitle",
          "type": "number",
          "description": "Truncate title to number of lines",
          "defaultValue": "0"
        },
        {
          "name": "variant",
          "type": "'success' | 'danger' | 'warning' | 'info' | 'default'",
          "description": "Adds alert variant styles",
          "defaultValue": "AlertVariant.default"
        },
        {
          "name": "variantLabel",
          "type": "string",
          "description": "Variant label text for screen readers",
          "defaultValue": "`${capitalize(variant)} alert:`"
        }
      ]
    },
    {
      "name": "AlertActionCloseButton",
      "description": "",
      "props": [
        {
          "name": "aria-label",
          "type": "string",
          "description": "Aria Label for the Close button",
          "defaultValue": "''"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the AlertActionCloseButton",
          "defaultValue": "''"
        },
        {
          "name": "onClose",
          "type": "() => void",
          "description": "A callback for when the close button is clicked",
          "defaultValue": "() => undefined as any"
        },
        {
          "name": "variantLabel",
          "type": "string",
          "description": "Variant Label for the Close button"
        }
      ]
    },
    {
      "name": "AlertActionLink",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "string",
          "description": "Content rendered inside the AlertLinkAction"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the AlertActionLink",
          "defaultValue": "''"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-alert"
  ],
  "examples": [
    "Types",
    "Variations",
    "Inline types",
    "Inline variations",
    "Inline plain types",
    "Inline plain variations",
    "Expandable",
    "Static live region alert",
    "Dynamic live region alert",
    "Async live region alert",
    "Alert timeout",
    "Truncate",
    "Custom icons"
  ]
};
pageData.liveContext = {
  UsersIcon,
  BoxIcon,
  DatabaseIcon,
  ServerIcon,
  LaptopIcon
};
pageData.examples = {
  'Types': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert } from '@patternfly/react-core';\n\nconst Types = () => (\n  <React.Fragment>\n    <Alert title=\"Default alert title\" />\n    <Alert variant=\"info\" title=\"Info alert title\" />\n    <Alert variant=\"success\" title=\"Success alert title\" />\n    <Alert variant=\"warning\" title=\"Warning alert title\" />\n    <Alert variant=\"danger\" title=\"Danger alert title\" />\n  </React.Fragment>\n)","title":"Types","lang":"ts"}}>
      
    </Example>,
  'Variations': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertActionCloseButton, AlertActionLink } from '@patternfly/react-core';\n\nconst Variations = () => (\n  <React.Fragment>\n    <Alert\n      variant=\"success\"\n      title=\"Success alert title\"\n      actionClose={<AlertActionCloseButton onClose={() => alert('Clicked the close button')} />}\n      actionLinks={\n        <React.Fragment>\n          <AlertActionLink onClick={() => alert('Clicked on View details')}>View details</AlertActionLink>\n          <AlertActionLink onClick={() => alert('Clicked on Ignore')}>Ignore</AlertActionLink>\n        </React.Fragment>\n      }\n    >\n      <p>Success alert description. This should tell the user more information about the alert.</p>\n    </Alert>\n    <Alert variant=\"success\" title=\"Success alert title\" actionClose={<AlertActionCloseButton onClose={() => alert('Clicked the close button')} />}>\n      <p>\n        Success alert description. This should tell the user more information about the alert.{' '}\n        <a href=\"#\">This is a link.</a>\n      </p>\n    </Alert>\n    <Alert\n      variant=\"success\"\n      title=\"Success alert title\"\n      actionClose={<AlertActionCloseButton onClose={() => alert('Clicked the close button')} />}\n      actionLinks={\n        <React.Fragment>\n          <AlertActionLink onClick={() => alert('Clicked on View details')}>View details</AlertActionLink>\n          <AlertActionLink onClick={() => alert('Clicked on Ignore')}>Ignore</AlertActionLink>\n        </React.Fragment>\n      }\n    />\n    <Alert variant=\"success\" title=\"Success alert title\" actionClose={<AlertActionCloseButton onClose={() => alert('Clicked the close button')} />} />\n    <Alert variant=\"success\" title=\"h1 Success alert title\" titleHeadingLevel=\"h1\" />\n    <Alert variant=\"success\" title=\"h6 Success alert title\" titleHeadingLevel=\"h6\" />\n    </React.Fragment>\n)","title":"Variations","lang":"ts"}}>
      
    </Example>,
  'Inline types': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert } from '@patternfly/react-core';\n\nconst InlineTypes = () => (\n  <React.Fragment>\n    <Alert variant=\"default\" isInline title=\"Default inline alert title\" />\n    <Alert variant=\"info\" isInline title=\"Info inline alert title\" />\n    <Alert variant=\"success\" isInline title=\"Success inline alert title\" />\n    <Alert variant=\"warning\" isInline title=\"Warning inline alert title\" />\n    <Alert variant=\"danger\" isInline title=\"Danger inline alert title\" />\n  </React.Fragment>\n)","title":"Inline types","lang":"ts"}}>
      
    </Example>,
  'Inline variations': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertActionCloseButton, AlertActionLink } from '@patternfly/react-core';\n\nconst InlineVariations = () => (\n  <React.Fragment>\n    <Alert\n      isInline\n      variant=\"success\"\n      title=\"Success alert title\"\n      actionClose={<AlertActionCloseButton onClose={() => alert('Clicked the close button')} />}\n      actionLinks={\n        <React.Fragment>\n          <AlertActionLink onClick={() => alert('Clicked on View details')}>View details</AlertActionLink>\n          <AlertActionLink onClick={() => alert('Clicked on Ignore')}>Ignore</AlertActionLink>\n        </React.Fragment>\n      }\n    >\n      <p>Success alert description. This should tell the user more information about the alert.</p>\n    </Alert>\n    <Alert isInline variant=\"success\" title=\"Success alert title\" actionClose={<AlertActionCloseButton onClose={() => alert('Clicked the close button')} />}>\n      <p>\n        Success alert description. This should tell the user more information about the alert.{' '}\n        <a href=\"#\">This is a link.</a>\n      </p>\n    </Alert>\n    <Alert\n      isInline\n      variant=\"success\"\n      title=\"Success alert title\"\n      actionClose={<AlertActionCloseButton onClose={() => alert('Clicked the close button')} />}\n      actionLinks={\n        <React.Fragment>\n          <AlertActionLink onClick={() => alert('Clicked on View details')}>View details</AlertActionLink>\n          <AlertActionLink onClick={() => alert('Clicked on Ignore')}>Ignore</AlertActionLink>\n        </React.Fragment>\n      }\n    />\n    <Alert\n      isInline\n      variant=\"success\"\n      title=\"Success alert title\"\n      actionClose={<AlertActionCloseButton onClose={() => alert('Clicked the close button')} />}\n    />\n    <Alert isInline variant=\"success\" title=\"Success alert title\" />\n  </React.Fragment>\n)","title":"Inline variations","lang":"ts"}}>
      
    </Example>,
  'Inline plain types': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert } from '@patternfly/react-core';\n\nconst InlinePlainTypes = () => (\n  <React.Fragment>\n    <Alert variant=\"default\" isInline isPlain title=\"Default inline alert title\" />\n    <Alert variant=\"info\" isInline isPlain title=\"Info inline alert title\" />\n    <Alert variant=\"success\" isInline isPlain title=\"Success inline alert title\" />\n    <Alert variant=\"warning\" isInline isPlain title=\"Warning inline alert title\" />\n    <Alert variant=\"danger\" isInline isPlain title=\"Danger inline alert title\" />\n  </React.Fragment>\n)","title":"Inline plain types","lang":"ts"}}>
      
    </Example>,
  'Inline plain variations': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertActionCloseButton, AlertActionLink } from '@patternfly/react-core';\n\nconst InlinePlainVariations = () => (\n  <Alert\n    isInline\n    isPlain\n    variant=\"success\"\n    title=\"Success alert title\"\n  >\n    <p>Success alert description. This should tell the user more information about the alert.</p>\n  </Alert>\n)","title":"Inline plain variations","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`It is not recommended to use an inline plain alert with actionClose nor actionLinks.`}
      </p>
    </Example>,
  'Expandable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertActionCloseButton, AlertActionLink } from '@patternfly/react-core';\n\nconst Expandable = () => (\n  <React.Fragment>\n    <Alert\n      isExpandable\n      variant=\"success\"\n      title=\"Success alert title\"\n      actionClose={<AlertActionCloseButton onClose={() => alert('Clicked the close button')} />}\n      actionLinks={\n        <React.Fragment>\n          <AlertActionLink onClick={() => alert('Clicked on View details')}>View details</AlertActionLink>\n          <AlertActionLink onClick={() => alert('Clicked on Ignore')}>Ignore</AlertActionLink>\n        </React.Fragment>\n      }\n    >\n      <p>Success alert description. This should tell the user more information about the alert.</p>\n    </Alert>\n    <Alert\n      isExpandable\n      isInline\n      variant=\"success\"\n      title=\"Success alert title\"\n      actionClose={<AlertActionCloseButton onClose={() => alert('Clicked the close button')} />}\n      actionLinks={\n        <React.Fragment>\n          <AlertActionLink onClick={() => alert('Clicked on View details')}>View details</AlertActionLink>\n          <AlertActionLink onClick={() => alert('Clicked on Ignore')}>Ignore</AlertActionLink>\n        </React.Fragment>\n      } \n    >\n      <p>Success alert description. This should tell the user more information about the alert.</p>\n    </Alert>\n  </React.Fragment>\n)","title":"Expandable","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`It is not recommended to use an expandable alert within a toast Alert group. In such a case, the Alert could timeout before users would have time to interact and view the entire Alert.`}
      </p>
    </Example>,
  'Static live region alert': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertActionCloseButton } from '@patternfly/react-core';\n\nconst StaticLiveRegionAlert = () => (\n  <React.Fragment>\n    <Alert\n      isLiveRegion\n      variant=\"info\"\n      title=\"Default live region configuration\"\n      actionClose={<AlertActionCloseButton onClose={() => alert('Clicked the close button')} />}\n    >\n      This alert uses the recommended <code>isLiveRegion</code> prop to automatically set ARIA attributes and CSS classes.\n    </Alert>\n    <Alert\n      aria-live=\"assertive\"\n      aria-relevant=\"additions text\"\n      aria-atomic=\"true\"\n      variant=\"info\"\n      title=\"Customized live region\"\n      actionClose={<AlertActionCloseButton onClose={() => alert('Clicked the close button')} />}\n    >\n      You can alternatively omit the <code>isLiveRegion</code> prop to specify ARIA attributes and CSS manually on\n      the containing element.\n    </Alert>\n  </React.Fragment>\n)","title":"Static live region alert","lang":"ts"}}>
      
    </Example>,
  'Dynamic live region alert': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertGroup, AlertVariant, InputGroup } from '@patternfly/react-core';\n\ninterface AlertInfo {\n  title: string;\n  variant: AlertVariant;\n  key: number;\n}\n\nexport const DynamicLiveRegionAlert: React.FunctionComponent = () => {\n  const [alerts, setAlerts] = React.useState<AlertInfo[]>([]);\n  const getUniqueId: () => number = () => new Date().getTime();\n  const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');\n\n  const addAlert = (alertInfo: AlertInfo) => {\n    setAlerts(prevAlertInfo => [...prevAlertInfo, alertInfo]);\n  };\n\n  const addSuccessAlert = () => {\n    addAlert({\n      title: 'Single success alert',\n      variant: AlertVariant.success,\n      key: getUniqueId()\n    });\n  };\n  const addInfoAlert = () => {\n    addAlert({\n      title: 'Single info alert',\n      variant: AlertVariant.info,\n      key: getUniqueId()\n    });\n  };\n  const addDangerAlert = () => {\n    addAlert({\n      title: 'Single danger alert',\n      variant: AlertVariant.danger,\n      key: getUniqueId()\n    });\n  };\n\n  return (\n    <React.Fragment>\n      <InputGroup style={{ marginBottom: '16px' }}>\n        <button onClick={addSuccessAlert} type=\"button\" className={btnClasses}>\n          Add single success alert\n        </button>\n        <button onClick={addInfoAlert} type=\"button\" className={btnClasses}>\n          Add single info alert\n        </button>\n        <button onClick={addDangerAlert} type=\"button\" className={btnClasses}>\n          Add single danger alert\n        </button>\n      </InputGroup>\n      <AlertGroup isLiveRegion aria-live=\"polite\" aria-relevant=\"additions text\" aria-atomic=\"false\">\n        {alerts.map(({ title, variant, key }) => (\n          <Alert variant={variant} title={title} key={key} />\n        ))}\n      </AlertGroup>\n    </React.Fragment>\n  );\n};\n","title":"Dynamic live region alert","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Alerts asynchronously appended into dynamic AlertGroups with isLiveRegion will be announced to assistive technology at the moment the change happens, following the strategy used for aria-atomic, which defaults to false. This means only changes of type "addition" will be announced.`}
      </p>
    </Example>,
  'Async live region alert': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertGroup, AlertVariant, ToggleGroup, ToggleGroupItem } from '@patternfly/react-core';\n\ninterface AlertInfo {\n  title: string;\n  variant: AlertVariant;\n  key: number;\n}\n\nexport const AsyncLiveRegionAlert: React.FunctionComponent = () => {\n  const [alerts, setAlerts] = React.useState<AlertInfo[]>([]);\n  const [isActive, setIsActive] = React.useState(false);\n  const getUniqueId: () => number = () => new Date().getTime();\n\n  const addAlert = (alertInfo: AlertInfo) => {\n    setAlerts(prevAlertInfo => [...prevAlertInfo, alertInfo]);\n  };\n\n  React.useEffect(() => {\n    let timer = null;\n    if (isActive) {\n      timer = setInterval(() => {\n        addAlert({\n          title: `Async alert number ${alerts.length + 1}`,\n          variant: AlertVariant.info,\n          key: getUniqueId()\n        });\n      }, 4500);\n    } else {\n      clearInterval(timer);\n    }\n\n    return () => {\n      clearInterval(timer);\n    };\n  }, [isActive, alerts]);\n\n  return (\n    <React.Fragment>\n      <ToggleGroup aria-label=\"Toggle asynchronous alerts\">\n        <ToggleGroupItem\n          text=\"Async alerts on\"\n          buttonId=\"async-alerts-on\"\n          isSelected={isActive}\n          onChange={() => setIsActive(true)}\n        />\n        <ToggleGroupItem\n          text=\"Async alerts off\"\n          buttonId=\"async-alerts-off\"\n          isSelected={!isActive}\n          onChange={() => setIsActive(false)}\n        />\n      </ToggleGroup>\n      <AlertGroup isLiveRegion>\n        {alerts.map(({ title, variant, key }) => (\n          <Alert variant={variant} title={title} key={key} />\n        ))}\n      </AlertGroup>\n    </React.Fragment>\n  );\n};\n","title":"Async live region alert","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This shows how an alert could be triggered by an asynchronous event in the application. Note that you can customize how the alert will be announced to assistive technology. See the alert accessibility tab for more information.`}
      </p>
    </Example>,
  'Alert timeout': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertActionLink, AlertGroup, Button } from '@patternfly/react-core';\n\nconst AlertTimeout: React.FunctionComponent = () => {\n  const [alerts, setAlerts] = React.useState<React.ReactNode[]>([]);\n  const onClick = () => {\n    const timeout = 8000;\n    setAlerts(prevAlerts => {\n      return [...prevAlerts,\n        <Alert title=\"Default timeout Alert\" timeout={timeout} actionLinks={\n          <React.Fragment>\n            <AlertActionLink>View details</AlertActionLink>\n            <AlertActionLink>Ignore</AlertActionLink>\n          </React.Fragment>\n        }>\n          This alert will dismiss after {`${timeout / 1000} seconds`}\n        </Alert>\n      ]\n    });\n  }\n\n  return (\n    <React.Fragment>\n      <Button variant=\"secondary\" onClick={onClick}>Add alert</Button>\n      <Button variant=\"secondary\" onClick={() => setAlerts([])}>Remove all alerts</Button>\n      <AlertGroup isLiveRegion>\n        {alerts}\n      </AlertGroup>\n    </React.Fragment>\n  );\n};","title":"Alert timeout","lang":"ts"}}>
      
    </Example>,
  'Truncate': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert } from '@patternfly/react-core';\n\nconst Truncate = () => (\n  <React.Fragment>\n    <Alert variant=\"info\" truncateTitle={1} title={`\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.\n    `} />\n    <Alert variant=\"warning\" truncateTitle={2} title={`\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.\n    `} />\n    <Alert variant=\"danger\" truncateTitle={3} title={`\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.\n    `} />\n  </React.Fragment>\n)","title":"Truncate","lang":"ts"}}>
      
    </Example>,
  'Custom icons': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert } from '@patternfly/react-core';\nimport UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';\nimport BoxIcon from '@patternfly/react-icons/dist/esm/icons/box-icon';\nimport DatabaseIcon from '@patternfly/react-icons/dist/esm/icons/database-icon';\nimport ServerIcon from '@patternfly/react-icons/dist/esm/icons/server-icon';\nimport LaptopIcon from '@patternfly/react-icons/dist/esm/icons/laptop-icon';\n\nconst CustomIcons = () => (\n  <React.Fragment>\n    <Alert customIcon={<UsersIcon />} title=\"Default alert title\" />\n    <Alert customIcon={<BoxIcon />} variant=\"info\" title=\"Info alert title\" />\n    <Alert customIcon={<DatabaseIcon />} variant=\"success\" title=\"Success alert title\" />\n    <Alert customIcon={<ServerIcon />} variant=\"warning\" title=\"Warning alert title\" />\n    <Alert customIcon={<LaptopIcon />} variant=\"danger\" title=\"Danger alert title\" />\n  </React.Fragment>\n)","title":"Custom icons","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Types"])}
    {React.createElement(pageData.examples["Variations"])}
    {React.createElement(pageData.examples["Inline types"])}
    {React.createElement(pageData.examples["Inline variations"])}
    {React.createElement(pageData.examples["Inline plain types"])}
    {React.createElement(pageData.examples["Inline plain variations"])}
    {React.createElement(pageData.examples["Expandable"])}
    {React.createElement(pageData.examples["Static live region alert"])}
    {React.createElement(pageData.examples["Dynamic live region alert"])}
    {React.createElement(pageData.examples["Async live region alert"])}
    {React.createElement(pageData.examples["Alert timeout"])}
    {React.createElement(pageData.examples["Truncate"])}
    {React.createElement(pageData.examples["Custom icons"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsAlertReactDocs';
Component.pageData = pageData;

export default Component;

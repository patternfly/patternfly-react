import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Alert group",
  "section": "components",
  "source": "react",
  "slug": "/components/alert-group/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/AlertGroup/examples/AlertGroup.md",
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
      "name": "AlertGroup",
      "description": "",
      "props": [
        {
          "name": "appendTo",
          "type": "HTMLElement | (() => HTMLElement)",
          "description": "Determine where the alert is appended to"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Alerts to be rendered in the AlertGroup"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes added to the AlertGroup"
        },
        {
          "name": "isLiveRegion",
          "type": "boolean",
          "description": "Turns the container into a live region so that changes to content within the AlertGroup, such as appending an Alert, are reliably announced to assistive technology."
        },
        {
          "name": "isToast",
          "type": "boolean",
          "description": "Toast notifications are positioned at the top right corner of the viewport"
        },
        {
          "name": "onOverflowClick",
          "type": "() => void",
          "description": "Function to call if user clicks on overflow message"
        },
        {
          "name": "overflowMessage",
          "type": "string",
          "description": "Custom text to show for the overflow message"
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
    "pf-c-alert-group"
  ],
  "examples": [
    "Static alert group",
    "Toast alert group",
    "Toast alert group with overflow capture",
    "Singular dynamic alert group",
    "Singular dynamic alert group with overflow message",
    "Multiple dynamic alert group",
    "Async alert group"
  ]
};
pageData.examples = {
  'Static alert group': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertGroup } from '@patternfly/react-core';\n\nexport const AlertGroupStatic: React.FunctionComponent = () => (\n  <React.Fragment>\n    <AlertGroup>\n      <Alert title=\"Success alert\" variant=\"success\" isInline />\n      <Alert title=\"Info alert\" variant=\"info\" isInline />\n    </AlertGroup>\n  </React.Fragment>\n);\n","title":"Static alert group","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`These alerts appear on page load and are discoverable from within the normal page content flow, and will not be announced individually/explicitly to assistive technology.`}
      </p>
    </Example>,
  'Toast alert group': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Alert,\n  AlertProps,\n  AlertGroup,\n  AlertActionCloseButton,\n  AlertVariant,\n  InputGroup\n} from '@patternfly/react-core';\n\nexport const AlertGroupToast: React.FunctionComponent = () => {\n  const [alerts, setAlerts] = React.useState<Partial<AlertProps>[]>([]);\n\n  const addAlert = (title: string, variant: AlertProps['variant'], key: React.Key) => {\n    setAlerts(prevAlerts => [...prevAlerts, { title, variant, key }]);\n  };\n\n  const removeAlert = (key: React.Key) => {\n    setAlerts(prevAlerts => [...prevAlerts.filter(alert => alert.key !== key)]);\n  };\n\n  const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');\n\n  const getUniqueId = () => new Date().getTime();\n\n  const addSuccessAlert = () => {\n    addAlert('Toast success alert', 'success', getUniqueId());\n  };\n\n  const addDangerAlert = () => {\n    addAlert('Toast danger alert', 'danger', getUniqueId());\n  };\n\n  const addInfoAlert = () => {\n    addAlert('Toast info alert', 'info', getUniqueId());\n  };\n\n  return (\n    <React.Fragment>\n      <InputGroup style={{ marginBottom: '16px' }}>\n        <button onClick={addSuccessAlert} type=\"button\" className={btnClasses}>\n          Add toast success alert\n        </button>\n        <button onClick={addDangerAlert} type=\"button\" className={btnClasses}>\n          Add toast danger alert\n        </button>\n        <button onClick={addInfoAlert} type=\"button\" className={btnClasses}>\n          Add toast info alert\n        </button>\n      </InputGroup>\n      <AlertGroup isToast isLiveRegion>\n        {alerts.map(({ key, variant, title }) => (\n          <Alert\n            variant={AlertVariant[variant]}\n            title={title}\n            actionClose={\n              <AlertActionCloseButton\n                title={title as string}\n                variantLabel={`${variant} alert`}\n                onClose={() => removeAlert(key)}\n              />\n            }\n            key={key}\n          />\n        ))}\n      </AlertGroup>\n    </React.Fragment>\n  );\n};\n","title":"Toast alert group","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Alerts asynchronously appended into dynamic AlertGroups with `}
        
        <code {...{"className":"ws-code"}}>
          {`isLiveRegion`}
        </code>
        {` will be announced to assistive technology at the moment the change happens, following the strategy used for aria-atomic, which defaults to false. This means only changes of type "addition" will be announced.`}
      </p>
    </Example>,
  'Toast alert group with overflow capture': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Alert,\n  AlertProps,\n  AlertGroup,\n  AlertActionCloseButton,\n  AlertVariant,\n  InputGroup\n} from '@patternfly/react-core';\n\nexport const AlertGroupToastOverflowCapture: React.FunctionComponent = () => {\n  const [alerts, setAlerts] = React.useState<Partial<AlertProps>[]>([]);\n  const [overflowMessage, setOverflowMessage] = React.useState<string>('');\n\n  const maxDisplayed = 4;\n\n  const getOverflowMessage = (alertsNumber: number) => {\n    const overflow = alertsNumber - maxDisplayed;\n    if (overflow > 0) {\n      return `View ${overflow} more alerts`;\n    }\n    return '';\n  };\n\n  const addAlert = (title: string, variant: AlertProps['variant'], key: React.Key) => {\n    setAlerts(prevAlerts => [...prevAlerts, { title, variant, key }]);\n    setOverflowMessage(getOverflowMessage(alerts.length + 1));\n  };\n\n  const removeAlert = (key: React.Key) => {\n    const newAlerts = alerts.filter(alert => alert.key !== key);\n    setAlerts(newAlerts);\n    setOverflowMessage(getOverflowMessage(newAlerts.length));\n  };\n\n  const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');\n\n  const getUniqueId = () => new Date().getTime();\n\n  const addSuccessAlert = () => {\n    addAlert('Toast success alert', 'success', getUniqueId());\n  };\n\n  const addDangerAlert = () => {\n    addAlert('Toast danger alert', 'danger', getUniqueId());\n  };\n\n  const addInfoAlert = () => {\n    addAlert('Toast info alert', 'info', getUniqueId());\n  };\n\n  const onOverflowClick = () => {\n    // eslint-disable-next-line no-console\n    console.log('Overflow message clicked');\n  };\n\n  return (\n    <React.Fragment>\n      <InputGroup style={{ marginBottom: '16px' }}>\n        <button onClick={addSuccessAlert} type=\"button\" className={btnClasses}>\n          Add toast success alert\n        </button>\n        <button onClick={addDangerAlert} type=\"button\" className={btnClasses}>\n          Add toast danger alert\n        </button>\n        <button onClick={addInfoAlert} type=\"button\" className={btnClasses}>\n          Add toast info alert\n        </button>\n      </InputGroup>\n      <AlertGroup isToast isLiveRegion onOverflowClick={onOverflowClick} overflowMessage={overflowMessage}>\n        {alerts.slice(0, maxDisplayed).map(({ key, variant, title }) => (\n          <Alert\n            variant={AlertVariant[variant]}\n            title={title}\n            actionClose={\n              <AlertActionCloseButton\n                title={title as string}\n                variantLabel={`${variant} alert`}\n                onClose={() => removeAlert(key)}\n              />\n            }\n            key={key}\n          />\n        ))}\n      </AlertGroup>\n    </React.Fragment>\n  );\n};\n","title":"Toast alert group with overflow capture","lang":"ts","isBeta":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`After a specified number of alerts displayed is reached, we will see an overflow message instead of new alerts. Alerts asynchronously appended into dynamic AlertGroups with `}
        
        <code {...{"className":"ws-code"}}>
          {`isLiveRegion`}
        </code>
        {` will be announced to assistive technology at the moment the change happens. When the overflow message appears or is updated in AlertGroups with `}
        
        <code {...{"className":"ws-code"}}>
          {`isLiveRegion`}
        </code>
        {`, the `}
        
        <code {...{"className":"ws-code"}}>
          {`View 1 more alert`}
        </code>
        {` text will be read, but the alert message will not be read. screen reader user or keyboard user will need a way to navigate to and reveal the hidden alerts before they disappear. Alternatively, there should be a place that notifications or alerts are collected to be viewed or read later. In this example we are showing a max of 4 alerts.`}
      </p>
    </Example>,
  'Singular dynamic alert group': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Alert,\n  AlertProps,\n  AlertGroup,\n  AlertActionCloseButton,\n  AlertVariant,\n  InputGroup\n} from '@patternfly/react-core';\n\nexport const AlertGroupSingularDynamic: React.FunctionComponent = () => {\n  const [alerts, setAlerts] = React.useState<Partial<AlertProps>[]>([]);\n\n  const addAlert = (title: string, variant: AlertProps['variant'], key: React.Key) => {\n    setAlerts(prevAlerts => [...prevAlerts, { title, variant, key }]);\n  };\n\n  const removeAlert = (key: React.Key) => {\n    setAlerts(prevAlerts => [...prevAlerts.filter(alert => alert.key !== key)]);\n  };\n\n  const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');\n\n  const getUniqueId = () => new Date().getTime();\n\n  const addSuccessAlert = () => {\n    addAlert('Toast success alert', 'success', getUniqueId());\n  };\n\n  const addDangerAlert = () => {\n    addAlert('Toast danger alert', 'danger', getUniqueId());\n  };\n\n  const addInfoAlert = () => {\n    addAlert('Toast info alert', 'info', getUniqueId());\n  };\n\n  return (\n    <React.Fragment>\n      <InputGroup style={{ marginBottom: '16px' }}>\n        <button onClick={addSuccessAlert} type=\"button\" className={btnClasses}>\n          Add single success alert\n        </button>\n        <button onClick={addDangerAlert} type=\"button\" className={btnClasses}>\n          Add single danger alert\n        </button>\n        <button onClick={addInfoAlert} type=\"button\" className={btnClasses}>\n          Add single info alert\n        </button>\n      </InputGroup>\n      <AlertGroup isLiveRegion>\n        {alerts.map(({ title, variant, key }) => (\n          <Alert\n            isInline\n            variant={AlertVariant[variant]}\n            title={title}\n            key={key}\n            actionClose={\n              <AlertActionCloseButton\n                title={title as string}\n                variantLabel={`${variant} alert`}\n                onClose={() => removeAlert(key)}\n              />\n            }\n          />\n        ))}\n      </AlertGroup>\n    </React.Fragment>\n  );\n};\n","title":"Singular dynamic alert group","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This alert will appear in the page, most likely in response to a user action.`}
      </p>
    </Example>,
  'Singular dynamic alert group with overflow message': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Alert,\n  AlertProps,\n  AlertGroup,\n  AlertActionCloseButton,\n  AlertVariant,\n  InputGroup\n} from '@patternfly/react-core';\n\nexport const AlertGroupSingularDynamicOverflow: React.FunctionComponent = () => {\n  const [alerts, setAlerts] = React.useState<Partial<AlertProps>[]>([]);\n  const [overflowMessage, setOverflowMessage] = React.useState<string>('');\n\n  const maxDisplayed = 4;\n\n  const getOverflowMessage = (alertsNumber: number) => {\n    const overflow = alertsNumber - maxDisplayed;\n    if (overflow > 0) {\n      return `View ${overflow} more alerts`;\n    }\n    return '';\n  };\n\n  const addAlert = (title: string, variant: AlertProps['variant'], key: React.Key) => {\n    setAlerts(prevAlerts => [...prevAlerts, { title, variant, key }]);\n    setOverflowMessage(getOverflowMessage(alerts.length + 1));\n  };\n\n  const removeAlert = (key: React.Key) => {\n    const newAlerts = alerts.filter(alert => alert.key !== key);\n    setAlerts(newAlerts);\n    setOverflowMessage(getOverflowMessage(newAlerts.length));\n  };\n\n  const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');\n\n  const getUniqueId = () => new Date().getTime();\n\n  const addSuccessAlert = () => {\n    addAlert('Toast success alert', 'success', getUniqueId());\n  };\n\n  const addDangerAlert = () => {\n    addAlert('Toast danger alert', 'danger', getUniqueId());\n  };\n\n  const addInfoAlert = () => {\n    addAlert('Toast info alert', 'info', getUniqueId());\n  };\n\n  const onOverflowClick = () => {\n    // eslint-disable-next-line no-console\n    console.log('Overflow message clicked');\n  };\n\n  return (\n    <React.Fragment>\n      <InputGroup style={{ marginBottom: '16px' }}>\n        <button onClick={addSuccessAlert} type=\"button\" className={btnClasses}>\n          Add single success alert\n        </button>\n        <button onClick={addDangerAlert} type=\"button\" className={btnClasses}>\n          Add single danger alert\n        </button>\n        <button onClick={addInfoAlert} type=\"button\" className={btnClasses}>\n          Add single info alert\n        </button>\n      </InputGroup>\n      <AlertGroup isLiveRegion onOverflowClick={onOverflowClick} overflowMessage={overflowMessage}>\n        {alerts.slice(0, maxDisplayed).map(({ key, variant, title }) => (\n          <Alert\n            isInline\n            variant={AlertVariant[variant]}\n            title={title}\n            actionClose={\n              <AlertActionCloseButton\n                title={title as string}\n                variantLabel={`${variant} alert`}\n                onClose={() => removeAlert(key)}\n              />\n            }\n            key={key}\n          />\n        ))}\n      </AlertGroup>\n    </React.Fragment>\n  );\n};\n","title":"Singular dynamic alert group with overflow message","lang":"ts","isBeta":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`This alert will appear in the page, most likely in response to a user action. In this example we are showing a max of 4 alerts.`}
      </p>
    </Example>,
  'Multiple dynamic alert group': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Alert,\n  AlertProps,\n  AlertGroup,\n  AlertActionCloseButton,\n  AlertVariant,\n  InputGroup\n} from '@patternfly/react-core';\n\nexport const AlertGroupMultipleDynamic: React.FunctionComponent = () => {\n  const [alerts, setAlerts] = React.useState<Partial<AlertProps>[]>([]);\n\n  const addAlerts = (incomingAlerts: Partial<AlertProps>[]) => {\n    setAlerts(prevAlerts => [...prevAlerts, ...incomingAlerts]);\n  };\n\n  const removeAlert = (key: React.Key) => {\n    setAlerts(prevAlerts => [...prevAlerts.filter(alert => alert.key !== key)]);\n  };\n\n  const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');\n\n  const getUniqueId = () => String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now();\n\n  const addAlertCollection = () => {\n    addAlerts([\n      { title: 'First alert notification.', variant: 'success', key: getUniqueId() },\n      { title: 'Second alert notification.', variant: 'warning', key: getUniqueId() },\n      { title: 'Third alert notification.', variant: 'danger', key: getUniqueId() }\n    ]);\n  };\n\n  return (\n    <React.Fragment>\n      <InputGroup style={{ marginBottom: '16px' }}>\n        <button onClick={addAlertCollection} type=\"button\" className={btnClasses}>\n          Add alert collection\n        </button>\n      </InputGroup>\n      <AlertGroup isToast isLiveRegion>\n        {alerts.map(({ title, variant, key }) => (\n          <Alert\n            variant={AlertVariant[variant]}\n            title={title}\n            key={key}\n            actionClose={\n              <AlertActionCloseButton\n                title={title as string}\n                variantLabel={`${variant} alert`}\n                onClose={() => removeAlert(key)}\n              />\n            }\n          />\n        ))}\n      </AlertGroup>\n    </React.Fragment>\n  );\n};\n","title":"Multiple dynamic alert group","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`These alerts will appear in the page, most likely in response to a user action.`}
      </p>
    </Example>,
  'Async alert group': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  Alert,\n  AlertProps,\n  AlertGroup,\n  AlertActionCloseButton,\n  AlertVariant,\n  InputGroup,\n  useInterval\n} from '@patternfly/react-core';\n\nexport const AlertGroupAsync: React.FunctionComponent = () => {\n  const [alerts, setAlerts] = React.useState<Partial<AlertProps>[]>([]);\n  const [isRunning, setIsRunning] = React.useState(false);\n\n  const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');\n\n  const getUniqueId = () => new Date().getTime();\n\n  const addAlert = () => {\n    setAlerts(prevAlerts => [\n      ...prevAlerts,\n      {\n        title: `Async notification ${prevAlerts.length + 1} was added to the queue.`,\n        variant: 'danger',\n        key: getUniqueId()\n      }\n    ]);\n  };\n\n  const removeAlert = (key: React.Key) => {\n    setAlerts(prevAlerts => [...prevAlerts.filter(alert => alert.key !== key)]);\n  };\n\n  const startAsyncAlerts = () => {\n    setIsRunning(true);\n  };\n\n  const stopAsyncAlerts = () => {\n    setIsRunning(false);\n  };\n\n  useInterval(addAlert, isRunning ? 4500 : null);\n\n  return (\n    <React.Fragment>\n      <InputGroup style={{ marginBottom: '16px' }}>\n        <button onClick={startAsyncAlerts} type=\"button\" className={btnClasses}>\n          Start async alerts\n        </button>\n        <button onClick={stopAsyncAlerts} type=\"button\" className={btnClasses}>\n          Stop async alerts\n        </button>\n      </InputGroup>\n      <AlertGroup isToast isLiveRegion aria-live=\"assertive\">\n        {alerts.map(({ title, variant, key }) => (\n          <Alert\n            variant={AlertVariant[variant]}\n            title={title}\n            key={key}\n            actionClose={\n              <AlertActionCloseButton\n                title={title as string}\n                variantLabel={`${variant} alert`}\n                onClose={() => removeAlert(key)}\n              />\n            }\n          />\n        ))}\n      </AlertGroup>\n    </React.Fragment>\n  );\n};\n","title":"Async alert group","lang":"ts"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This shows how an alert could be triggered by an asynchronous event in the application. Note how you can customize how the alert will be announced to assistive technology. See the alert group accessibility tab for more information.`}
      </p>
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Static alert group"])}
    {React.createElement(pageData.examples["Toast alert group"])}
    {React.createElement(pageData.examples["Toast alert group with overflow capture"])}
    {React.createElement(pageData.examples["Singular dynamic alert group"])}
    {React.createElement(pageData.examples["Singular dynamic alert group with overflow message"])}
    {React.createElement(pageData.examples["Multiple dynamic alert group"])}
    {React.createElement(pageData.examples["Async alert group"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsAlertGroupReactDocs';
Component.pageData = pageData;

export default Component;

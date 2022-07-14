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
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertGroup } from '@patternfly/react-core';\n\nclass StaticAlertGroup extends React.Component {\n  render() {\n    return (\n      <React.Fragment>\n        <AlertGroup>\n          <Alert title=\"Success alert\" variant=\"success\" isInline />\n          <Alert title=\"Info alert\" variant=\"info\" isInline/>\n        </AlertGroup>\n      </React.Fragment>\n    );\n  }\n}","title":"Static alert group","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`These alerts appear on page load and are discoverable from within the normal page content flow, and will not be announced individually/explicitly to assistive technology.`}
      </p>
    </Example>,
  'Toast alert group': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertGroup, AlertActionCloseButton, AlertVariant, InputGroup } from '@patternfly/react-core';\nclass ToastAlertGroup extends React.Component {\n  constructor() {\n    super();\n    this.state = { alerts: [] };\n    this.addAlert = (title, variant, key) => {\n      this.setState({\n        alerts: [ ...this.state.alerts, { title: title, variant: variant, key }]\n      });\n    };\n    this.removeAlert = key => {\n      this.setState({ alerts: [...this.state.alerts.filter(el => el.key !== key)] });\n    };\n  }\n  render() {\n    const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');\n    const getUniqueId = () => (new Date().getTime());\n    const addSuccessAlert = () => { this.addAlert('Toast success alert', 'success', getUniqueId()) };\n    const addDangerAlert = () => { this.addAlert('Toast danger alert', 'danger', getUniqueId()) };\n    const addInfoAlert = () => { this.addAlert('Toast info alert', 'info', getUniqueId()) };\n    return (\n      <React.Fragment>\n        <InputGroup style={{ marginBottom: '16px' }}>\n          <button onClick={addSuccessAlert} type=\"button\" className={btnClasses}>Add toast success alert</button>\n          <button onClick={addDangerAlert} type=\"button\" className={btnClasses}>Add toast danger alert</button>\n          <button onClick={addInfoAlert} type=\"button\" className={btnClasses}>Add toast info alert</button>\n        </InputGroup>\n        <AlertGroup isToast isLiveRegion>\n          {this.state.alerts.map(({key, variant, title}) => (\n            <Alert\n              variant={AlertVariant[variant]}\n              title={title}\n              actionClose={\n                <AlertActionCloseButton\n                  title={title}\n                  variantLabel={`${variant} alert`}\n                  onClose={() => this.removeAlert(key)}\n                />\n              }\n              key={key} />\n          ))}\n        </AlertGroup>\n      </React.Fragment>\n    );\n  }\n}","title":"Toast alert group","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`Alerts asynchronously appended into dynamic AlertGroups with `}
        
        <code {...{"className":"ws-code"}}>
          {`isLiveRegion`}
        </code>
        {` will be announced to assistive technology at the moment the change happens, following the strategy used for aria-atomic, which defaults to false. This means only changes of type "addition" will be announced.`}
      </p>
    </Example>,
  'Toast alert group with overflow capture': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertGroup, AlertActionCloseButton, AlertVariant, InputGroup } from '@patternfly/react-core';\nclass ToastAlertGroup extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      alerts: [],\n      maxDisplayed: \"4\",\n      overflowMessage: ''\n    };\n    this.getOverflowMessage = (alertsNumber) => {\n      const overflow = alertsNumber - this.state.maxDisplayed;\n      if (overflow > 0) {\n        return \"View \" + (overflow) + \" more alerts\";\n      }\n      return '';\n    };\n    this.addAlert = (title, variant, key) => {\n      this.setState({\n        ...this.state,\n        alerts: [ ...this.state.alerts, { title: title, variant: variant, key }],\n        overflowMessage: this.getOverflowMessage(this.state.alerts.length + 1)\n      });\n    };\n    this.removeAlert = key => {\n      const newAlerts = [...this.state.alerts.filter(el => el.key !== key)];\n      this.setState({\n        ...this.state,\n        alerts: newAlerts,\n        overflowMessage: this.getOverflowMessage(newAlerts.length)\n      });\n    };\n  }\n  render() {\n    const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');\n    const getUniqueId = () => (new Date().getTime());\n    const addSuccessAlert = () => { this.addAlert('Toast success alert', 'success', getUniqueId()) };\n    const addDangerAlert = () => { this.addAlert('Toast danger alert', 'danger', getUniqueId()) };\n    const addInfoAlert = () => { this.addAlert('Toast info alert', 'info', getUniqueId()) };\n    const onOverflowClick = () => {\n      console.log('Overflow message clicked');\n    };\n    return (\n      <React.Fragment>\n        <InputGroup style={{ marginBottom: '16px' }}>\n          <button onClick={addSuccessAlert} type=\"button\" className={btnClasses}>Add toast success alert</button>\n          <button onClick={addDangerAlert} type=\"button\" className={btnClasses}>Add toast danger alert</button>\n          <button onClick={addInfoAlert} type=\"button\" className={btnClasses}>Add toast info alert</button>\n        </InputGroup>\n        <AlertGroup isToast isLiveRegion onOverflowClick={onOverflowClick} overflowMessage={this.state.overflowMessage}>\n          {this.state.alerts.slice(0, this.state.maxDisplayed).map(({key, variant, title}) => (\n            <Alert\n              variant={AlertVariant[variant]}\n              title={title}\n              actionClose={\n                <AlertActionCloseButton\n                  title={title}\n                  variantLabel={`${variant} alert`}\n                  onClose={() => this.removeAlert(key)}\n                />\n              }\n              key={key} />\n          ))}\n        </AlertGroup>\n      </React.Fragment>\n    );\n  }\n}","title":"Toast alert group with overflow capture","lang":"js","isBeta":true}}>
      
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
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertGroup, AlertVariant, AlertActionCloseButton, InputGroup } from '@patternfly/react-core';\nclass SingularAdditiveAlertGroup extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      alerts: []\n    }\n  }\n  render() {\n    const addAlert = (title, variant, key) => {\n      this.setState({ alerts: [...this.state.alerts, { title: title, variant: variant, key }] });\n    };\n    const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');\n    const getUniqueId = () => (new Date().getTime());\n    const addSuccessAlert = () => { addAlert('Single success alert', 'success', getUniqueId()) };\n    const addDangerAlert = () => { addAlert('Single danger alert', 'danger', getUniqueId()) };\n    const addInfoAlert = () => { addAlert('Single info alert', 'info', getUniqueId()) };\n    this.removeAlert = key => {\n      this.setState({ alerts: [...this.state.alerts.filter(el => el.key !== key)] });\n    };\n    return (\n      <React.Fragment>\n        <InputGroup style={{ marginBottom: '16px' }}>\n          <button onClick={addSuccessAlert} type=\"button\" className={btnClasses}>Add single success alert</button>\n          <button onClick={addDangerAlert} type=\"button\" className={btnClasses}>Add single danger alert</button>\n          <button onClick={addInfoAlert} type=\"button\" className={btnClasses}>Add single info alert</button>\n        </InputGroup>\n        <AlertGroup isLiveRegion>\n          {this.state.alerts.map(({ title, variant, key }) => (\n            <Alert\n              isInline\n              variant={AlertVariant[variant]}\n              title={title}\n              key={key}\n              actionClose={\n                <AlertActionCloseButton\n                  title={title}\n                  variantLabel={`${variant} alert`}\n                  onClose={() => this.removeAlert(key)}\n                />\n              }/>\n          ))}\n        </AlertGroup>\n      </React.Fragment>\n    );\n  }\n}","title":"Singular dynamic alert group","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`This alert will appear in the page, most likely in response to a user action.`}
      </p>
    </Example>,
  'Singular dynamic alert group with overflow message': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertGroup, AlertVariant, AlertActionCloseButton, InputGroup } from '@patternfly/react-core';\nclass SingularAdditiveAlertGroup extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      alerts: [],\n      maxDisplayed: \"4\",\n      overflowMessage: ''\n    };\n    this.getOverflowMessage = (alertsNumber) => {\n      const overflow = alertsNumber - this.state.maxDisplayed;\n      if (overflow > 0) {\n        return \"View \" + (overflow) + \" more alerts\";\n      }\n      return '';\n    };\n    this.addAlert = (title, variant, key) => {\n      this.setState({\n        ...this.state,\n        alerts: [ ...this.state.alerts, { title: title, variant: variant, key }],\n        overflowMessage: this.getOverflowMessage(this.state.alerts.length + 1)\n      });\n    };\n    this.removeAlert = key => {\n      const newAlerts = [...this.state.alerts.filter(el => el.key !== key)];\n      this.setState({\n        ...this.state,\n        alerts: newAlerts,\n        overflowMessage: this.getOverflowMessage(newAlerts.length)\n      });\n    };\n  }\n  render() {\n    const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');\n    const getUniqueId = () => (new Date().getTime());\n    const addSuccessAlert = () => { this.addAlert('Single success alert', 'success', getUniqueId()) };\n    const addDangerAlert = () => { this.addAlert('Single danger alert', 'danger', getUniqueId()) };\n    const addInfoAlert = () => { this.addAlert('Single info alert', 'info', getUniqueId()) };\n    const onOverflowClick = () => {\n      console.log('Overflow message clicked');\n    };\n    return (\n      <React.Fragment>\n        <InputGroup style={{ marginBottom: '16px' }}>\n          <button onClick={addSuccessAlert} type=\"button\" className={btnClasses}>Add single success alert</button>\n          <button onClick={addDangerAlert} type=\"button\" className={btnClasses}>Add single danger alert</button>\n          <button onClick={addInfoAlert} type=\"button\" className={btnClasses}>Add single info alert</button>\n        </InputGroup>\n        <AlertGroup isLiveRegion overflowMessage={this.state.overflowMessage} onOverflowClick={onOverflowClick}>\n          {this.state.alerts.slice(0, this.state.maxDisplayed).map(({ title, variant, key }) => (\n            <Alert\n              isInline\n              variant={AlertVariant[variant]}\n              title={title}\n              key={key}\n              actionClose={\n                <AlertActionCloseButton\n                  title={title}\n                  variantLabel={`${variant} alert`}\n                  onClose={() => this.removeAlert(key)}\n                />\n              }/>\n          ))}\n        </AlertGroup>\n      </React.Fragment>\n    );\n  }\n}","title":"Singular dynamic alert group with overflow message","lang":"js","isBeta":true}}>
      
      <p {...{"className":"ws-p"}}>
        {`This alert will appear in the page, most likely in response to a user action. In this example we are showing a max of 4 alerts.`}
      </p>
    </Example>,
  'Multiple dynamic alert group': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertGroup, AlertVariant, AlertActionCloseButton, InputGroup } from '@patternfly/react-core';\nclass MultipleAdditiveAlertGroup extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      alerts: []\n    }\n  }\n  render() {\n    const addAlerts = (incomingAlerts) => {\n      this.setState({ alerts: [...this.state.alerts, ...incomingAlerts] });\n    };\n    const getUniqueId = () => (\n      (String.fromCharCode(65 + Math.floor(Math.random() * 26))+ Date.now())\n    );\n    const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');\n    const addAlertCollection = () => {\n      addAlerts([\n        { title: 'First alert notification.', variant: 'success', key: getUniqueId() },\n        { title: 'Second alert notification.', variant: 'warning', key: getUniqueId() },\n        { title: 'Third alert notification.', variant: 'danger', key: getUniqueId() }\n      ])\n    };\n    this.removeAlert = key => {\n      this.setState({ alerts: [...this.state.alerts.filter(el => el.key !== key)] });\n    };\n    return (\n      <React.Fragment>\n        <InputGroup style={{ marginBottom: '16px' }}>\n          <button onClick={addAlertCollection} type=\"button\" className={btnClasses}>Add alert collection</button>\n        </InputGroup>\n        <AlertGroup isToast isLiveRegion>\n          {this.state.alerts.map(({ title, variant, key, action }) => (\n            <Alert\n              variant={AlertVariant[variant]}\n              title={title}\n              key={key}\n              actionClose={\n                <AlertActionCloseButton\n                  title={title}\n                  variantLabel={`${variant} alert`}\n                  onClose={() => this.removeAlert(key)}\n                />\n              }/>\n          ))}\n        </AlertGroup>\n      </React.Fragment>\n    );\n  }\n}","title":"Multiple dynamic alert group","lang":"js"}}>
      
      <p {...{"className":"ws-p"}}>
        {`These alerts will appear in the page, most likely in response to a user action.`}
      </p>
    </Example>,
  'Async alert group': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { Alert, AlertGroup, AlertActionCloseButton, AlertVariant, InputGroup } from '@patternfly/react-core';\nclass AsyncAdditiveAlertGroup extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      alerts: [],\n      timer: null\n    }\n    this.stopAsyncAlerts = () => { clearInterval(this.state.timer); }\n  }\n  componentWillUnmount() { this.stopAsyncAlerts(); }\n  render() {\n    const addAlerts = (incomingAlerts) => { this.setState({ alerts: [...this.state.alerts, ...incomingAlerts] }); };\n    const getUniqueId = () => (new Date().getTime());\n    const btnClasses = ['pf-c-button', 'pf-m-secondary'].join(' ');\n    this.removeAlert = key => {\n      this.setState({ alerts: [...this.state.alerts.filter(el => el.key !== key)] });\n    };\n    const startAsyncAlerts = () => {\n      let timerValue = setInterval(() => {\n        addAlerts([\n          {\n            title: `Async notification ${this.state.alerts.length + 1} was added to the queue.`,\n            variant: 'danger',\n            key: getUniqueId()\n          }\n        ])\n      }, 4500);\n      this.setState({timer: timerValue});\n    };\n    return (\n      <React.Fragment>\n        <InputGroup style={{ marginBottom: '16px' }}>\n          <button onClick={startAsyncAlerts} type=\"button\" className={btnClasses}>Start async alerts</button>\n          <button onClick={this.stopAsyncAlerts} type=\"button\" className={btnClasses}>Stop async alerts</button>\n        </InputGroup>\n        <AlertGroup isToast isLiveRegion aria-live=\"assertive\">\n          {this.state.alerts.map(({ title, variant, key }) => (\n            <Alert\n              variant={AlertVariant[variant]}\n              title={title}\n              key={key}\n              actionClose={\n                <AlertActionCloseButton\n                  title={title}\n                  variantLabel={`${variant} alert`}\n                  onClose={() => this.removeAlert(key)}\n                />\n              }/>\n          ))}\n        </AlertGroup>\n      </React.Fragment>\n    );\n  }\n}","title":"Async alert group","lang":"js"}}>
      
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

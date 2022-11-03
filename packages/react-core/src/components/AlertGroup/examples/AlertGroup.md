---
id: Alert group
section: components
cssPrefix: pf-c-alert-group
propComponents: ['Alert', 'AlertGroup', 'AlertActionCloseButton', 'AlertActionLink']
---

## Examples

### Variants 

Alert groups can be one of the following variants:

| Variant | Description |
| --- | --- |
| Static inline | Static inline alert groups contain alerts that appear when the page loads, and are seen within the normal page content flow. These groups should not contain alerts that will dynamically appear or update. |
| Toast | Toast alert groups contain alerts that typically appear in response to an asynchronous event or user action. These groups are positioned on top of other content at the top right of the page.|
| Dynamic | Dynamic alert groups contain alerts that typically appear in response to a user action, and are seen within the normal page content flow.|  

Dynamic alerts that are generated after the page initially loads must be appended to either a toast or dynamic `AlertGroup`, both of which must use the `isLiveRegion` property. New alerts appended to a toast or dynamic group will be announced by assistive technologies the moment the change happens. For information about customizing this announcement, read the [aria-atomic and aria-relevant](/components/alert-group/accessibility#aria-atomic-and-aria-relevant) section of the alert group accessibility documentation.

### Static inline alert group

All alert group variants may combine multiple [alert variants](/components/alert) For example, the following static inline alert group includes one "success" alert and one "info" alert.

```ts file="./AlertGroupStatic.tsx"
```

### Toast alert group

Toast alert groups are created by passing in the `isToast` and `isLiveRegion` properties. 

Click the buttons in the example below to add alerts to a toast group.

```ts file="./AlertGroupToast.tsx"
```

### Toast alert group with overflow capture

Users will see an overflow message once a predefined number of alerts are displayed. They will not see any alerts beyond the display limit, which must be explicitly set.

In the following example, an overflow message will appear when more than 4 alerts would be shown. When a 5th alert would appear, an overflow message is shown instead.

When an overflow message appears in an `AlertGroup` using the `isLiveRegion` property, the "view 1 more alert" text label will be announced, but the alert message will not. 

Users navigating via keyboard or another assistive technology will need a way to navigate to and reveal hidden alerts before they disappear. Alternatively, there should be a place where notifications or alerts are collected to be viewed or read later. 

```ts file="AlertGroupToastOverflowCapture.tsx"
```

### Asynchronous alert groups

The following example shows how alerts can be triggered by an asynchronous event in the application. You can customize how an alert will be announced to assistive technology by adjusting the value of the `aria-live` property. Click the "start async" alert button below and then click the buttons in the above toast examples to demonstrate how asynchronous events add alerts to a group. Click the "stop async alerts" button to halt this behavior.

See the [alert group accessibility tab](/components/alert-group/accessibility) for more information on customizing this behavior.

```ts file="./AlertGroupAsync.tsx"
```

### Dynamic alert groups

Click the buttons in the example below to add dynamic alerts to a group.

```ts file="./AlertGroupSingularDynamic.tsx"
```

### Dynamic alert group with overflow message

In the following example, there can be a maximum of 4 alerts shown at once. 

```ts file="AlertGroupSingularDynamicOverflow.tsx"
```

### Multiple dynamic alert groups

You may add multiple alerts to an alert group at once. Click the "add alert collection" button in the example below to add a batch of 3 toast alerts to a group.

```ts file="./AlertGroupMultipleDynamic.tsx"
```

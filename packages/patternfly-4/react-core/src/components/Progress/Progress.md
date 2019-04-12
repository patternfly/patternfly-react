---
title: 'Progress'
cssPrefix: 'pf-c-progress'
---

## Simple Progress

import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

```js
<Progress value={33} title="Descriptive text here" />
```

## Progress (Labeled)

```js
<Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.top} label="Some label" />
```

## Progress (Small)

```js
<Progress value={33} title="Descriptive text here" size={ProgressSize.sm} />
```

## Progress (Large)

```js
<Progress value={33} title="Descriptive text here" size={ProgressSize.lg} />
```

## Progress (Outside)

```js
<Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.outside} />
```

## Progress (Inside)

```js
<Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.inside} />
```

## Progress (Success)

```js
<Progress value={33} title="Success" variant={ProgressVariant.success} />
```

## Progress (Failure)

```js
<Progress value={33} title="Failure due to an error" variant={ProgressVariant.danger} />
```

## Progress (Inside Success)

```js
<Progress
  value={33}
  title="Success"
  measureLocation={ProgressMeasureLocation.inside}
  variant={ProgressVariant.success}
/>
```

## Progress (Outside Failure)

```js
<Progress
  value={33}
  title="Failure due to an error"
  measureLocation={ProgressMeasureLocation.outside}
  variant={ProgressVariant.danger}
/>
```

## Progress (Single Line)

```js
<Progress value={33} measureLocation={ProgressMeasureLocation.outside} />
```

## Progress (No Measure)

```js
<Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.none} />
```

## Progress (Failure + No Measure)

```js
<Progress
  value={33}
  title="Descriptive text here"
  measureLocation={ProgressMeasureLocation.none}
  variant={ProgressVariant.danger}
/>
```

## Progress (Dynamic Description)

```js
<Progress value={33} title="Descriptive text here" valueText="Descriptive text here" />
```

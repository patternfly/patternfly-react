---
id: Label group
section: components
cssPrefix: pf-c-label
propComponents: ['LabelGroup', 'Label']
ouia: true
---

## Examples
### Basic
```js
import React from 'react';
import { Label, LabelGroup } from '@patternfly/react-core';

BasicLabelGroup = () => (
  <React.Fragment>
    <LabelGroup>
      <Label icon={<InfoCircleIcon />}>Label 1</Label>
      <Label icon={<InfoCircleIcon />} color="blue">Label 2</Label>
      <Label icon={<InfoCircleIcon />} color="green">Label 3</Label>
    </LabelGroup>
  </React.Fragment>
);
```

### Overflow
```js
import React from 'react';
import { Label, LabelGroup } from '@patternfly/react-core';

OverflowLabelGroup = () => (
  <React.Fragment>
    <LabelGroup>
      <Label icon={<InfoCircleIcon />}>Label 1</Label>
      <Label icon={<InfoCircleIcon />} color="blue">Label 2</Label>
      <Label icon={<InfoCircleIcon />} color="green">Label 3</Label>
      <Label icon={<InfoCircleIcon />} color="orange">Label 4</Label>
      <Label icon={<InfoCircleIcon />} color="red">Label 5</Label>
      <Label icon={<InfoCircleIcon />} color="purple">Label 6</Label>
    </LabelGroup>
  </React.Fragment>
);
```

### Category
```js
import React from 'react';
import { Label, LabelGroup } from '@patternfly/react-core';

SimpleCategoryLabelGroup = () => (
  <LabelGroup categoryName="Group label">
    <Label icon={<InfoCircleIcon />}>Label 1</Label>
    <Label icon={<InfoCircleIcon />} color="blue">Label 2</Label>
    <Label icon={<InfoCircleIcon />} color="green">Label 3</Label>
  </LabelGroup>
);
```

### Category removable
```js
import React from 'react';
import { Label, LabelGroup } from '@patternfly/react-core';

CategoryLabelGroupRemovable = () => {
  const [labels, setLabels] = React.useState([
    ['Label one', 'grey'],
    ['Label two', 'blue'],
    ['Label three', 'green'],
    ['Label four', 'orange'],
    ['Label five', 'red']
  ]);
  const deleteCategory = () => setLabels([]);

  return (
    <LabelGroup categoryName="Group label" isClosable onClick={deleteCategory}>
      {labels.map(([labelText, labelColor]) => (
        <Label icon={<InfoCircleIcon />} color={labelColor} key={labelText}>
          {labelText}
        </Label>
      ))}
    </LabelGroup>
  )
}
```

### Vertical category overflow removable
```js
import React from 'react';
import { Label, LabelGroup } from '@patternfly/react-core';

VerticalCategoryLabelGroupOverflowRemovable = () => {
  const [labels, setLabels] = React.useState([
    ['Label one', 'grey'],
    ['Label two', 'blue'],
    ['Label three', 'green'],
    ['Label four', 'orange'],
    ['Label five', 'red']
  ]);
  const deleteCategory = () => setLabels([]);

  return (
    <LabelGroup categoryName="Group label with a very long name" isVertical isClosable onClick={deleteCategory}>
      {labels.map(([labelText, labelColor]) => (
        <Label icon={<InfoCircleIcon />} color={labelColor} key={labelText}>
          {labelText}
        </Label>
      ))}
    </LabelGroup>
  )
}
```

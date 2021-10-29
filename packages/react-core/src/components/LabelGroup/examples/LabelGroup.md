---
id: Label group
section: components
cssPrefix: pf-c-label
propComponents: ['LabelGroup', 'Label']
beta: true
ouia: true
---

import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

## Examples

### Basic

```js
import React from 'react';
import { Label, LabelGroup } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

<LabelGroup>
  <Label icon={<InfoCircleIcon />}>Label 1</Label>
  <Label icon={<InfoCircleIcon />} color="blue">
    Label 2
  </Label>
  <Label icon={<InfoCircleIcon />} color="green">
    Label 3
  </Label>
</LabelGroup>;
```

### Overflow

```js
import React from 'react';
import { Label, LabelGroup } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

<LabelGroup>
  <Label icon={<InfoCircleIcon />}>Label 1</Label>
  <Label icon={<InfoCircleIcon />} color="blue">
    Label 2
  </Label>
  <Label icon={<InfoCircleIcon />} color="green">
    Label 3
  </Label>
  <Label icon={<InfoCircleIcon />} color="orange">
    Label 4
  </Label>
  <Label icon={<InfoCircleIcon />} color="red">
    Label 5
  </Label>
  <Label icon={<InfoCircleIcon />} color="purple">
    Label 6
  </Label>
</LabelGroup>;
```

### Category

```js
import React from 'react';
import { Label, LabelGroup } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

<LabelGroup categoryName="Group label">
  <Label icon={<InfoCircleIcon />}>Label 1</Label>
  <Label icon={<InfoCircleIcon />} color="blue">
    Label 2
  </Label>
  <Label icon={<InfoCircleIcon />} color="green">
    Label 3
  </Label>
</LabelGroup>;
```

### Category removable

```js
import React from 'react';
import { Label, LabelGroup } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

CategoryLabelGroupRemovable = () => {
  const [labels, setLabels] = React.useState([
    ['Label 1', 'grey'],
    ['Label 2', 'blue'],
    ['Label 3', 'green'],
    ['Label 4', 'orange'],
    ['Label 5', 'red']
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
  );
};
```

### Vertical category overflow removable

```js
import React from 'react';
import { Label, LabelGroup } from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';

VerticalCategoryLabelGroupOverflowRemovable = () => {
  const [labels, setLabels] = React.useState([
    ['Label 1', 'grey'],
    ['Label 2', 'blue'],
    ['Label 3', 'green'],
    ['Label 4', 'orange'],
    ['Label 5', 'red']
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
  );
};
```

### Editable labels

```js isBeta
import React from 'react';
import { LabelGroup, Label, TextArea } from '@patternfly/react-core';

class EditableLabelGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label1: 'Editable label',
      label2: 'Editable label 2',
      label3: 'Editable label 3'
    };
    this.onEditCancel = (prevText, label) => {
      this.setState({
        [label]: prevText
      });
    };
    this.onEditComplete = (newText, label) => {
      this.setState({
        [label]: newText
      });
    };
  }

  render() {
    return (
      <LabelGroup numLabels={5} isEditable>
        <Label
          color="blue"
          onClose={Function.prototype}
          onEditCancel={prevText => this.onEditCancel(prevText, 'label1')}
          onEditComplete={newText => this.onEditComplete(newText, 'label1')}
          isEditable
          editableProps={{
            'aria-label': 'Editable text',
            id: 'editable-label-1'
          }}
        >
          {this.state.label1}
        </Label>
        <Label color="green">Static label</Label>
        <Label
          color="blue"
          onClose={Function.prototype}
          onEditCancel={prevText => this.onEditCancel(prevText, 'label2')}
          onEditComplete={newText => this.onEditComplete(newText, 'label2')}
          isEditable
          editableProps={{
            'aria-label': 'Editable text 2',
            id: 'editable-label-2'
          }}
        >
          {this.state.label2}
        </Label>
        <Label
          color="blue"
          onClose={Function.prototype}
          onEditCancel={prevText => this.onEditCancel(prevText, 'label3')}
          onEditComplete={newText => this.onEditComplete(newText, 'label3')}
          isEditable
          editableProps={{
            'aria-label': 'Editable text 3',
            id: 'editable-label-3'
          }}
        >
          {this.state.label3}
        </Label>
      </LabelGroup>
    );
  }
}
```

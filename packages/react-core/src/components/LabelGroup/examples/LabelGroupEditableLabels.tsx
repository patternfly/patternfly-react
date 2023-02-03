import React from 'react';
import { LabelGroup, Label } from '@patternfly/react-core';

export const LabelGroupEditableLabels: React.FunctionComponent = () => {
  const [label1, setLabel1] = React.useState('Editable label');
  const [label2, setLabel2] = React.useState('Editable label 2');
  const [label3, setLabel3] = React.useState('Editable label 3');

  return (
    <LabelGroup numLabels={5} isEditable>
      <Label
        color="blue"
        onClose={() => Function.prototype}
        onEditCancel={(_event, prevText) => setLabel1(prevText)}
        onEditComplete={(_event, newText) => setLabel1(newText)}
        isEditable
        editableProps={{
          'aria-label': `Editable label with text ${label1}`,
          id: 'editable-label-1'
        }}
      >
        {label1}
      </Label>
      <Label color="green">Static label</Label>
      <Label
        color="blue"
        onClose={() => Function.prototype}
        onEditCancel={(_event, prevText) => setLabel2(prevText)}
        onEditComplete={(_event, newText) => setLabel2(newText)}
        isEditable
        editableProps={{
          'aria-label': `Editable label with text ${label2}`,
          id: 'editable-label-2'
        }}
      >
        {label2}
      </Label>
      <Label
        color="blue"
        onClose={() => Function.prototype}
        onEditCancel={(_event, prevText) => setLabel3(prevText)}
        onEditComplete={(_event, newText) => setLabel3(newText)}
        isEditable
        editableProps={{
          'aria-label': `Editable label with text ${label3}`,
          id: 'editable-label-3'
        }}
      >
        {label3}
      </Label>
    </LabelGroup>
  );
};

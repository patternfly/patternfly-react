import React from 'react';
import { Label } from '@patternfly/react-core';

export const LabelEditable: React.FunctionComponent = () => {
  const [labelText, setLabelText] = React.useState('Editable label');
  const [compactLabelText, setCompactLabelText] = React.useState('Compact editable label');

  const onEditCancel = (_event: KeyboardEvent, prevText: string) => {
    setLabelText(prevText);
  };

  const onEditComplete = (_event: MouseEvent | KeyboardEvent, text: string) => {
    setLabelText(text);
  };

  const onCompactEditCancel = (_event: KeyboardEvent, prevText: string) => {
    setCompactLabelText(prevText);
  };

  const onCompactEditComplete = (_event: MouseEvent | KeyboardEvent, text: string) => {
    setCompactLabelText(text);
  };

  return (
    <React.Fragment>
      <Label
        color="blue"
        onClose={() => {}}
        closeBtnAriaLabel="Custom close button for editable label"
        onEditCancel={onEditCancel}
        onEditComplete={onEditComplete}
        isEditable
        editableProps={{
          'aria-label': `Editable label with text ${labelText}`,
          id: 'editable-label'
        }}
      >
        {labelText}
      </Label>
      <Label
        color="grey"
        isCompact
        onClose={() => {}}
        closeBtnAriaLabel="Custom close button for compact editable label"
        onEditCancel={onCompactEditCancel}
        onEditComplete={onCompactEditComplete}
        isEditable
        editableProps={{
          'aria-label': `Editable compact label with text ${compactLabelText}`,
          id: 'compact-editable-label'
        }}
      >
        {compactLabelText}
      </Label>
    </React.Fragment>
  );
};

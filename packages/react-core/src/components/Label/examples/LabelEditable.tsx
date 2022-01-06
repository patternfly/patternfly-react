import React from 'react';
import { Label } from '@patternfly/react-core';

export const LabelEditable: React.FunctionComponent = () => {
  const [labelText, setLabelText] = React.useState('Editable label');
  const [compactLabelText, setCompactLabelText] = React.useState('Compact editable label');

  const onEditCancel = (prevText: string) => {
    setLabelText(prevText);
  };

  const onEditComplete = (text: string) => {
    setLabelText(text);
  };

  const onCompactEditCancel = (prevText: string) => {
    setCompactLabelText(prevText);
  };

  const onCompactEditComplete = (text: string) => {
    setCompactLabelText(text);
  };

  return (
    <React.Fragment>
      <Label
        color="blue"
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onClose={(event: React.MouseEvent) => {}}
        closeBtnAriaLabel="Custom close button for editable label"
        onEditCancel={onEditCancel}
        onEditComplete={onEditComplete}
        isEditable
        editableProps={{
          'aria-label': 'Editable text',
          id: 'editable-label'
        }}
      >
        {labelText}
      </Label>
      <Label
        color="grey"
        isCompact
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onClose={(event: React.MouseEvent) => {}}
        closeBtnAriaLabel="Custom close button for compact editable label"
        onEditCancel={onCompactEditCancel}
        onEditComplete={onCompactEditComplete}
        isEditable
        editableProps={{
          'aria-label': 'Compact editable text',
          id: 'compact-editable-label'
        }}
      >
        {compactLabelText}
      </Label>
    </React.Fragment>
  );
};

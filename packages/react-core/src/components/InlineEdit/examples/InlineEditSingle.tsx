import React from 'react';

import { InlineEdit, InlineEditActionGroup, TextInput } from '@patternfly/react-core';

export const InlineEditSingle: React.FunctionComponent = () => {
  const initialValue = 'This text is editable';

  const [text, setText] = React.useState(initialValue);
  const [editableText, setEditableText] = React.useState(initialValue);

  const [isEditMode, setIsEditMode] = React.useState(false);

  const makeStatic = () => setIsEditMode(false);

  return (
    <InlineEdit
      isEditMode={isEditMode}
      staticElement={text}
      editModeElement={
        <TextInput
          value={editableText}
          onChange={(_event, value) => setEditableText(value)}
          aria-label="Editable text input"
        />
      }
      onEditToggle={() => setIsEditMode((value) => !value)}
      actionGroup={
        <InlineEditActionGroup
          isIconVariant
          onSave={() => {
            setText(editableText);
            makeStatic();
          }}
          onCancel={() => {
            setEditableText(text);
            makeStatic();
          }}
        />
      }
    />
  );
};

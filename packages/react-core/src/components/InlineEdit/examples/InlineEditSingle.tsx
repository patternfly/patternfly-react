import React from 'react';

import { InlineEdit, TextInput } from '@patternfly/react-core';

export const InlineEditSingle: React.FunctionComponent = () => {
  const initialValue = 'This text is editable';

  const [text, setText] = React.useState(initialValue);
  const [editableText, setEditableText] = React.useState(initialValue);

  const [isEditModeEnabled, setIsEditModeEnabled] = React.useState(false);

  const makeStatic = () => setIsEditModeEnabled(false);

  return (
    <InlineEdit
      isEditModeEnabled={isEditModeEnabled}
      staticContent={text}
      editModeContent={
        <TextInput
          value={editableText}
          onChange={(_event, value) => setEditableText(value)}
          aria-label="Editable text input"
        />
      }
      onEditToggle={() => setIsEditModeEnabled((value) => !value)}
      onSave={() => {
        setText(editableText);
        makeStatic();
      }}
      onCancel={() => {
        setEditableText(text);
        makeStatic();
      }}
      isIconActionGroup
    />
  );
};

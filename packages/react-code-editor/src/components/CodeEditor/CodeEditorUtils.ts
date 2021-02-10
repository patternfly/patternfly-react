import * as React from 'react';

interface CodeEditorContext {
  code: string;
}

export const CodeEditorContext = React.createContext<CodeEditorContext>(null);

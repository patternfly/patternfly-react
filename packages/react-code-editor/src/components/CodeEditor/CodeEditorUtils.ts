import { createContext } from 'react';

interface CodeEditorContext {
  code: string;
}

export const CodeEditorContext = createContext<CodeEditorContext>(null);

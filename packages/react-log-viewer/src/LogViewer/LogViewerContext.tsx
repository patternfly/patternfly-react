import { createContext, useContext } from 'react';

export const useLogViewerContext = () => useContext(LogViewerContext);

export interface LogViewerContextInterface {
  parsedData: string[];
}

export const LogViewerContext = createContext<LogViewerContextInterface | null>(null);

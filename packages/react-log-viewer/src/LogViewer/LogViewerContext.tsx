import { createContext, useContext } from 'react';

export const useLogViewerContext = () => useContext(LogViewerContext);

interface LogViewerContextInterface {
  parsedData: string[];
  searchedInput: string;
}

export const LogViewerContext = createContext<LogViewerContextInterface | null>(null);

interface LogViewerToolbarContextProps {
  searchedWordIndexes: number[];
  rowInFocus: number;
  searchedInput: string;
  currentSearchedItemCount: number;
  scrollToRow: (searchedRow: number) => void;
  setRowInFocus: (index: number) => void;
  setSearchedInput: (input: string) => void;
  setSearchedWordIndexes: (indexes: number[]) => void;
  setCurrentSearchedItemCount: (index: number) => void;
}

export const LogViewerToolbarContext = createContext<LogViewerToolbarContextProps | null>(null);

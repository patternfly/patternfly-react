import { createContext, useContext } from 'react';
import { searchedKeyWordType } from './utils/utils';

export const useLogViewerContext = () => useContext(LogViewerContext);

interface LogViewerContextInterface {
  parsedData: string[];
  searchedInput: string;
}

export const LogViewerContext = createContext<LogViewerContextInterface | null>(null);

interface LogViewerToolbarContextProps {
  searchedWordIndexes: searchedKeyWordType[];
  rowInFocus: searchedKeyWordType;
  searchedInput: string;
  itemCount: number;
  currentSearchedItemCount: number;
  scrollToRow: (searchedRow: searchedKeyWordType) => void;
  setRowInFocus: (index: searchedKeyWordType) => void;
  setSearchedInput: (input: string) => void;
  setSearchedWordIndexes: (indexes: searchedKeyWordType[]) => void;
  setCurrentSearchedItemCount: (index: number) => void;
}

export const LogViewerToolbarContext = createContext<LogViewerToolbarContextProps | null>(null);

import { ReactNode } from 'react';

export interface AdditionalData {
  columnIndex: number;
  rowIndex: number;
  column: Object;
  rowData: Object;
  rowKey: string;
}

export interface FormatterExtra {
  autoFocus: boolean;
}

export interface Formatter {
  (value: ReactNode, additionalData: AdditionalData): ReactNode;
}

export interface InlineEditFormatterFactoryProps {
  isEditable?(additionalData: AdditionalData): boolean;
  renderValue?: Formatter;
  resolveValue?(value: ReactNode, additionalData: AdditionalData): ReactNode;
  renderEdit?(value: ReactNode, additionalData: AdditionalData, extra: FormatterExtra): ReactNode;
}

export interface InlineEditFormatterFactory {
  (props: InlineEditFormatterFactoryProps): Formatter;
}

export default InlineEditFormatterFactory;

import { ReactNode } from 'react';

export interface AdditionalData {
  columnIndex: number;
  rowIndex: number;
  column: Object;
  rowData: Object;
  rowKey: string;
}

export interface ComputedData {
  activeEditId: string;
}

export interface Formatter {
  (value: ReactNode, additionalData: AdditionalData): ReactNode;
}

export interface InlineEditFormatterFactoryProps {
  isEditable?(additionalData: AdditionalData): boolean;
  renderValue?: Formatter;
  resolveValue?(value: ReactNode, additionalData: AdditionalData): ReactNode;
  renderEdit?(value: ReactNode, additionalData: AdditionalData, computedData: ComputedData): ReactNode;
}

export interface InlineEditFormatterFactory {
  (props: InlineEditFormatterFactoryProps): Formatter;
}

export default InlineEditFormatterFactory;

import { ReactNode } from 'react';

export interface AdditionalData {
  columnIndex: number;
  rowIndex: number;
  column: Record<string, any>;
  rowData: Record<string, any>;
  rowKey: string;
}

export interface ComputedData {
  activeEditId: string;
}

export type Formatter = (value: ReactNode, additionalData: AdditionalData) => ReactNode;

export interface InlineEditFormatterFactoryProps {
  isEditable?(additionalData: AdditionalData): boolean;
  renderValue?: Formatter;
  resolveValue?(value: ReactNode, additionalData: AdditionalData): ReactNode;
  renderEdit?(value: ReactNode, additionalData: AdditionalData, computedData: ComputedData): ReactNode;
}

export type InlineEditFormatterFactory = (props: InlineEditFormatterFactoryProps) => Formatter;

// eslint-disable-next-line no-undef
export default InlineEditFormatterFactory;

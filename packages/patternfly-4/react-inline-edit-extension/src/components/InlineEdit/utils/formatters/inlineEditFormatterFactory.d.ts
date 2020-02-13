import { ReactNode } from 'react';

export interface AdditionalData {
  columnIndex: number;
  rowIndex: number;
  /* eslint-disable @typescript-eslint/ban-types */
  column: Object;
  rowData: Object;
  /* eslint-enable @typescript-eslint/ban-types */
  rowKey: string;
}

export interface ComputedData {
  activeEditId: string;
}

export interface Formatter {
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  (value: ReactNode, additionalData: AdditionalData): ReactNode;
}

export interface InlineEditFormatterFactoryProps {
  isEditable?(additionalData: AdditionalData): boolean;
  renderValue?: Formatter;
  resolveValue?(value: ReactNode, additionalData: AdditionalData): ReactNode;
  renderEdit?(value: ReactNode, additionalData: AdditionalData, computedData: ComputedData): ReactNode;
}

export interface InlineEditFormatterFactory {
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  (props: InlineEditFormatterFactoryProps): Formatter;
}

// eslint-disable-next-line no-undef
export default InlineEditFormatterFactory;

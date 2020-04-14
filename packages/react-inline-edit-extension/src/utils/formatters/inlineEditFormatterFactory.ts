import * as React from 'react';

export interface AdditionalData {
  columnIndex: number;
  rowIndex: number;
  column: any;
  rowData: any;
  rowKey: string;
}

export interface ComputedData {
  activeEditId: string;
}

export interface Formatter {
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  (value: React.ReactNode, additionalData: AdditionalData): React.ReactNode;
}

export interface InlineEditFormatterFactoryProps {
  isEditable?(additionalData: AdditionalData): boolean;
  renderValue?: Formatter;
  resolveValue?(value: React.ReactNode, additionalData: AdditionalData): React.ReactNode;
  renderEdit?(value: React.ReactNode, additionalData: AdditionalData, computedData: ComputedData): React.ReactNode;
}

export interface InlineEditFormatterFactory {
  // eslint-disable-next-line @typescript-eslint/prefer-function-type
  (props: InlineEditFormatterFactoryProps): Formatter;
}

/**
 *
 */
export function inlineEditFormatterFactory({
  renderEdit,
  renderValue,
  resolveValue,
  isEditable = null
}: InlineEditFormatterFactoryProps = {}) {
  return (value: React.ReactNode, additionalData: AdditionalData) => {
    const { rowData } = additionalData;

    if (resolveValue) {
      value = resolveValue(value, additionalData);
    }

    if (renderEdit && rowData.isEditing && (!isEditable || isEditable(additionalData))) {
      const computedData = {
        activeEditId: rowData.editConfig && rowData.editConfig.activeEditId
      };
      return renderEdit(value, additionalData, computedData);
    } else if (renderValue) {
      return renderValue(value, additionalData);
    }

    return value;
  };
}

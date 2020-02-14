import * as React from 'react';
import { IExtra, IFormatterValueType, ITransform, IRowCell, OnRowEdit, RowErrors, RowEditType } from '../../Table';
import { EditColumn } from '../../EditColumn';
import tableStyles from '@patternfly/react-styles/css/components/Table/table';

export const editable: ITransform = (label: IFormatterValueType, { rowIndex, rowData, column }: IExtra) => {
  const {
    extraParams: { onRowEdit }
  } = column;

  const toggleEditMode: OnRowEdit = (event, type) => {
    let validationErrors: RowErrors = {};

    if (type === 'save') {
      validationErrors =
        rowData.rowEditValidationRules &&
        rowData.rowEditValidationRules.reduce(
          (acc, rule) => {
            const invalidCells = (rowData.cells as IRowCell[]).filter(cellData => {
              const testValue =
                cellData.props.editableValue === '' ? '' : cellData.props.editableValue || cellData.props.value;
              const failedValidation = !rule.validator(testValue);

              if (failedValidation) {
                cellData.props.isValid = false;
              }
              return failedValidation;
            });

            if (invalidCells.length) {
              acc[rule.name] = invalidCells.map(cell => cell.props.name);
            }
            return acc;
          },
          {} as RowErrors
        );
    }

    // tslint:disable-next-line:no-unused-expression
    onRowEdit(event, type, rowData && rowData.isEditable, rowIndex, validationErrors);
  };

  /**
   * @param {number} identifier identifier used for the row
   * @param {RowEditType} actionType the type of row edit action
   */
  function getAriaLabelTxt(identifier: number, actionType: RowEditType): string {
    let result: string;
    switch (actionType) {
      case 'cancel':
        result = `Cancel row edits for row ${identifier}`;
        break;
      case 'save':
        result = `Save row edits for row ${identifier}`;
        break;
      default:
        result = `Place row ${identifier} in edit mode`;
    }
    return result;
  }

  return {
    className: tableStyles.tableInlineEditAction,
    component: 'td',
    isVisible: true,
    children: (
      <EditColumn
        saveAriaLabel={
          (rowData && rowData.rowSaveBtnAriaLabel && rowData.rowSaveBtnAriaLabel(rowIndex)) ||
          getAriaLabelTxt(rowIndex, 'save')
        }
        cancelAriaLabel={
          (rowData && rowData.rowCancelBtnAriaLabel && rowData.rowCancelBtnAriaLabel(rowIndex)) ||
          getAriaLabelTxt(rowIndex, 'cancel')
        }
        editAriaLabel={
          (rowData && rowData.rowEditBtnAriaLabel && rowData.rowEditBtnAriaLabel(rowIndex)) ||
          getAriaLabelTxt(rowIndex, 'edit')
        }
        valid={rowData && rowData.isValid}
        editing={rowData && rowData.isEditable}
        onClick={toggleEditMode}
      />
    )
  };
};

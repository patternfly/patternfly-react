import { IRow, IRowCell, IValidatorDef, RowEditType, RowErrors } from '../Table';

const hasCompoundParentsExpanded = (parentId: number, compoundParent: number, rows: IRow[]) => {
  // max rows.length parents
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const i of rows) {
    if (rows[parentId].hasOwnProperty('parent')) {
      parentId = rows[parentId].parent;
    } else {
      return (rows[parentId].cells[compoundParent] as IRowCell).props.isOpen;
    }
  }
  return false;
};

const hasParentsExpanded = (parentId: number, rows: IRow[]) => {
  // max rows.length parents
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const i of rows) {
    if (rows[parentId].hasOwnProperty('parent')) {
      parentId = rows[parentId].parent;
    } else {
      return rows[parentId].isOpen;
    }
  }
  return false;
};

export const isRowExpanded = (row: IRow, rows: IRow[]) => {
  if (row.parent !== undefined) {
    if (row.hasOwnProperty('compoundParent')) {
      return hasCompoundParentsExpanded(row.parent, row.compoundParent, rows);
    }
    return hasParentsExpanded(row.parent, rows) && rows[row.parent].isOpen;
  }
  return undefined;
};

export const getErrorTextByValidator = (validatorName: string, validators: IValidatorDef[]) => {
  const result = validators.filter(validator => validator.name === validatorName);
  return result[0].errorText;
};

export const cancelCellEdits = (row: IRow) => {
  (row.cells as IRowCell[]).forEach(cell => {
    delete cell.props.errorText;
    delete cell.props.editableValue;
    cell.props.isValid = true;
  });

  row.isEditable = !row.isEditable;
  row.isValid = true;
  return row;
};

export const validateCellEdits = (
  row: IRow,
  type: RowEditType,
  validationErrors: RowErrors,
  missingPropErrorTxt = 'Validation requires unique name property for row cells'
) => {
  row.isValid = Object.keys(validationErrors).length ? false : true;

  (row.cells as IRowCell[]).forEach(cell => {
    delete cell.props.errorText;

    const hasValue = cell.props.value !== undefined && cell.props.value !== null;
    const hasEditableValue = cell.props.editableValue !== undefined && cell.props.editableValue !== null;

    if (cell.props && hasValue && hasEditableValue) {
      if (type === 'save') {
        const errorMsg = Object.keys(validationErrors)
          .filter(validatorName => validationErrors[validatorName].includes(cell.props.name))
          .map(validatorName => getErrorTextByValidator(validatorName, row.rowEditValidationRules));

        if (errorMsg.length) {
          cell.props.errorText = cell.props.name ? errorMsg.join(', ') : missingPropErrorTxt;
          if (cell.props.name === undefined) {
            // eslint-disable-next-line no-console
            console.warn('Row edit validation reporting requires cell definitions to have a unique name property.');
          }
        } else {
          delete cell.props.errorText;
          cell.props.isValid = true;
        }
      }
    }
  });
  return row;
};

export const applyCellEdits = (row: IRow, type: RowEditType) => {
  (row.cells as IRowCell[]).forEach(cell => {
    delete cell.props.errorText;
    const hasValue = cell.props.value !== undefined && cell.props.value !== null;
    const hasEditableValue = cell.props.editableValue !== undefined && cell.props.editableValue !== null;

    if (cell.props && hasValue && hasEditableValue) {
      if (type === 'save') {
        cell.props.value = cell.props.editableValue;
        cell.props.isValid = true;
        delete cell.props.errorText;
      }
      delete cell.props.editableValue;
    }
  });

  row.isEditable = !row.isEditable;
  row.isValid = true;
  return row;
};

const camelize = (s: string) =>
  s
    .toUpperCase()
    .replace('-', '')
    .replace('_', '');
export const toCamel = (s: string) => s.replace(/([-_][a-z])/gi, camelize);

/**
 * @param {string} input - String to capitalize
 */
export function capitalize(input: string) {
  return input[0].toUpperCase() + input.substring(1);
}

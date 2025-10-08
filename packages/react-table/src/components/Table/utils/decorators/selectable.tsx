import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { IExtra, IFormatterValueType, ITransform } from '../../TableTypes';
import { SelectColumn, RowSelectVariant } from '../../SelectColumn';
import checkStyles from '@patternfly/react-styles/css/components/Check/check';

export const selectable: ITransform = (
  label: IFormatterValueType,
  { rowIndex, columnIndex, rowData, column, property, tooltip }: IExtra
) => {
  const {
    extraParams: { onSelect, selectVariant, allRowsSelected, isHeaderSelectDisabled }
  } = column;
  const extraData = {
    rowIndex,
    columnIndex,
    column,
    property
  };

  if (rowData && rowData.hasOwnProperty('parent') && !rowData.showSelect && !rowData.fullWidth) {
    return {
      component: 'td',
      isVisible: true
    };
  }
  const rowId = rowIndex !== undefined ? rowIndex : -1;

  /**
   * @param {React.FormEvent} event - React form event
   */
  function selectClick(event: React.FormEvent<HTMLInputElement>) {
    const selected = rowIndex === undefined ? event.currentTarget.checked : !(rowData && rowData.selected);
    // tslint:disable-next-line:no-unused-expression
    onSelect && onSelect(event, selected, rowId, rowData, extraData);
  }
  const customProps = {
    id: rowId !== -1 ? `select-${rowIndex}` : 'select-all',
    ...(rowId !== -1
      ? {
          isChecked: rowData && !!rowData.selected,
          'aria-label': `Select row ${rowIndex}`
        }
      : {
          isChecked: allRowsSelected,
          'aria-label': 'Select all rows'
        }),
    ...(rowData &&
      (rowData.disableCheckbox || rowData.disableSelection) && {
        isDisabled: true,
        className: checkStyles.checkInput
      }),
    ...(!rowData && isHeaderSelectDisabled && { isDisabled: true })
  };
  let selectName = 'check-all';
  if (rowId !== -1 && selectVariant === RowSelectVariant.checkbox) {
    selectName = `checkrow${rowIndex}`;
  } else if (rowId !== -1) {
    selectName = 'radioGroup';
  }

  return {
    className: css(styles.tableCheck),
    component: rowId !== -1 ? 'td' : 'th',
    isVisible: !rowData || !rowData.fullWidth,
    children: (
      <SelectColumn
        {...customProps}
        selectVariant={selectVariant as RowSelectVariant}
        onSelect={selectClick}
        name={selectName}
        tooltip={tooltip}
      >
        {label as React.ReactNode}
      </SelectColumn>
    )
  };
};

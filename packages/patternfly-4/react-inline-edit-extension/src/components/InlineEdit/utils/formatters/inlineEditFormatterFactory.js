const inlineEditFormatterFactory = ({ renderEdit, renderValue, resolveValue, isEditable = null } = {}) => (
  value,
  additionalData
) => {
  const { rowData, columnIndex } = additionalData;

  if (resolveValue) {
    value = resolveValue(value, additionalData);
  }

  if (renderEdit && rowData.isEditing && (!isEditable || isEditable(additionalData))) {
    return renderEdit(value, additionalData, {
      autoFocus: rowData.activeEditCell === columnIndex
    });
  } else if (renderValue) {
    return renderValue(value, additionalData);
  }

  return value;
};

export default inlineEditFormatterFactory;

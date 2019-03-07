const inlineEditFormatterFactory = ({ renderEdit, renderValue, resolveValue, isEditable = null } = {}) => (
  value,
  additionalData
) => {
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

export default inlineEditFormatterFactory;

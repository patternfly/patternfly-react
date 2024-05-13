import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import { Button, Checkbox, Radio, TextInput, getUniqueId } from '@patternfly/react-core';
import PencilAltIcon from '@patternfly/react-icons/dist/esm/icons/pencil-alt-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import inlineEditStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';

interface EditColumnProps {
  onClick: (type: 'save' | 'cancel' | 'edit') => void;
  saveAriaLabel?: string;
  cancelAriaLabel?: string;
  editAriaLabel?: string;
}

const EditColumn: React.FunctionComponent<EditColumnProps> = ({
  onClick,
  saveAriaLabel = 'Save edits',
  cancelAriaLabel = 'Cancel edits',
  editAriaLabel = 'Edit',
  ...props
}: EditColumnProps) => (
  <React.Fragment>
    <div className={css(inlineEditStyles.inlineEditGroup, inlineEditStyles.modifiers.iconGroup, 'pf-m-action-group')}>
      <div className={css(inlineEditStyles.inlineEditAction, inlineEditStyles.modifiers.valid)}>
        <Button aria-label={saveAriaLabel} {...props} onClick={() => onClick('save')} variant="plain">
          <CheckIcon />
        </Button>
      </div>
      <div className={css(inlineEditStyles.inlineEditAction)}>
        <Button aria-label={cancelAriaLabel} {...props} onClick={() => onClick('cancel')} variant="plain">
          <TimesIcon />
        </Button>
      </div>
    </div>
    <div className={css(inlineEditStyles.inlineEditAction, inlineEditStyles.modifiers.enableEditable)}>
      <Button aria-label={editAriaLabel} {...props} onClick={() => onClick('edit')} variant="plain">
        <PencilAltIcon />
      </Button>
    </div>
  </React.Fragment>
);

interface EditableCellProps {
  dataLabel: string;
  staticValue: React.ReactNode;
  editingValue: React.ReactNode;
}

const EditableCell = ({ dataLabel, staticValue, editingValue }: EditableCellProps) => {
  const hasMultipleInputs = Array.isArray(editingValue) && editingValue.every((elem) => React.isValidElement(elem));

  return (
    <Td dataLabel={dataLabel}>
      <div className={css(inlineEditStyles.inlineEditValue)}>{staticValue}</div>
      {hasMultipleInputs ? (
        (editingValue as React.ReactElement[]).map((elem, index) => (
          <div key={index} className={css(inlineEditStyles.inlineEditInput)}>
            {elem}
          </div>
        ))
      ) : (
        <div className={css(inlineEditStyles.inlineEditInput)}>{editingValue}</div>
      )}
    </Td>
  );
};

interface EditableRow {
  data: CustomData;
  columnNames: ColumnNames<CustomData>;
  dataOptions?: CustomDataOptions;
  saveChanges: (editedData: CustomData) => void;
}

const EditableRow = ({ data, columnNames, dataOptions, saveChanges }: EditableRow) => {
  const [editable, setEditable] = React.useState(false);
  const [editedData, setEditedData] = React.useState(data);

  return (
    <Tr className={css(inlineEditStyles.inlineEdit, editable ? inlineEditStyles.modifiers.inlineEditable : '')}>
      <EditableCell
        dataLabel={columnNames.textInput}
        staticValue={data.textInput}
        editingValue={
          <TextInput
            value={editedData.textInput}
            onChange={(e) => setEditedData((data) => ({ ...data, textInput: (e.target as HTMLInputElement).value }))}
          />
        }
      />
      <EditableCell
        dataLabel={columnNames.textInputDisabled}
        staticValue={data.textInputDisabled}
        editingValue={<TextInput isDisabled={true} value={editedData.textInputDisabled ?? ''} />}
      />
      <EditableCell
        dataLabel={columnNames.checkboxes}
        staticValue={data.checkboxes.join(', ')}
        editingValue={dataOptions?.checkboxes.map((option) => {
          const id = getUniqueId('checkbox');
          return (
            <Checkbox
              key={id}
              name={id}
              id={id}
              label={option}
              isChecked={editedData.checkboxes.includes(option)}
              onChange={(_e, checked) =>
                setEditedData((data) => ({
                  ...data,
                  checkboxes: checked ? [...data.checkboxes, option] : data.checkboxes.filter((item) => item !== option)
                }))
              }
            />
          );
        })}
      />
      <EditableCell
        dataLabel={columnNames.radios}
        staticValue={data.radios}
        editingValue={dataOptions?.radios.map((option) => {
          const id = getUniqueId('radio');
          return (
            <Radio
              key={id}
              name={id}
              id={id}
              label={option}
              isChecked={editedData.radios === option}
              onChange={() => setEditedData((data) => ({ ...data, radios: option }))}
            />
          );
        })}
      />
      <EditColumn
        onClick={(type) => {
          type === 'edit' ? setEditable(true) : setEditable(false);
          type === 'save' && saveChanges(editedData);
          type === 'cancel' && setEditedData(data);
        }}
      />
    </Tr>
  );
};

interface CustomData {
  textInput: string;
  textInputDisabled: string | null;
  checkboxes: string[];
  radios: string;
}

interface CustomDataOptions {
  checkboxes: string[];
  radios: string[];
}

type ColumnNames<T> = { [K in keyof T]: string };

export const TableEditable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const initialRows: CustomData[] = [
    {
      textInput: 'Editable text 1',
      textInputDisabled: 'Non-editable text 1',
      checkboxes: ['Option A'],
      radios: 'Option A'
    },
    {
      textInput: 'Editable text 2',
      textInputDisabled: null,
      checkboxes: [],
      radios: 'Option B'
    },
    {
      textInput: 'Editable text 3',
      textInputDisabled: 'Non-editable text 3',
      checkboxes: ['Option A', 'Option B'],
      radios: 'Option A'
    }
  ];

  // List of all selectable options for some cells of initialRows
  const initialRowsOptions: CustomDataOptions[] = [
    {
      checkboxes: ['Option A', 'Option B', 'Option C'],
      radios: ['Option A', 'Option B']
    },
    {
      checkboxes: ['Option A', 'Option B'],
      radios: ['Option A', 'Option B', 'Option C']
    },
    {
      checkboxes: ['Option A', 'Option B'],
      radios: ['Option A', 'Option B']
    }
  ];

  const [rows, setRows] = React.useState(initialRows);

  const columnNames: ColumnNames<CustomData> = {
    textInput: 'Text input',
    textInputDisabled: 'Disabled text input',
    checkboxes: 'Checkboxes',
    radios: 'Radios'
  };

  return (
    <Table aria-label="Editable table">
      <Thead>
        <Tr>
          <Th>{columnNames.textInput}</Th>
          <Th>{columnNames.textInputDisabled}</Th>
          <Th>{columnNames.checkboxes}</Th>
          <Th>{columnNames.radios}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((data, index) => (
          <EditableRow
            key={index}
            data={data}
            dataOptions={initialRowsOptions[index]}
            columnNames={columnNames}
            saveChanges={(editedRow) => {
              setRows((rows) => rows.map((row, i) => (i === index ? editedRow : row)));
            }}
          ></EditableRow>
        ))}
      </Tbody>
    </Table>
  );
};

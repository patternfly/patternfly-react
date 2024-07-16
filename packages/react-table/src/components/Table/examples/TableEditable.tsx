import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import { Button, Checkbox, Radio, TextInput, KeyTypes, getUniqueId } from '@patternfly/react-core';
import PencilAltIcon from '@patternfly/react-icons/dist/esm/icons/pencil-alt-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import inlineEditStyles from '@patternfly/react-styles/css/components/InlineEdit/inline-edit';
import { css } from '@patternfly/react-styles';

interface EditButtonsCellProps {
  onClick: (type: 'save' | 'cancel' | 'edit') => void;
  elementToFocusOnEditRef?: React.MutableRefObject<HTMLElement>;
  rowAriaLabel: string;
}

const EditButtonsCell: React.FunctionComponent<EditButtonsCellProps> = ({
  onClick,
  elementToFocusOnEditRef,
  rowAriaLabel = 'row'
}) => {
  const editButtonRef = React.useRef<HTMLButtonElement>();

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, button: 'edit' | 'stopEditing') => {
    const focusRef = button === 'edit' ? elementToFocusOnEditRef : editButtonRef;

    if (event.key === KeyTypes.Enter || event.key === KeyTypes.Space) {
      // because space key triggers click event before keyDown, we have to prevent default behaviour and trigger click manually
      event.preventDefault();
      (event.target as HTMLButtonElement).click();
      setTimeout(() => {
        focusRef?.current?.focus();
      }, 0);
    }
  };

  return (
    <>
      <Td
        dataLabel="Save and cancel buttons"
        className={css(
          inlineEditStyles.inlineEditGroup,
          inlineEditStyles.modifiers.iconGroup,
          inlineEditStyles.modifiers.actionGroup
        )}
      >
        <div className={css(inlineEditStyles.inlineEditAction, inlineEditStyles.modifiers.valid)}>
          <Button
            aria-label={`Save edits of ${rowAriaLabel}`}
            onClick={() => onClick('save')}
            onKeyDown={(event) => onKeyDown(event, 'stopEditing')}
            variant="plain"
          >
            <CheckIcon />
          </Button>
        </div>
        <div className={css(inlineEditStyles.inlineEditAction)}>
          <Button
            aria-label={`Discard edits of ${rowAriaLabel}`}
            onClick={() => onClick('cancel')}
            onKeyDown={(event) => onKeyDown(event, 'stopEditing')}
            variant="plain"
          >
            <TimesIcon />
          </Button>
        </div>
      </Td>
      <Td
        dataLabel="Edit button"
        className={css(inlineEditStyles.inlineEditAction, inlineEditStyles.modifiers.enableEditable)}
      >
        <Button
          ref={editButtonRef}
          aria-label={`Edit ${rowAriaLabel}`}
          onClick={() => onClick('edit')}
          onKeyDown={(event) => onKeyDown(event, 'edit')}
          variant="plain"
        >
          <PencilAltIcon />
        </Button>
      </Td>
    </>
  );
};

interface EditableCellProps {
  dataLabel: string;
  staticValue: React.ReactNode;
  editingValue: React.ReactNode;
  role?: string;
  ariaLabel?: string;
}

const EditableCell: React.FunctionComponent<EditableCellProps> = ({
  dataLabel,
  staticValue,
  editingValue,
  role,
  ariaLabel
}) => {
  const hasMultipleInputs = Array.isArray(editingValue) && editingValue.every((elem) => React.isValidElement(elem));

  return (
    <Td dataLabel={dataLabel}>
      <div className={css(inlineEditStyles.inlineEditValue)}>{staticValue}</div>
      {hasMultipleInputs ? (
        <div className={css(inlineEditStyles.inlineEditGroup, 'pf-m-column')} role={role} aria-label={ariaLabel}>
          {(editingValue as React.ReactElement[]).map((elem, index) => (
            <div key={index} className={css(inlineEditStyles.inlineEditInput)}>
              {elem}
            </div>
          ))}
        </div>
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
  ariaLabel: string;
  rowIndex?: number;
}

const EditableRow: React.FunctionComponent<EditableRow> = ({
  data,
  columnNames,
  dataOptions,
  saveChanges,
  ariaLabel,
  rowIndex
}) => {
  const [editable, setEditable] = React.useState(false);
  const [editedData, setEditedData] = React.useState(data);

  const inputRef = React.useRef();

  return (
    <Tr className={css(inlineEditStyles.inlineEdit, editable ? inlineEditStyles.modifiers.inlineEditable : '')}>
      <EditableCell
        dataLabel={columnNames.textInput}
        staticValue={data.textInput}
        editingValue={
          <TextInput
            aria-label={`${columnNames.textInput} ${ariaLabel}`}
            ref={inputRef}
            value={editedData.textInput}
            onChange={(e) => setEditedData((data) => ({ ...data, textInput: (e.target as HTMLInputElement).value }))}
          />
        }
      />
      <EditableCell
        dataLabel={columnNames.textInputDisabled}
        staticValue={data.textInputDisabled}
        editingValue={
          <TextInput
            aria-label={`${columnNames.textInputDisabled} ${ariaLabel}`}
            isDisabled={true}
            value={editedData.textInputDisabled ?? ''}
          />
        }
      />
      <EditableCell
        dataLabel={columnNames.checkboxes}
        staticValue={data.checkboxes.join(', ')}
        role="group"
        ariaLabel={`Checkbox group row ${rowIndex}`}
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
        ariaLabel={`Radio button group row ${rowIndex}`}
        role="radiogroup"
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
      <EditButtonsCell
        onClick={(type) => {
          type === 'edit' ? setEditable(true) : setEditable(false);
          type === 'save' && saveChanges(editedData);
          type === 'cancel' && setEditedData(data);
        }}
        rowAriaLabel={ariaLabel}
        elementToFocusOnEditRef={inputRef}
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
          <Th screenReaderText="Row edit actions" />
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((data, index) => (
          <EditableRow
            key={index}
            data={data}
            rowIndex={index}
            dataOptions={initialRowsOptions[index]}
            columnNames={columnNames}
            saveChanges={(editedRow) => {
              setRows((rows) => rows.map((row, i) => (i === index ? editedRow : row)));
            }}
            ariaLabel={`row ${index + 1}`}
          ></EditableRow>
        ))}
      </Tbody>
    </Table>
  );
};

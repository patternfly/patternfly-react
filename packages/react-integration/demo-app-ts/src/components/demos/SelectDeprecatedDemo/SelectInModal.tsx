import React from 'react';
import {
  Modal,
  ModalVariant,
  Button,
  TimePicker,
  InputGroup
} from '@patternfly/react-core';
import {
  Select,
  SelectOption,
  SelectOptionObject
} from '@patternfly/react-core/deprecated';

export const SelectInModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = React.useState(false);
  const [selection, setSelection] = React.useState(null);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };
  const onEscapePress = (event: KeyboardEvent) => {
    if (isSelectOpen) {
      setIsSelectOpen(false);
    } else if (isTimePickerOpen) {
      setIsTimePickerOpen(false);
    } else {
      handleModalToggle(event);
    }
  };

  const options: { value: string; disabled: boolean; isPlaceholder: boolean }[] = [
    { value: 'Mr', disabled: false, isPlaceholder: false },
    { value: 'Miss', disabled: false, isPlaceholder: false },
    { value: 'Mrs', disabled: false, isPlaceholder: false },
    { value: 'Ms', disabled: false, isPlaceholder: false },
    { value: 'Dr', disabled: false, isPlaceholder: false },
    { value: 'Other', disabled: false, isPlaceholder: false }
  ];

  const onSelectToggle = (_event: any, isOpen: boolean) => {
    setIsSelectOpen(isOpen);
  };

  const onSelect = (event: React.MouseEvent | React.ChangeEvent, newSelection: string | SelectOptionObject) => {
    setSelection(newSelection);
  };

  return (
    <React.Fragment>
      <Button id="modal-for-select-in-modal" variant="primary" onClick={handleModalToggle}>
        Launch modal
      </Button>
      <Modal
        id="date-time-picker-modal"
        variant={ModalVariant.small}
        title="Generic modal header"
        isOpen={isModalOpen}
        onEscapePress={onEscapePress}
        onClose={handleModalToggle}
        actions={[
          <Button key="confirm" variant="primary" onClick={handleModalToggle}>
            Confirm
          </Button>,
          <Button key="cancel" variant="link" onClick={handleModalToggle}>
            Cancel
          </Button>
        ]}
      >
        <InputGroup>
          <Select
            placeholderText="Select an option"
            aria-label="Select Input with descriptions"
            onToggle={onSelectToggle}
            onSelect={onSelect}
            selections={selection}
            isOpen={isSelectOpen}
            menuAppendTo="parent"
            toggleId="select-in-modal-select"
          >
            {options.map((option, index) => (
              <SelectOption
                isDisabled={option.disabled}
                key={index}
                value={option.value}
                isPlaceholder={option.isPlaceholder}
                description="This is a description"
              />
            ))}
          </Select>
          <TimePicker
            id="select-in-modal-time-picker"
            isOpen={isTimePickerOpen}
            setIsOpen={setIsTimePickerOpen}
            menuAppendTo="parent"
          />
        </InputGroup>
      </Modal>
    </React.Fragment>
  );
};

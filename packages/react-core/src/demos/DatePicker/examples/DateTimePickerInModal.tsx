import React from 'react';
import {
  DatePicker,
  Modal,
  ModalVariant,
  Button,
  TimePicker,
  InputGroup,
  InputGroupItem
} from '@patternfly/react-core';

export const SimpleModal = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = React.useState(false);
  const dateRef = React.useRef(null);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  const onEscapePress = (event: KeyboardEvent) => {
    if (dateRef && dateRef.current && dateRef.current.isCalendarOpen) {
      dateRef.current.toggleCalendar(false, event.key);
    } else if (isTimePickerOpen) {
      setIsTimePickerOpen(false);
    } else {
      handleModalToggle(event);
    }
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
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
          <InputGroupItem>
            <DatePicker ref={dateRef} appendTo={() => document.getElementById('date-time-picker-modal')} />
          </InputGroupItem>
          <InputGroupItem>
            <TimePicker menuAppendTo="parent" isOpen={isTimePickerOpen} setIsOpen={setIsTimePickerOpen} />
          </InputGroupItem>
        </InputGroup>
      </Modal>
    </React.Fragment>
  );
};

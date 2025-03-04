import { Fragment, useRef, useState } from 'react';
import {
  DatePicker,
  Button,
  TimePicker,
  InputGroup,
  InputGroupItem,
  Modal,
  ModalVariant,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@patternfly/react-core';

export const SimpleModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const dateRef = useRef(null);

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
    <Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Launch modal
      </Button>
      <Modal
        id="date-time-picker-modal"
        variant={ModalVariant.small}
        isOpen={isModalOpen}
        onEscapePress={onEscapePress}
        onClose={handleModalToggle}
      >
        <ModalHeader title="Generic modal header" />
        <ModalBody>
          <InputGroup>
            <InputGroupItem>
              <DatePicker ref={dateRef} appendTo={() => document.body} />
            </InputGroupItem>
            <InputGroupItem>
              <TimePicker
                menuAppendTo={() => document.body}
                isOpen={isTimePickerOpen}
                setIsOpen={setIsTimePickerOpen}
              />
            </InputGroupItem>
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button key="confirm" variant="primary" onClick={handleModalToggle}>
            Confirm
          </Button>
          <Button key="cancel" variant="link" onClick={handleModalToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

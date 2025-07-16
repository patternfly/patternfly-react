import { FunctionComponent } from 'react';
import { Button, Content, Modal, ModalBody, ModalFooter, ModalHeader, ModalVariant } from '../../index';
import { useGuidedTour } from './GuidedTourContext';

export const AnimationsEndTourModal: FunctionComponent = () => {
  const { onStart, onFinish } = useGuidedTour();

  return (
    <Modal
      variant={ModalVariant.small}
      isOpen
      onClose={onFinish}
      aria-labelledby="guided-tour-title"
      aria-describedby="guided-tour-description"
    >
      <ModalHeader title="This concludes the tour" labelId="guided-tour-title" />
      <ModalBody id="guided-tour-description">
        <Content component="p">Come back again to see the progress we've been making!</Content>
      </ModalBody>
      <ModalFooter>
        <Button key="end" variant="primary" onClick={onFinish}>
          End tour
        </Button>
        <Button key="restart" variant="link" onClick={onStart}>
          Restart tour
        </Button>
      </ModalFooter>
    </Modal>
  );
};

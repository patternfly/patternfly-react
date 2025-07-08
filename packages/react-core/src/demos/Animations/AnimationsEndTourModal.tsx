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
        <Content component="p">You’ve reached the end of this tour. Thanks for exploring our new animations!</Content>
        <Content component="p">
          To take the tour again, click <strong>Restart</strong> or refresh this page.
        </Content>
      </ModalBody>
      <ModalFooter>
        <Button key="end" variant="primary" onClick={onFinish}>
          End tour
        </Button>
        <Button key="restart" variant="link" onClick={onStart}>
          Restart
        </Button>
      </ModalFooter>
    </Modal>
  );
};

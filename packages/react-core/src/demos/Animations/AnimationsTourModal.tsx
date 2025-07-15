import { FunctionComponent } from 'react';
import { Button, Content, Modal, ModalBody, ModalFooter, ModalHeader, ModalVariant } from '../..';

interface Props {
  onClose: (startTour?: boolean) => void;
}

export const AnimationsTourModal: FunctionComponent<Props> = ({ onClose }) => (
  <Modal
    variant={ModalVariant.small}
    isOpen
    onClose={() => onClose()}
    aria-labelledby="guided-tour-title"
    aria-describedby="guided-tour-description"
  >
    <ModalHeader title="Welcome to the PatternFly Animations demo" labelId="guided-tour-title" />
    <ModalBody id="guided-tour-description">
      <Content component="p">
        To see how components like alerts, navigation, and forms can now use motion to provide clear feedback and
        improve usability, you can explore this demo and interact with various UI elements. We will continue to update
        this demo as additional animation support is added.
      </Content>
      <Content component="p">
        Get started with a tour to highlight the current state of{' '}
        <Button
          variant="link"
          isInline
          href="https://github.com/orgs/patternfly/projects/7/views/66"
          rel="noopener noreferrer"
          target="_blank"
        >
          our ongoing effort to animate PatternFly components
        </Button>
        .
      </Content>
    </ModalBody>
    <ModalFooter>
      <Button key="skip" variant="secondary" onClick={() => onClose()}>
        Skip tour
      </Button>
      <Button key="start" variant="primary" onClick={() => onClose(true)}>
        Get started
      </Button>
    </ModalFooter>
  </Modal>
);

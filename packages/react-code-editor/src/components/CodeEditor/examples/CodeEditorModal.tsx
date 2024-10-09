import React from 'react';
import { CodeEditor, Language } from '@patternfly/react-code-editor';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from '@patternfly/react-core';

export const CodeEditorFullHeight: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const onEditorDidMount = (editor, monaco) => {
    editor.layout();
    editor.focus();
    monaco.editor.getModels()[0].updateOptions({ tabSize: 5 });
  };

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  const onChange = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle} ouiaId="ShowBasicModal">
        Show basic modal with code editor inside
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        ouiaId="BasicModal"
        aria-labelledby="basic-modal-title"
        aria-describedby="modal-box-body-basic"
        style={{ height: '800px' }}
      >
        <ModalHeader title="Basic modal" labelId="basic-modal-title" />
        <ModalBody id="modal-box-body-basic">
          <CodeEditor
            isLanguageLabelVisible
            code="Some example content"
            onChange={onChange}
            language={Language.javascript}
            onEditorDidMount={onEditorDidMount}
            isFullHeight
          />
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
    </React.Fragment>
  );
};

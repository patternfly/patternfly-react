// this is for testing purposed only.  This file will be deleted before PR merges.

import React from 'react';
import { Button } from '@patternfly/react-core';
import { Modal, ModalBody } from '@patternfly/react-core/next';

export const Test: React.FunctionComponent = () => {
  const YourIssue1 = ({ strict }) => {
    const renderCount = React.useRef(0);
    renderCount.current++;

    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
      // this use effect causes an extra re-render in strict mode
    }, [isOpen]);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>{strict ? 'Strict ' : ''}Open Modal</Button>
        {isOpen && (
          <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <ModalBody>
                Inspect the div containing the modal to see the value of aria-hidden.
                <div>Render count: {renderCount.current}</div>
              </ModalBody>
            </Modal>
          </>
        )}
      </div>
    );
  };

  const YourIssue2 = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalBody>
            Inspect the div containing the modal to see the value of all root siblings having no aria-hidden attribute.
          </ModalBody>
        </Modal>
        <Modal isOpen={false} onClose={() => {}}>
          This modal remains closed for this demo.
        </Modal>
        <Modal isOpen={false} onClose={() => {}}>
          This modal remains closed for this demo.
        </Modal>
      </div>
    );
  };

  return (
    <div>
      <p>
        When a modal is open, the root and all siblings should have aria-hidden="true" except for the modal container.
      </p>
      <br />
      <p>
        When the strict mode modal opens, inspect the DOM to see that the open modal has aria-hidden="true" when it
        should be "false".
      </p>
      <p>Also, every time the modal opens a new div is appened and is never removed until the page is refreshed.</p>
      <React.StrictMode>
        <YourIssue1 strict />
      </React.StrictMode>
      <p>When the non-strict mode modal opens, inspect the DOM to see the open modal has no aria-hidden attribute.</p>
      <YourIssue1 strict={undefined} />
      <br />
      <br />
      <p>
        Opening a modal while another adjacent modal is closed causes the aria-hidden attribute to be removed from the
        root and all siblings.
      </p>
      <YourIssue2 />
    </div>
  );
};

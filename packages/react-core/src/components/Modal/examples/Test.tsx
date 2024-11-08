// this is for testing purposed only.  This file will be deleted before PR merges.

import React from 'react';
import { Modal, Button } from '@patternfly/react-core';

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
              <s>
                Inspect the div containing the modal to see the value of aria-hidden.
                <div>Render count: {renderCount.current}</div>
              </s>
              <p>FIXED: Root div for portal has been removed. Only siblings of modal should have aria-hidden</p>
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
          <s>
            Inspect the div containing the modal to see the value of all root siblings having no aria-hidden attribute.
          </s>
          <p>FIXED: Root siblings now have aria-hidden applied.</p>
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
        <s>
          When the strict mode modal opens, inspect the DOM to see that the open modal has aria-hidden="true" when it
          should be "false".
        </s>
      </p>
      <p>FIXED: root no longer has aria-hidden</p>
      <p>
        <s>Also, every time the modal opens a new div is appened and is never removed until the page is refreshed.</s>
      </p>
      <p>FIXED: the div was removed as it is not needed.</p>
      <React.StrictMode>
        <YourIssue1 strict />
      </React.StrictMode>
      <p>When the non-strict mode modal opens, inspect the DOM to see the open modal has no aria-hidden attribute.</p>
      <YourIssue1 strict={undefined} />
      <br />
      <br />
      <p>
        <s>
          Opening a modal while another adjacent modal is closed causes the aria-hidden attribute to be removed from the
          root and all siblings.
        </s>
      </p>
      <p>FIXED: aria hidden is no longer removed.</p>
      <YourIssue2 />
    </div>
  );
};

import React from 'react';
import { Button, Form, FormGroup, FormGroupLabelHelp, Popover, TextInput } from '@patternfly/react-core';
import { Modal as ModalDeprecated, ModalVariant as ModalVariantDeprecated } from '@patternfly/react-core/deprecated';

export const ModalWithForm: React.FunctionComponent = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [nameValue, setNameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [addressValue, setAddressValue] = React.useState('');
  const nameLabelHelpRef = React.useRef(null);
  const emailLabelHelpRef = React.useRef(null);
  const addressLabelHelpRef = React.useRef(null);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setModalOpen(!isModalOpen);
  };

  const handleNameInputChange = (_event, value: string) => {
    setNameValue(value);
  };

  const handleEmailInputChange = (_event, value: string) => {
    setEmailValue(value);
  };
  const handleAddressInputChange = (_event, value: string) => {
    setAddressValue(value);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show modal with form
      </Button>
      <ModalDeprecated
        variant={ModalVariantDeprecated.small}
        title="Create account"
        description="Enter your personal information below to create an account."
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        actions={[
          <Button key="create" variant="primary" form="modal-with-form-form" onClick={handleModalToggle}>
            Confirm
          </Button>,
          <Button key="cancel" variant="link" onClick={handleModalToggle}>
            Cancel
          </Button>
        ]}
      >
        <Form id="modal-with-form-form">
          <FormGroup
            label="Name"
            labelHelp={
              <Popover
                triggerRef={nameLabelHelpRef}
                headerContent={
                  <div>
                    The
                    <a href="https://schema.org/name" target="_blank" rel="noopener noreferrer">
                      name
                    </a>
                    of a
                    <a href="https://schema.org/Person" target="_blank" rel="noopener noreferrer">
                      Person
                    </a>
                  </div>
                }
                bodyContent={
                  <div>
                    Often composed of
                    <a href="https://schema.org/givenName" target="_blank" rel="noopener noreferrer">
                      givenName
                    </a>
                    and
                    <a href="https://schema.org/familyName" target="_blank" rel="noopener noreferrer">
                      familyName
                    </a>
                    .
                  </div>
                }
              >
                <FormGroupLabelHelp ref={nameLabelHelpRef} aria-label="More info for name field" />
              </Popover>
            }
            isRequired
            fieldId="modal-with-form-form-name"
          >
            <TextInput
              isRequired
              type="email"
              id="modal-with-form-form-name"
              name="modal-with-form-form-name"
              value={nameValue}
              onChange={handleNameInputChange}
            />
          </FormGroup>
          <FormGroup
            label="E-mail"
            labelHelp={
              <Popover
                triggerRef={emailLabelHelpRef}
                headerContent={
                  <div>
                    The
                    <a href="https://schema.org/email" target="_blank" rel="noopener noreferrer">
                      e-mail
                    </a>
                    of a
                    <a href="https://schema.org/Person" target="_blank" rel="noopener noreferrer">
                      person
                    </a>
                  </div>
                }
                bodyContent={
                  <div>
                    Valid
                    <a href="https://schema.org/email" target="_blank" rel="noopener noreferrer">
                      e-mail
                    </a>
                    address.
                  </div>
                }
              >
                <FormGroupLabelHelp ref={emailLabelHelpRef} aria-label="More info for e-mail field" />
              </Popover>
            }
            isRequired
            fieldId="modal-with-form-form-email"
          >
            <TextInput
              isRequired
              type="email"
              id="modal-with-form-form-email"
              name="modal-with-form-form-email"
              value={emailValue}
              onChange={handleEmailInputChange}
            />
          </FormGroup>
          <FormGroup
            label="Address"
            labelHelp={
              <Popover
                triggerRef={addressLabelHelpRef}
                headerContent={
                  <div>
                    The
                    <a href="https://schema.org/address" target="_blank" rel="noopener noreferrer">
                      adress
                    </a>
                    of a
                    <a href="https://schema.org/Person" target="_blank" rel="noopener noreferrer">
                      person
                    </a>
                  </div>
                }
                bodyContent={
                  <div>
                    Valid
                    <a href="https://schema.org/PostalAddress" target="_blank" rel="noopener noreferrer">
                      postal address.
                    </a>
                  </div>
                }
              >
                <FormGroupLabelHelp ref={addressLabelHelpRef} aria-label="More info for address field" />
              </Popover>
            }
            isRequired
            fieldId="modal-with-form-form-address"
          >
            <TextInput
              isRequired
              type="email"
              id="modal-with-form-form-address"
              name="modal-with-form-form-address"
              value={addressValue}
              onChange={handleAddressInputChange}
            />
          </FormGroup>
        </Form>
      </ModalDeprecated>
    </React.Fragment>
  );
};

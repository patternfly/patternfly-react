import figma from '@figma/code-connect';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Popover } from '@patternfly/react-core';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';

// TODO: DESIGN: Add Modal Body component to Modal
// TODO: DESIGN: Add Modal Footer component to Modal
// TODO: DESIGN: Add Modal Header component to Modal
// Documentation for Modal can be found at https://www.patternfly.org/components/modal

figma.connect(
  Modal,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2940-18403',
  {
    props: {
      // boolean
      hasDescription: figma.boolean('Description', {
        true: 'Product description goes here',
        false: undefined
      }),
      help: figma.boolean('Help icon', {
        true: (
          <Popover
            headerContent={<div>Help Popover</div>}
            bodyContent={
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
              </div>
            }
            footerContent="Popover Footer"
          >
            <Button variant="plain" aria-label="Help" icon={<HelpIcon />} />
          </Popover>
        ),
        false: undefined
      }),
      title: 'Modal title',

      // enum
      modalFooter: figma.children(['Button', 'Link Button']),
      modalContent: 'Content goes here',
      titleIconVariant: figma.enum('Status', {
        Success: 'success',
        Danger: 'danger',
        Info: 'info',
        Warning: 'warning'
      }),
      variant: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large'
      })
    },
    example: (props) => {
      /* eslint-disable */
      const [isOpen, setIsOpen] = React.useState(false);
      /* eslint-enable */

      return (
        <>
          <Button
            variant="primary"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Show about modal
          </Button>
          <Modal
            aria-labelledby="<modal-id>"
            aria-describedby="<modal-body>"
            isOpen={true}
            onClose={() => {
              setIsOpen(!isOpen);
            }}
            variant={props.variant}
          >
            <ModalHeader
              description={props.hasDescription}
              help={props.help}
              labelId="<modal-id>"
              title={props.title}
              titleIconVariant={props.titleIconVariant}
            />
            <ModalBody tabIndex={0} id="<modal-body>">
              {props.modalContent}
            </ModalBody>
            <ModalFooter>{props.modalFooter}</ModalFooter>
          </Modal>
          <Button></Button>
        </>
      );
    }
  }
);

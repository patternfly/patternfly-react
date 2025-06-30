import figma from '@figma/code-connect';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Popover } from '@patternfly/react-core';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';

// TODO: DESIGN: Add Modal Body component to Modal
// TODO: DESIGN: Add Modal Footer component to Modal
// TODO: DESIGN: Add Modal Header component to Modal
// Documentation for Modal can be found at https://www.patternfly.org/components/modal

figma.connect(
  Modal,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2937-158',
  {
    props: {
      // TODO: DESIGN: Create ModalHeader component
      // hasHelpIcon: figma.boolean('Help icon', {
      //   true: (
      //     <Popover
      //       headerContent={<div>Help Popover</div>}
      //       bodyContent={
      //         <div>
      //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
      //         </div>
      //       }
      //       footerContent="Popover Footer"
      //     >
      //       <Button variant="plain" aria-label="Help" icon={<HelpIcon />} />
      //     </Popover>
      //   ),
      //   false: undefined
      // }),

      // boolean
      hasDescription: figma.boolean('Description', {
        true: 'Product description goes here',
        false: undefined
      }),
      hasHelpIcon: figma.boolean('Help icon', {
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
      variant: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large'
      }),

      modalFooter: figma.children(['Button', 'Link Button']),
      modalContent: 'Content goes here'
    },
    example: (props) => (
      <Modal
        aria-labelledby="<modal-title>"
        aria-describedby="<modal-body>"
        isOpen={true}
        onClose={() => {}}
        variant={props.variant}
      >
        <ModalHeader
          title={props.title}
          description={props.hasDescription}
          labelId="<modal-id>"
          help={props.hasHelpIcon}
        />
        <ModalBody id="<modal-body>">{props.modalContent}</ModalBody>
        <ModalFooter>{props.modalFooter}</ModalFooter>
      </Modal>
    )
  }
);

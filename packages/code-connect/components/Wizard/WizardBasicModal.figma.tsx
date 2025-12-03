import figma from '@figma/code-connect';
import {
  Drawer,
  DrawerContent,
  DrawerContentBody,
  Modal,
  ModalVariant,
  Wizard,
  WizardHeader
} from '@patternfly/react-core';

// TODO: FIGMA: Update left panel to a semantic name or component
// TODO: FIGMA: Add 'Wizard step content' prop to Wizard Step Item
// Documentation for Wizard can be found at https://www.patternfly.org/components/wizard

figma.connect(
  Wizard,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-18627',
  {
    props: {
      children: figma.children('Wizard step item')
    },
    example: (props) => (
      <Modal isOpen={true} aria-label="Wizard modal" variant={ModalVariant.medium} onEscapePress={() => {}}>
        <Drawer isExpanded={true} onExpand={() => {}}>
          <DrawerContent panelContent="Panel content">
            <DrawerContentBody>
              <Wizard
                height={400}
                title="Header wizard"
                header={
                  <WizardHeader
                    title="Wizard header title"
                    description="Wizard header description"
                    closeButtonAriaLabel="Close header"
                  />
                }
              >
                {props.children}
              </Wizard>
            </DrawerContentBody>
          </DrawerContent>
        </Drawer>
      </Modal>
    )
  }
);

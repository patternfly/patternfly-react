import figma from '@figma/code-connect';
import {
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  DrawerPanelDescription
} from '@patternfly/react-core';

// TODO: DESIGN: Drawer is not using base components, rather it's using layers. Layers should be replaced with base components.
// Panel content is currently static. Once updated to components, it will be updated to be dynamic.
// Documentation for Drawer can be found at https://www.patternfly.org/components/drawer

figma.connect(
  Drawer,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8034-7676',
  {
    props: {
      // boolean
      isExpanded: true,
      isSecondary: figma.enum('Background', {
        Secondary: 'secondary',
        Primary: undefined
      }),

      // enum
      isInline: figma.enum('Type', { Inline: true }),
      position: figma.enum('Position', {
        'Left In Main Content Area': 'start',
        'Right - Full Page': undefined,
        'Left - Full Page': 'start',
        'Right Full Page': undefined,
        'Bottom Full Page': 'bottom',
        'Bottom In Main Content Area': 'bottom',
        'Right In Main Content Area': undefined
      })

      // Once updatedted to use child components, this will be used to render content.
      // panelContent: figma.children(['Drawer Header', 'Drawer Tabs', 'Drawer Content'])
    },
    example: (props) => (
      <Drawer
        id="<drawer-id>"
        isExpanded={props.isExpanded}
        isInline={props.isInline}
        isStatic={false}
        position={props.position}
        colorVariant={props.isSecondary}
        onExpand={() => {}}
      >
        <DrawerContent
          panelContent={
            <DrawerPanelContent>
              <DrawerHead>
                <span tabIndex={() => {}}>Drawer panel header</span>
                <DrawerActions>
                  <DrawerCloseButton onClick={() => {}} />
                </DrawerActions>
              </DrawerHead>
              <DrawerPanelDescription>Drawer panel description</DrawerPanelDescription>
              <DrawerPanelBody>Drawer panel body</DrawerPanelBody>
            </DrawerPanelContent>
          }
        >
          <DrawerContentBody>Drawer body content</DrawerContentBody>
        </DrawerContent>
      </Drawer>
    )
  }
);

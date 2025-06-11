import figma from '@figma/code-connect';
import { Drawer, DrawerContent, DrawerContentBody } from '@patternfly/react-core';

figma.connect(
  Drawer,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8034-7676&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // boolean
      isExpanded: figma.boolean('Show Footer actions'),
      isResizable: figma.boolean('Is resizable'),

      // enum
      isInline: figma.enum('Type', {
        Overlay: undefined,
        Inline: true
      }),
      position: figma.enum('Position', {
        'Left In Main Content Area': 'start',
        'Right - Full Page': undefined,
        'Left - Full Page': 'start',
        'Right Full Page': undefined,
        'Bottom Full Page': 'end',
        'Bottom In Main Content Area': 'end',
        'Right In Main Content Area': undefined
      }),

      panelContent: figma.children('*')
    },
    example: (props) => (
      // Documentation for Drawer can be found at https://www.patternfly.org/components/drawer
      <Drawer
        id="<drawer-id>"
        isExpanded={props.isExpanded}
        isInline={props.isInline}
        position={props.position}
        onResize={() => {}}
        onExpand={() => {}}
      >
        <DrawerContent panelContent={props.panelContent}>
          <DrawerContentBody>Drawer content</DrawerContentBody>
        </DrawerContent>
      </Drawer>
    )
  }
);

import figma from '@figma/code-connect';
import {
  Brand,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle
} from '@patternfly/react-core';

import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

const sharedProps = {
  // boolean
  cardBody: figma.boolean('Body text', {
    true: <CardBody>Body text</CardBody>,
    false: undefined
  }),
  cardFooter: figma.boolean('Body text', {
    true: <CardFooter>Body text</CardFooter>,
    false: undefined
  }),
  cardHeader: figma.boolean('Card header', {
    true: figma.boolean('Header action', {
      true: figma.boolean('Header image', {
        true: (
          <>
            <CardHeader
              actions={
                <Dropdown
                  onSelect={() => {}}
                  isOpen={false}
                  onOpenChange={() => {}}
                  toggle={(toggleRef) => (
                    <MenuToggle
                      ref={toggleRef}
                      onClick={() => {}}
                      isExpanded={false}
                      aria-label="Time picker"
                      icon={<EllipsisVIcon />}
                    />
                  )}
                >
                  <DropdownList>
                    <DropdownItem value={0} key="action">
                      Action
                    </DropdownItem>
                    <DropdownItem value={1} key="operation">
                      Operation
                    </DropdownItem>
                  </DropdownList>
                </Dropdown>
              }
            >
              <Brand src="<path-to-logo>" alt="PatternFly logo" style={{ width: '300px' }} />
            </CardHeader>
            <CardTitle>Card title text content</CardTitle>
          </>
        ),
        false: (
          <CardHeader
            actions={
              <Dropdown
                onSelect={() => {}}
                isOpen={false}
                onOpenChange={() => {}}
                toggle={(toggleRef) => (
                  <MenuToggle
                    ref={toggleRef}
                    onClick={() => {}}
                    isExpanded={false}
                    aria-label="Time picker"
                    icon={<EllipsisVIcon />}
                  />
                )}
              >
                <DropdownList>
                  <DropdownItem value={0} key="action">
                    Action
                  </DropdownItem>
                  <DropdownItem value={1} key="operation">
                    Operation
                  </DropdownItem>
                </DropdownList>
              </Dropdown>
            }
          >
            <CardTitle>Card title text content</CardTitle>
          </CardHeader>
        )
      }),
      false: figma.boolean('Header image', {
        true: (
          <>
            <CardHeader>
              <Brand src="<path-to-logo>" alt="PatternFly logo" style={{ width: '300px' }} />
            </CardHeader>
            <CardTitle>Card title text content</CardTitle>
          </>
        ),
        false: (
          <CardHeader>
            <CardTitle>Card title text content</CardTitle>
          </CardHeader>
        )
      })
    }),
    false: undefined
  }),
  isExpanded: figma.boolean('Expandable toggle', {
    true: isExpanded,
    false: undefined
  }),

  // enum
  isCompact: figma.enum('Size', { Compact: true }),
  isPlain: figma.enum('Style', { Plain: true }),
  isLarge: figma.enum('Size', { Large: true }),

  variant: figma.enum('Style', {
    Default: undefined,
    Secondary: 'secondary'
  })
};

// Basic Card
figma.connect(Card, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=3144-18658', {
  props: {
    ...sharedProps
  },
  example: (props) => (
    <Card
      variant={props.variant}
      isExpanded={props.isExpanded}
      isPlain={props.isPlain}
      isLarge={props.isLarge}
      isCompact={props.isCompact}
      isFullHeight={false} // PLACEHOLDER: isFullHeight is not supported in this component
    >
      {props.cardHeader}
      {props.cardBody}
      {props.cardFooter}
    </Card>
  )
});

// Clickable (Actionable) Card
figma.connect(Card, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=3144-18665', {
  props: {
    ...sharedProps,
    isDisabled: figma.enum('State', { Disabled: 'disabled' }),
    isClicked: figma.enum('State', { Clicked: true })
  },
  example: (props) => (
    <Card
      variant={props.variant}
      isExpanded={props.isExpanded}
      isPlain={props.isPlain}
      isLarge={props.isLarge}
      isCompact={props.isCompact}
      isClickable
      isDisabled={props.isDisabled}
      isClicked={props.isClicked}
    >
      {props.cardHeader}
      {props.cardBody}
      {props.cardFooter}
    </Card>
  )
});

// Multiselect Card
figma.connect(Card, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=3144-18682', {
  props: {
    ...sharedProps,
    isDisabled: figma.enum('State', { Disabled: 'disabled' }),
    isClicked: figma.enum('State', { Clicked: true }),
    isSelected: figma.enum('State', { Selected: true })
  },
  example: (props) => (
    <Card
      variant={props.variant}
      isExpanded={props.isExpanded}
      isPlain={props.isPlain}
      isLarge={props.isLarge}
      isCompact={props.isCompact}
      isClickable
      isDisabled={props.isDisabled}
      isClicked={props.isClicked}
      isSelectable
      isSelected={props.isSelected}
    >
      {props.cardHeader}
      {props.cardBody}
      {props.cardFooter}
    </Card>
  )
});

// Single Select Card
figma.connect(
  Card,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=27155-32360',
  {
    props: {
      ...sharedProps,
      isDisabled: figma.enum('State', { Disabled: 'disabled' }),
      isClicked: figma.enum('State', { Clicked: true }),
      isSelected: figma.enum('State', { Selected: true })
    },
    example: (props) => (
      <Card
        variant={props.variant}
        isExpanded={props.isExpanded}
        isPlain={props.isPlain}
        isLarge={props.isLarge}
        isCompact={props.isCompact}
        isClickable
        isDisabled={props.isDisabled}
        isClicked={props.isClicked}
        isSelectable
        isSelected={props.isSelected}
      >
        {props.cardHeader}
        {props.cardBody}
        {props.cardFooter}
      </Card>
    )
  }
);

// // Clickable + Selectable Card
// figma.connect(Card, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=3144-18715', {
//   props: {
//     ...sharedProps,
//     isDisabled: figma.enum('State', { Disabled: 'disabled' }),
//     isClicked: figma.enum('State', { Clicked: true }),
//     isSelected: figma.enum('State', { Selected: true })
//   },
//   example: (props) => (
//     <Card
//       variant={props.variant}
//       isExpanded={props.isExpanded}
//       isPlain={props.isPlain}
//       isLarge={props.isLarge}
//       isCompact={props.isCompact}
//       isClickable
//       isDisabled={props.isDisabled}
//       isClicked={props.isClicked}
//       isSelectable
//       isSelected={props.isSelected}
//     >
//       {props.cardHeader}
//       {props.cardBody}
//       {props.cardFooter}
//     </Card>
//   )
// });

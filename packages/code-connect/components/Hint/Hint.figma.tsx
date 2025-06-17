import figma from '@figma/code-connect';
import {
  Hint,
  HintBody,
  HintFooter,
  HintTitle,
  DropdownList,
  Dropdown,
  DropdownItem,
  Divider
} from '@patternfly/react-core';

// TODO: FIGMA: Use dropdown from figma for actions
// TODO: FIGMA: Create hint title
// TODO: FIGMA: Create hint body
// TODO: FIGMA: Create hint footer

// Note: Figma will not render conditional props within React components.
// This means that the <HintTitle>, <HintBody>, and <HintFooter> tags will not be properly render figma.string()

const actions = (
  <Dropdown
    isOpen={false} // should use an 'isOpen' state variable
    onSelect={() => {}} // need to define an onSelect handler
    onOpenChange={() => {}}
    toggle={() => {}}
  >
    <DropdownList>
      <DropdownItem value={0} key="action">
        Action
      </DropdownItem>
      <DropdownItem
        value={1}
        key="link"
        to="#default-link2"
        // Prevent the default onClick functionality for example purposes
        onClick={(ev: any) => ev.preventDefault()}
      >
        Link
      </DropdownItem>
      <DropdownItem value={2} isDisabled key="disabled action">
        Disabled Action
      </DropdownItem>
      <DropdownItem value={3} isDisabled key="disabled link" to="#default-link4">
        Disabled Link
      </DropdownItem>
      <Divider component="li" key="separator" />
      <DropdownItem value={4} key="separated action">
        Separated Action
      </DropdownItem>
      <DropdownItem value={5} key="separated link" to="#default-link6" onClick={(ev) => ev.preventDefault()}>
        Separated Link
      </DropdownItem>
    </DropdownList>
  </Dropdown>
);

figma.connect(
  Hint,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1118-3329&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // string
      hintTitle: figma.boolean('Show Title', {
        true: <HintTitle>{figma.string('✏️ Title')}</HintTitle>,
        false: undefined
      }),
      hintBody: figma.boolean('Show Body', {
        true: <HintBody>{figma.string('✏️ Body')}</HintBody>,
        false: undefined
      }),
      hintFooter: figma.boolean('Show Footer', {
        true: <HintFooter>{figma.instance('Inline link')}</HintFooter>,
        false: undefined
      }),

      actions: figma.instance('Swap button')
    },
    example: (props) => (
      // Documentation for Hint can be found at https://www.patternfly.org/components/hint
      <Hint actions={actions}>
        {props.hintTitle}
        {props.hintBody}
        {props.hintFooter}
      </Hint>
    )
  }
);

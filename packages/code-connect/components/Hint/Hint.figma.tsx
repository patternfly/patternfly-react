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
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import MenuToggle from '@patternfly/react-core/dist/js/components/MenuToggle/MenuToggle';

// TODO: FIGMA: Use dropdown from figma for actions
// TODO: FIGMA: Create hint title
// TODO: FIGMA: Create hint body
// TODO: FIGMA: Create hint footer

// Note: Figma will not render conditional props within React components.
// This means that the <HintTitle>, <HintBody>, and <HintFooter> tags will not be properly render figma.string()
// Documentation for Hint can be found at https://www.patternfly.org/components/hint

figma.connect(
  Hint,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1118-3329',
  {
    props: {
      // Pre-defined title options (enum works, boolean with JSX doesn't)
      hintTitle: figma.enum('Show Title', {
        false: undefined,
        true: <HintTitle>Hint title</HintTitle>
      }),

      // Pre-defined body options
      hintBody: figma.enum('Show Body', {
        false: undefined,
        true: <HintBody>This is hint body text that provides helpful information.</HintBody>
      }),

      // Pre-defined footer options
      hintFooter: figma.enum('Show Footer', {
        false: undefined,
        true: <HintFooter>Footer content or link</HintFooter>
      })
    },
    example: (props) => (
      <Hint
        actions={
          <Dropdown
            isOpen={false}
            onSelect={() => {}}
            onOpenChange={() => {}}
            toggle={() => (
              <MenuToggle
                aria-label="With title example kebab toggle"
                variant="plain"
                onClick={() => {}}
                isExpanded={false}
                icon={<EllipsisVIcon />}
              />
            )}
          >
            <DropdownList>
              <DropdownItem value={0} key="action">
                Action
              </DropdownItem>
              <DropdownItem value={1} key="link" to="#default-link2" onClick={() => {}}>
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
              <DropdownItem value={5} key="separated link" to="#default-link6" onClick={() => {}}>
                Separated Link
              </DropdownItem>
            </DropdownList>
          </Dropdown>
        }
      >
        {props.hintTitle}
        {props.hintBody}
        {props.hintFooter}
      </Hint>
    )
  }
);

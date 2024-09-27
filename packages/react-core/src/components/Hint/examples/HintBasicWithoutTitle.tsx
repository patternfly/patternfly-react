import React from 'react';
import {
  Hint,
  HintBody,
  HintFooter,
  Button,
  Dropdown,
  DropdownList,
  DropdownItem,
  Divider,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const HintBasicWithoutTitle: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = () => {
    setIsOpen(!isOpen);
  };

  const actions = (
    <Dropdown
      isOpen={isOpen}
      onSelect={onSelect}
      onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        <MenuToggle
          ref={toggleRef}
          aria-label="Without title example kebab toggle"
          variant="plain"
          onClick={onToggle}
          isExpanded={isOpen}
          icon={<EllipsisVIcon />}
        />
      )}
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
  return (
    <React.Fragment>
      <Hint>
        <HintBody>
          Welcome to the new documentation experience.
          <Button variant="link" isInline>
            Learn more about the improved features.
          </Button>
        </HintBody>
      </Hint>
      <br />
      <Hint actions={actions}>
        <HintBody>
          Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.
        </HintBody>
        <HintFooter>
          <Button variant="link" isInline>
            Try it for 90 days
          </Button>
        </HintFooter>
      </Hint>
    </React.Fragment>
  );
};

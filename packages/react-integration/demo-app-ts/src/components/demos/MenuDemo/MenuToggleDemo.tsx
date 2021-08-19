import React from 'react';
import { MenuToggle, Badge, Stack, StackItem } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export class MenuToggleDemo extends React.Component {
  static displayName = 'MenuToggleDemo';
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Stack hasGutter>
        <StackItem>
          <MenuToggle id="collapsed">Collapsed</MenuToggle>
        </StackItem>
        <StackItem>
          <MenuToggle isExpanded id="expanded">
            Expanded
          </MenuToggle>
        </StackItem>
        <StackItem>
          <MenuToggle isDisabled id="disabled">
            Disabled
          </MenuToggle>
        </StackItem>
        <StackItem>
          <MenuToggle variant="primary" id="primary">
            Primary
          </MenuToggle>
        </StackItem>
        <StackItem>
          <MenuToggle variant="plain" id="plain">
            <EllipsisVIcon />
          </MenuToggle>
        </StackItem>
        <StackItem>
          <MenuToggle icon={<CogIcon />} id="icon">
            With icon
          </MenuToggle>
        </StackItem>
        <StackItem>
          <MenuToggle badge={<Badge>4</Badge>} id="badge">
            With badge
          </MenuToggle>
        </StackItem>
      </Stack>
    );
  }
}

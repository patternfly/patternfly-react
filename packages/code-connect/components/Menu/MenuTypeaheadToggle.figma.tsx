import figma from '@figma/code-connect';
import { MenuToggle, Avatar } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

// Documentation for MenuToggle can be found at https://www.patternfly.org/components/menu-typeahead-toggle

figma.connect(
  MenuToggle,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=36729-9027',
  {
    props: {
      // boolean
      hasCheckbox: figma.boolean('Show Checkbox'),
      showBadge: figma.boolean('Show Badge', {
        true: figma.children('Badge'),
        false: undefined
      }),
      showCustomIcon: figma.boolean('Show Custom Icon', {
        true: <CogIcon />,
        false: undefined
      }),
      showAvatar: figma.boolean('Show Avatar', {
        true: <Avatar src={imgAvatar} alt="avatar" />,
        false: undefined
      }),
      toggleText: figma.boolean('Toggle text', {
        true: figma.string('✏️ Toggle Text'),
        false: undefined
      }),

      // enum
      isSelected: figma.enum('State', { Selected: true })
    },
    example: (props) => (
      <MenuToggle
        badge={props.showBadge}
        customIcon={props.showCustomIcon}
        hasCheckbox={props.hasCheckbox}
        icon={props.showAvatar}
        isSelected={props.isSelected}
      >
        {props.toggleText}
      </MenuToggle>
    )
  }
);

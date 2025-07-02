import figma from '@figma/code-connect';
import { Avatar, MenuToggle } from '@patternfly/react-core';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';

// Documentation for MenuToggle can be found at https://www.patternfly.org/components/menu-toggle-with-button-style

figma.connect(
  MenuToggle,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3466-40444',
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
      isDisabled: figma.enum('State', { Disabled: true }),
      isSelected: figma.enum('State', { Selected: true })
    },
    example: (props) => (
      <MenuToggle
        badge={props.showBadge}
        customIcon={props.showCustomIcon}
        hasCheckbox={props.hasCheckbox}
        icon={props.showAvatar}
        isDisabled={props.isDisabled}
        isSelected={props.isSelected}
      >
        {props.toggleText}
      </MenuToggle>
    )
  }
);

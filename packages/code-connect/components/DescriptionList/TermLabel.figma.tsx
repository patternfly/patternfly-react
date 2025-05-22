import figma from '@figma/code-connect';
import { DescriptionListTerm } from '@patternfly/react-core';

figma.connect(
  DescriptionListTerm,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1121-3453&m=dev',
  {
    props: {
      icon: figma.boolean('Icon ⎆'),
      termHelpUnderline: figma.boolean('Term help underline'),
      label: figma.string('✏️ Label'),
      inlineEditToggle: figma.boolean('Inline edit toggle')
    },
    example: (props) => (
      <DescriptionListTerm
        icon={props.icon}
        underline={props.termHelpUnderline}
        label={props.label}
        inlineEditToggle={props.inlineEditToggle}
      />
    )
  }
);

import figma from '@figma/code-connect';
import { WizardStep } from '@patternfly/react-core';

// TODO: FIGMA: Add "With drawer" should be an enum if we expect to conditionally render the variant
// Documentation for WizardStep can be found at https://www.patternfly.org/components/wizard

figma.connect(
  WizardStep,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-17356',
  {
    props: {
      // string
      name: figma.string('✏️ Nav item'),

      // boolean
      isExpandable: figma.boolean('Expandable'),

      // enum
      isDisabled: figma.enum('State', {
        Disabled: true,
        Enabled: false
      }),

      hasSteps: figma.enum('Expansion', {
        'No expansion': undefined,
        'Expandable - Open': [
          <WizardStep name="Substep A" id="expand-steps-sub-a" key="expand-steps-sub-a">
            Substep A content
          </WizardStep>,
          <WizardStep name="Substep B" id="expand-steps-sub-b" key="expand-steps-sub-b">
            Substep B content
          </WizardStep>
        ],
        'Expandable - Close': undefined
      })

      // children
    },
    example: (props) => (
      <WizardStep
        isDisabled={props.isDisabled}
        isExpandable={props.isExpandable}
        name={props.name}
        id="<your-id>"
        steps={props.hasSteps}
      >
        Step content
      </WizardStep>
    )
  }
);

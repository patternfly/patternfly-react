import {
  DescriptionListTerm,
  DescriptionListTermHelpText,
  DescriptionListTermHelpTextButton,
  Popover
} from '@patternfly/react-core';
import figma from '@figma/code-connect';

// TODO: FIGMA: Separate this into two components: DescriptionListTerm and DescriptionListTermHelpText
figma.connect(
  DescriptionListTerm,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1121-3453',
  {
    props: {
      // enum
      descriptionListTerm: figma.boolean('Term help underline', {
        true: (
          <DescriptionListTermHelpText>
            <Popover headerContent={<div>Name</div>} bodyContent={<div>Additional name info</div>}>
              <DescriptionListTermHelpTextButton> Name </DescriptionListTermHelpTextButton>
            </Popover>
          </DescriptionListTermHelpText>
        ),
        false: <DescriptionListTerm>{figma.children('*')}</DescriptionListTerm>
      })
    },
    example: (props) => (
      // Documentation for DescriptionListTerm can be found at https://www.patternfly.org/components/description-list
      <>{props.descriptionListTerm}</>
    )
  }
);

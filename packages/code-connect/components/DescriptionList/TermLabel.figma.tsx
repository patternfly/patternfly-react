import {
  DescriptionListTerm,
  DescriptionListTermHelpText,
  DescriptionListTermHelpTextButton,
  Popover
} from '@patternfly/react-core';
import figma from '@figma/code-connect';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';

// TODO: DESIGN: Convert inline edit and help text to variants rather than booleans.
// Note: We don't currently have support for inline edit + help text + icon, therefore current Figma config is not supported.
// Documentation for DescriptionListTerm can be found at https://www.patternfly.org/components/description-list

figma.connect(
  DescriptionListTerm,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=36279-2532',
  {
    variant: { 'Inline edit toggle': true, 'Has help text': false },
    props: {
      label: figma.string('✏️ Label'),
      children: figma.children('*')
    },
    example: (props) => (
      <DescriptionListTerm>
        <form className="pf-v6-c-inline-edit" id="single-inline-edit-with-label-example">
          <div className="pf-v6-c-inline-edit__group">
            <label
              className="pf-v6-c-inline-edit__label"
              id="single-inline-edit-with-label-example-label"
              htmlFor="single-inline-edit-with-label-example-input"
            >
              {props.label}
            </label>
            <div className="pf-v6-c-inline-edit__action pf-m-enable-editable">
              <button
                className="pf-v6-c-button pf-m-plain"
                type="button"
                id="single-inline-edit-with-label-example-edit-button"
                aria-label="Edit"
                aria-labelledby="single-inline-edit-with-label-example-label single-inline-edit-with-label-example-edit-button"
              >
                <span className="pf-v6-c-button__icon">
                  <i className="fas fa-pencil-alt" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </form>
      </DescriptionListTerm>
    )
  }
);

figma.connect(
  DescriptionListTerm,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=36279-2532',
  {
    variant: { 'Has help text': true, 'Inline edit toggle': false },
    props: {
      icon: figma.enum('Icon ⎆', {
        true: <CodeBranchIcon />,
        false: undefined
      }),
      label: figma.string('✏️ Label'),
      children: figma.children('*')
    },
    example: (props) => (
      <DescriptionListTermHelpText>
        <Popover headerContent={<div>{props.label}</div>} bodyContent={<div>This is the help text</div>}>
          <DescriptionListTermHelpTextButton>
            {props.label}
            {props.children}
          </DescriptionListTermHelpTextButton>
        </Popover>
      </DescriptionListTermHelpText>
    )
  }
);

figma.connect(
  DescriptionListTerm,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=36279-2532',
  {
    props: {
      // string
      label: figma.string('✏️ Label'),

      // enum
      icon: figma.enum('Icon ⎆', {
        true: <CodeBranchIcon />,
        false: undefined
      })
    },
    example: (props) => <DescriptionListTerm icon={props.icon}>{props.label}</DescriptionListTerm>
  }
);
